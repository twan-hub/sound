import { ApiProperty } from '@nestjs/swagger';
import { IsRFC3339, IsString, IsNumber, IsUUID } from 'class-validator';

export class UserUpdateResponseDto {
  @ApiProperty({
    example: '0f0a52bf-3e55-4ce0-8fee-801ff4369227',
  })
  @IsUUID()
  userId: string;

  @ApiProperty({ required: true, example: 'John Doe' })
  @IsString()
  fullName: string;

  @ApiProperty({ required: true, example: '2021-08-31T21:40:47.853Z' })
  @IsRFC3339()
  birthday: string;
}
