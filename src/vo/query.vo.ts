import { ApiProperty } from '@nestjs/swagger';

export class QueryVo {
  @ApiProperty({ description: 'key id' })
  id?: number;

  @ApiProperty({ description: 'user created date' })
  createdAt?: Date;

  @ApiProperty({ description: 'user updated date' })
  updatedAt?: Date;
}
