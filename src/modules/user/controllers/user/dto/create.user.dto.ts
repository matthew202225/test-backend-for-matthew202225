import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmpty, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateUserDto {
  @ApiPropertyOptional({ required: true, description: 'user name' })
  @MaxLength(128, { message: 'user name max length is 128' })
  @IsEmpty({ message: 'user name is empty' })
  readonly name?: string;

  @ApiPropertyOptional({ required: true, description: 'user address' })
  @MaxLength(128, { message: 'user address max length is 128' })
  @IsNotEmpty({ message: 'user address is empty' })
  readonly address?: string;

  @ApiPropertyOptional({ required: true, description: 'user description' })
  @MaxLength(128, { message: 'user description max length is 128' })
  readonly description?: string;
}
