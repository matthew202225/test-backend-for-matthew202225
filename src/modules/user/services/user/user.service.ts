import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../controllers/user/dto/create.user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../entities/user.entity';
import { Repository } from 'typeorm';

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
    console.log(createUserDto, this.userRepository)
    // const { address } = createUserDto;
    // const user: Pick<UserEntity, 'id'> | undefined = await this.userRepository.findOne({
    //   where: { address },
    //   select: ['id'],
    // });
    // if (user) {
    //   await this.userRepository.update(user.id, createUserDto);
    // } else {
    //   const userRes = this.userRepository.create(createUserDto);
    //   userRes.exp = 100;
    //   console.log(userRes);
    //   return await this.userRepository.save(userRes);
    // }
  }
}
