import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ResDto<T> {
  @ApiPropertyOptional({ required: true, description: '状态吗' })
  @IsOptional()
  readonly code: number;

  @ApiPropertyOptional({ required: false, description: '描述信息' })
  @IsOptional()
  readonly message: string;

  readonly result: T;
}
