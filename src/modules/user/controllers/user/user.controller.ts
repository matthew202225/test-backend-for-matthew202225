import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiAuth } from '@src/decorators/api.auth';
import { ResDefaultVo } from '@src/vo/resDefault.vo';
import { UserService } from '../../services/user/user.service';
import { CreateUserDto } from './dto/create.user.dto';
import { DeleteUserDto } from './dto/delete.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { UserVo } from './vo/user.vo';
import { UserDetailVo } from './vo/detail.user.vo';
import { UserListlVo } from './vo/list.user.vo';

@ApiTags('User Manage')
@ApiBearerAuth()
// @UseGuards(AuthGuard)
@ApiAuth()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Create User', description: 'Create User' })
  @Post('create')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: UserDetailVo,
    description: 'User Detail',
  })
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserVo> {
    return this.userService.createUser(createUserDto);
  }

  @ApiOperation({ summary: 'Update User', description: 'Update User' })
  @Post('update')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: ResDefaultVo })
  async updateUser(@Body() updateUserDto: UpdateUserDto): Promise<void> {
    return this.userService.updateUser(updateUserDto);
  }

  @ApiOperation({ summary: 'Delete User', description: 'Delete User' })
  @Post('delete')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: ResDefaultVo })
  async deleteUser(@Body() deleteUserDto: DeleteUserDto): Promise<void> {
    return this.userService.deleteUser(deleteUserDto);
  }

  @ApiOperation({ summary: 'Get User Detail', description: 'Get User Detail' })
  @ApiOkResponse({
    type: UserDetailVo,
    description: 'User Detail',
  })
  @Get('detail/:id')
  @HttpCode(HttpStatus.OK)
  async getUserDetail(@Param('id') id: string): Promise<UserVo> {
    return this.userService.getUserDetail(id);
  }

  @ApiOperation({ summary: 'Get User List', description: 'Get User List' })
  @ApiOkResponse({
    type: UserListlVo,
    description: 'User List',
  })
  @Get('list')
  @HttpCode(HttpStatus.OK)
  async getUserList(): Promise<UserVo[]> {
    return this.userService.getUserList();
  }
}
