import { ApiProperty } from '@nestjs/swagger';
import { QueryVo } from '@src/vo/query.vo';

import { IsOptional } from 'class-validator';

export class UserVo extends QueryVo {
  @ApiProperty({ description: 'key id' })
  name: number;

  @ApiProperty({ description: 'user created date' })
  address: Date;

  @ApiProperty({ required: false, description: 'user updated date' })
  @IsOptional()
  description?: Date;
}
