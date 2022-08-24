import { ApiPropertyOptional } from '@nestjs/swagger';

export abstract class ResVo {
  @ApiPropertyOptional({ required: true, description: '状态吗' })
  readonly code: number;

  @ApiPropertyOptional({ required: true, description: '描述信息' })
  readonly message: string;

  abstract result: any;
}
