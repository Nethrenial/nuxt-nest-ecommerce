import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AddUserAddressDto } from '../dto/add-user-address.dto';
import { UpdateUserAddressDto } from '../dto/update-user-address.dto';

@Injectable()
export class UsersAddressesService {
  /**
   * The prisma client
   */
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  /**
   * Get all the saved addresses of the user
   * @param id Desired user's id
   */
  async getUserAddresses(id: number) {
    const addresses = await this.prisma.userAddress.findMany({
      where: {
        userId: id,
      },
    });
    return addresses;
  }

  /**
   * Get user address by the given id
   * @param addressId ID of the desired address
   */
  async getUserAddressById(addressId: number) {
    const address = await this.prisma.userAddress.findUnique({
      where: {
        id: addressId,
      },
    });
    return address;
  }

  /**
   * Adds a new address to the user
   * @param id ID of the desired user
   * @param addressData Address data DTO
   */
  async addUserAddress(
    id: number,
    { address, city, state, zip, country }: AddUserAddressDto,
  ) {
    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: {
        addresses: {
          create: {
            address,
            city,
            state,
            zip,
            country,
          },
        },
      },
      include: {
        addresses: true,
      },
    });

    return updatedUser;
  }

  /**
   * Updates the given user address
   * @param id ID of the desired user
   * @param addressId ID of the desired address
   * @param addressData Address data DTO
   */
  async updateUserAddress(
    id: number,
    addressId: number,
    { address, city, state, zip, country }: UpdateUserAddressDto,
  ) {
    await this.prisma.userAddress.updateMany({
      where: {
        id: addressId,
        userId: id,
      },
      data: {
        address,
        city,
        state,
        zip,
        country,
      },
    });
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },

      include: {
        addresses: true,
      },
    });

    return user;
  }

  /**
   * Deletes the given user address
   * @param id ID of the desired user
   * @param addressId ID of the desired address
   */
  async removeUserAddress(id: number, addressId: number) {
    await this.prisma.userAddress.deleteMany({
      where: {
        id: addressId,
      },
    });

    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },

      include: {
        addresses: true,
      },
    });

    return user;
  }
}
