import { Injectable } from '@nestjs/common';
import { ShopOpenRequestDto } from './dto/shop-open-request.dto';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { PrismaClient } from '@prisma/client';
import { S3 } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ShopsService {
  prisma: PrismaClient;

  constructor(private readonly configService: ConfigService) {
    this.prisma = new PrismaClient();
  }

  /**
   *Send a shop open request to the admins
   * @param id ID of the user who's requesting to open a shop
   * @param data Data about the shop to open
   */
  async sendAShopOpenRequest(
    id: number,
    {
      address,
      city,
      contactEmail,
      contactPhone,
      country,
      description,
      name,
      state,
      zip,
      businessDocuments,
      coverPhoto,
      logo,
    }: ShopOpenRequestDto,
  ) {
    const s3 = new S3();
    const { Location: coverPhotoURL } = await s3
      .upload({
        Bucket: this.configService.get('AWS_S3_PUBLIC_BUCKET_NAME'),
        Key: `${id}/business/${coverPhoto.originalName}`,
        Body: coverPhoto.buffer,
      })
      .promise();
    const { Location: logoURL } = await s3
      .upload({
        Bucket: this.configService.get('AWS_S3_PUBLIC_BUCKET_NAME'),
        Key: `${id}/business/images/${logo.originalName}`,
        Body: logo.buffer,
      })
      .promise();

    const businessDocumentURLS: string[] = [];

    for (const businessDocument of businessDocuments) {
      const { Location: businessDocumentURL } = await s3
        .upload({
          Bucket: this.configService.get('AWS_S3_PUBLIC_BUCKET_NAME'),
          Key: `${id}/business/documents/${businessDocument.originalName}`,
          Body: businessDocument.buffer,
        })
        .promise();
      businessDocumentURLS.push(businessDocumentURL);
    }

    return this.prisma.shopOpenRequest.create({
      data: {
        address,
        city,
        contactEmail,
        contactPhone,
        country,
        description,
        name,
        state,
        zip,
        userId: id,
        createdAt: new Date(),
        updatedAt: new Date(),
        coverPhoto: coverPhotoURL,
        logo: logoURL,
        businessDocuments: businessDocumentURLS,
      },
    });
  }

  /**
   *Get all the shop open requests
   */
  async getAllShopOpenRequests() {
    return this.prisma.shopOpenRequest.findMany();
  }

  /**
   * Returns the shop open requests of the given user
   * @param id ID of the user
   */
  async getUserShopOpenRequest(id: number) {
    return this.prisma.shopOpenRequest.findFirst({
      where: {
        userId: id,
      },
    });
  }

  async approveShopOpenRequest(id: number) {
    const {
      address,
      businessDocuments,
      city,
      contactEmail,
      contactPhone,
      country,
      coverPhoto,
      description,
      logo,
      name,
      state,
      userId,
      zip,
    } = await this.prisma.shopOpenRequest.findUnique({
      where: {
        id,
      },
    });

    await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        roles: {
          push: 'Seller',
        },
        Shop: {
          create: {
            businessDocuments,
            contactEmail,
            contactPhone,
            coverPhoto,
            description,
            logo,
            name,
            physicalAddress: {
              create: {
                address,
                city,
                country,
                state,
                zip,
              },
            },
          },
        },
      },
    });

    await this.prisma.shopOpenRequest.delete({
      where: {
        id,
      },
    });
  }

  async rejectShopOpenRequest(id: number, reason: string) {
    await this.prisma.shopOpenRequest.update({
      where: {
        id,
      },
      data: {
        rejected: true,
        rejectedReason: reason,
      },
    });
  }
}
