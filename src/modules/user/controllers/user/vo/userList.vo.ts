import { ApiProperty } from '@nestjs/swagger';
import { ResVo } from '@src/vo/res.vo';
import { UserVo } from './user.vo';
export class UserListlVo extends ResVo {
  @ApiProperty({ type: UserVo, isArray: true })
  result: UserVo;
}
