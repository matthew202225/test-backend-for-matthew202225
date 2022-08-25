import { ApiProperty } from '@nestjs/swagger';
import { ResVo } from '@src/vo/res.vo';
import { UserVo } from './user.vo';

export class UserDetailVo extends ResVo {
  @ApiProperty({ type: UserVo })
  result: UserVo;
}
