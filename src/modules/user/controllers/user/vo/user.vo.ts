import { ApiProperty } from '@nestjs/swagger';
import { QueryVo } from '@src/vo/query.vo';

import { IsOptional } from 'class-validator';

export class UserVo extends QueryVo {
  @ApiProperty({ description: 'user name' })
  name: string;

  @ApiProperty({ description: 'user created date' })
  address: string;

  @ApiProperty({ required: false, description: 'user updated date' })
  @IsOptional()
  description?: string;
}
