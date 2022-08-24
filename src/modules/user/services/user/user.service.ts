import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../controllers/user/dto/create.user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from '../../controllers/user/dto/update.user.dto';
import { DeleteUserDto } from '../../controllers/user/dto/delete.user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  /**
   * @Description: 创建用户
   * @param {CreateUserDto} createUserDto
   * @return {*}
   */
  async createUser(createUserDto: CreateUserDto): Promise<any> {
    console.log(createUserDto, this.userRepository);
  }

  /**
   * @Description: 修改用户
   * @param {CreateUserDto} createUserDto
   * @return {*}
   */
  async updateUser(updateUserDto: UpdateUserDto): Promise<any> {
    console.log(updateUserDto, this.userRepository);
  }

  /**
   * @Description: 删除用户
   * @param {CreateUserDto} createUserDto
   * @return {*}
   */
  async deleteUser(deleteUserDto: DeleteUserDto): Promise<any> {
    console.log(deleteUserDto, this.userRepository);
  }

  /**
   * @Description: 用户详情
   * @param {CreateUserDto} createUserDto
   * @return {*}
   */
  async getUserDetail(id: string): Promise<any> {
    console.log(id, this.userRepository);
  }
  /**
   * @Description: 用户详情
   * @param {CreateUserDto} createUserDto
   * @return {*}
   */
  async getUserList(): Promise<any> {
    console.log(this.userRepository);
  }
}
