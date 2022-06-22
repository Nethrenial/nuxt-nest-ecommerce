import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { hash as bcryptHash, compare as bcryptCompare } from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { AddUserAddressDto } from './dto/add-user-address.dto';
import { UpdateUserAddressDto } from './dto/update-user-address.dto';
import { StripePaymentsService } from 'src/stripe-payments/stripe-payments.service';

@Injectable()
export class UsersService {
  /**
   * The prisma client
   */
  prisma: PrismaClient;

  constructor(private readonly stripePaymentsService: StripePaymentsService) {
    this.prisma = new PrismaClient();
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
    const newAddress = await this.prisma.userAddress.create({
      data: {
        userId: id,
        address,
        city,
        state,
        zip,
        country,
      },
    });

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: {
        addresses: {
          connect: {
            id: newAddress.id,
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

  /**
   * Returns the user if email exists, otherwise throws an 404
   * @param email email address of the desired user
   */
  async getByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (user) return user;
    throw new HttpException(
      'User with this email does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  /**
   * Returns the user if id exists, otherwise throws an 404
   * @param id id of the desired user
   */
  async getById(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (user) return user;
    throw new HttpException(
      'User with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  /**
   * Returns the user if refresh token matches.
   * @param refreshToken Refresh token to be compared
   * @param userId Desired user's id
   */
  async getUserIfRefreshTokenMatches(refreshToken: string, userId: number) {
    const user = await this.getById(userId);

    const isRefreshTokenMatching = await bcryptCompare(
      refreshToken,
      user.currentHashedRefreshToken,
    );

    if (isRefreshTokenMatching) {
      return user;
    }
  }

  /**
   * Removes the user's refresh token
   * @param id Desired user's id
   */
  async removeRefreshToken(id: number) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data: {
        currentHashedRefreshToken: null,
      },
    });
  }

  /**
   * Creates a new user
   * @param userData user data
   */
  async create({ email, name, password }: CreateUserDto) {
    const newUser = await this.prisma.user.create({
      data: {
        email,
        name,
        password,
        createdAt: new Date(),
        updatedAt: new Date(),
        roles: ['User'],
      },
    });
    await this.stripePaymentsService.createCustomer(name, email);
    return newUser;
  }

  /**
   * Marks a user's email as verified
   * @param email The verified email
   */
  async markEmailAsConfirmed(email: string) {
    const user = await this.prisma.user.update({
      where: {
        email,
      },
      data: {
        isEmailVerified: true,
      },
    });
    return user;
  }

  /**
   * Sets the refresh token after hashing to the given user
   * @param refreshToken Refresh token to be set
   * @param id ID of the desired user
   */
  async setCurrentRefreshToken(refreshToken: string, id: number) {
    const currentHashedRefreshToken = await bcryptHash(refreshToken, 10);
    await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        currentHashedRefreshToken,
      },
    });
  }
}
