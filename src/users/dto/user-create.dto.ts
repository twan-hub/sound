import { ApiProperty } from '@nestjs/swagger';
import { IsRFC3339, IsString } from 'class-validator';

export class UserPostResponseDto {
  @ApiProperty({ required: true, example: 'John Doe' })
  @IsString()
  fullName: string;

  @ApiProperty({ required: true, example: '2021-08-31T21:40:47.853Z' })
  @IsRFC3339()
  birthday: string;
}
