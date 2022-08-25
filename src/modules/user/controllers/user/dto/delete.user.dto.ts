import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class DeleteUserDto {
  @ApiPropertyOptional({ required: true, description: 'user id' })
  @IsNotEmpty({ message: 'user id is empty' })
  readonly id: string;
}
