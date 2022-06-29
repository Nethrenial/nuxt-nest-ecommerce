import { Injectable } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { S3 } from 'aws-sdk';

@Injectable()
export class ProductsService {
  prisma: PrismaClient;

  constructor(private readonly configService: ConfigService) {
    this.prisma = new PrismaClient();
  }

  async addProduct(
    id: number,
    shopId: number,
    {
      currency,
      description,
      discount,
      images,
      name,
      price,
      sku,
      sold,
      specifications,
      stock,
      video,
      categories,
    }: CreateProductDto,
  ) {
    const s3 = new S3();
    const { Location: videoURL } = await s3
      .upload({
        Bucket: this.configService.get('AWS_S3_PUBLIC_BUCKET_NAME'),
        Key: `${id}/business/products/${video.originalName}`,
        Body: video.buffer,
      })
      .promise();

    const imageURLs: string[] = [];

    for (const image of images) {
      const { Location: imageURL } = await s3
        .upload({
          Bucket: this.configService.get('AWS_S3_PUBLIC_BUCKET_NAME'),
          Key: `${id}/business/products/photos/${image.originalName}`,
          Body: image.buffer,
        })
        .promise();
      imageURLs.push(imageURL);
    }

    const specificationsArray = JSON.parse(specifications) as Prisma.JsonArray;

    await this.prisma.shop.update({
      where: {
        id: shopId,
      },

      data: {
        Product: {
          create: {
            name,
            price,
            description,
            sku,
            stock,
            sold,
            currency,
            discount,
            images: imageURLs,
            video: videoURL,
            specifications: specificationsArray,
            categories: {
              connect: [
                ...categories.map((category) => {
                  return { id: category };
                }),
              ],
            },
          },
        },
      },
    });
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
