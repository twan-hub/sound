import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserPostResponseDto } from './dto/user-create.dto';
import { User } from './user.entity';
import { v4 as uuidv4 } from 'uuid';
import { UserUpdateResponseDto } from './dto/user-update.dto';
import { UserDeleteResponseDto } from './dto/user-delete.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async createUser(user: UserPostResponseDto) {
    await this.usersRepository.save(user);
    return user;
  }

  async getUser(_id: number): Promise<User[]> {
    return await this.usersRepository.find({
      select: ['fullName', 'birthday', 'isActive'],
      where: [{ id: _id }],
    });
  }

  async updateUser(userUpdateResponseDto: UserUpdateResponseDto) {
    const user = await this.usersRepository.create(userUpdateResponseDto);
    await this.usersRepository.update(
      { userId: user.userId },
      userUpdateResponseDto,
    );
    return user;
  }

  async inactiveUser(user: UserDeleteResponseDto) {
    this.usersRepository.softDelete({ userId: user.userId, isActive: true });
    return user;
  }
}
