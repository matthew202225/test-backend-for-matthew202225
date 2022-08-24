import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
// import { AuthGuard } from '@src/guard/auth/auth.guard';
import { ApiAuth } from '@src/decorators/api.auth';
import { UserService } from '../../services/user/user.service';
import { CreateUserDto } from './dto/create.user.dto';
import { UserVo } from './vo/access.vo';
// import { AddExpUserDto } from '@src/modules/admin/system/user/controllers/user/dto/addexp.user.dto';

@ApiTags('用户管理')
@ApiBearerAuth()
// @UseGuards(AuthGuard)
@ApiAuth()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: '创建用户', description: '创建用户' })
  @ApiOkResponse({
    type: UserVo,
    description: '创建用户',
  })
  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserVo> {
    return this.userService.createUser(createUserDto);
  }

  // @ApiOperation({ summary: '查询用户', description: '查询用户' })
  // @ApiOkResponse({
  //   type: UserEntity,
  //   description: '查询用户',
  // })
  // @Get('query/:address')
  // @HttpCode(HttpStatus.CREATED)
  // async queryUser(@Param('address') address: string): Promise<UserEntity | undefined> {
  //   return this.UserService.queryUser(address);
  // }
}
