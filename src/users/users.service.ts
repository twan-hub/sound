import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserPostResponseDto } from './dto/user-create.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async createUser(user: UserPostResponseDto) {
    const entity = this.usersRepository.create(user);
    await this.usersRepository.insert(entity);
    return user;
  }

  async getUser(_id: number): Promise<User[]> {
    return await this.usersRepository.find({
      select: ['fullName', 'birthday', 'isActive'],
      where: [{ id: _id }],
    });
  }

  async updateUser(user: User) {
    this.usersRepository.save(user);
  }

  async deleteUser(user: User) {
    this.usersRepository.delete(user.id);
  }
}
