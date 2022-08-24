import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmpty } from 'class-validator';

export class DeleteUserDto {
  @ApiPropertyOptional({ required: true, description: 'user id' })
  @IsEmpty({ message: 'user name is empty' })
  readonly id: string;
}
