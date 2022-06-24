import { Injectable } from '@nestjs/common';
import { ShopOpenRequestDto } from './dto/shop-open-request.dto';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ShopsService {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

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
    }: ShopOpenRequestDto,
  ) {
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
        coverPhoto: '',
        logo: '',
        businessDocuments: [],
      },
    });
  }

  findAll() {
    return `This action returns all shops`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shop`;
  }

  update(id: number, updateShopDto: UpdateShopDto) {
    return `This action updates a #${id} shop`;
  }

  remove(id: number) {
    return `This action removes a #${id} shop`;
  }
}
