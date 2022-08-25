import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
   * create user
   *
   * @param {CreateUserDto} createUserDto
   * @return {*}  {Promise<UserEntity>}
   * @memberof UserService
   */
  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const { name } = createUserDto;
    const res = await this.userRepository.findOne({ where: { name } });
    if (res) {
      throw new HttpException(`user name ${name} already exist`, HttpStatus.OK);
    }
    return this.userRepository.save(createUserDto);
  }

  /**
   * update user
   *
   * @param {UpdateUserDto} { id, address, description }
   * @return {*}  {Promise<void>}
   * @memberof UserService
   */
  async updateUser({ id, address, description }: UpdateUserDto): Promise<void> {
    await this.userRepository.update(id, {
      address,
      description,
    });
  }

  /**
   * delete user
   *
   * @param {DeleteUserDto} { id }
   * @return {*}  {Promise<any>}
   * @memberof UserService
   */
  async deleteUser({ id }: DeleteUserDto): Promise<void> {
    await this.userRepository.delete(id);
  }

  /**
   * get user detail
   *
   * @param {string} id
   * @return {*}  {Promise<UserEntity>}
   * @memberof UserService
   */
  async getUserDetail(id: string): Promise<UserEntity> {
    const res = await this.userRepository.findOne({ where: { id } });
    if (res === undefined) {
      throw new HttpException(`did not find user by id ${id}`, HttpStatus.OK);
    }
    return res;
  }

  /**
   * get user list
   *
   * @return {*}  {Promise<UserEntity[]>}
   * @memberof UserService
   */
  async getUserList(): Promise<UserEntity[]> {
    return this.userRepository.find({ order: { createdAt: 'DESC' } });
  }
}
