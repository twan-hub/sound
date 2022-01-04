import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserPostResponseDto } from './dto/user-create.dto';
import { UserDeleteResponseDto } from './dto/user-delete.dto';
import { UserUpdateResponseDto } from './dto/user-update.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get(':id')
  get(@Param() params) {
    return this.service.getUser(params.id);
  }

  @Post()
  create(
    @Body() userPostResponseDto: UserPostResponseDto,
  ): Promise<UserPostResponseDto> {
    return this.service.createUser(userPostResponseDto);
  }

  @Put()
  update(
    @Body()
    userUpdateResponseDto: UserUpdateResponseDto,
  ): Promise<any> {
    return this.service.updateUser(userUpdateResponseDto);
  }

  @Delete(':id')
  deleteUser(@Body() userDeleteResponseDto: UserDeleteResponseDto) {
    return this.service.inactiveUser(userDeleteResponseDto);
  }
}
