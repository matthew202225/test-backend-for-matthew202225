import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class UpdateUserDto {
  @ApiPropertyOptional({ required: true, description: 'user id' })
  @IsNotEmpty({ message: 'user id is empty' })
  readonly id: string;

  @ApiPropertyOptional({ required: true, description: 'user address' })
  @MaxLength(128, { message: 'user address max length is 128' })
  @IsNotEmpty({ message: 'user address is empty' })
  readonly address: string;

  @ApiPropertyOptional({ required: true, description: 'user description' })
  @MaxLength(128, { message: 'user description max length is 128' })
  readonly description: string;
}
