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
  update(@Body() user: User) {
    return this.service.updateUser(user);
  }

  @Delete(':id')
  deleteUser(@Body() user: User) {
    return this.service.deleteUser(user);
  }
}
