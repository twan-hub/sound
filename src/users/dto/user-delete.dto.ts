import { ApiProperty } from '@nestjs/swagger';
import {
  IsRFC3339,
  IsString,
  IsNumber,
  IsUUID,
  IsBoolean,
} from 'class-validator';

export class UserDeleteResponseDto {
  @ApiProperty({
    example: '0f0a52bf-3e55-4ce0-8fee-801ff4369227',
  })
  @IsUUID()
  userId: string;
}
