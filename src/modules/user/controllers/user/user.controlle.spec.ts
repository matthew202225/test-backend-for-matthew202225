import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../../services/user/user.service';
import { UserController } from './user.controller';
import { INestApplication } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import request from 'supertest';

describe('UserService', () => {
  let userController: UserController;
  let app: INestApplication;

  const mockUser = {
    id: '1',
    name: 'haoxiang',
    address: 'a steet',
    describe: 'test',
  };

  const mockService = {
    createUser: (data: CreateUserDto) => data,
    updateUser: () => ({}),
    deleteUser: () => ({}),
    getUserDetail: () => mockUser,
    getUserList: () => [mockUser],
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    })
      .overrideProvider(UserService)
      .useValue(mockService)
      .compile();

    userController = module.get<UserController>(UserController);
    app = module.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  it(`/POST create user`, async () => {
    return request(app.getHttpServer()).post('/user/create').send(mockUser).expect(200);
  });

  it(`/POST update user`, () => {
    return request(app.getHttpServer()).post('/user/update').send(mockUser).expect(200);
  });

  it(`/POST delete user`, () => {
    return request(app.getHttpServer()).post('/user/delete').send(mockUser).expect(200);
  });

  it(`/GET get user detail`, () => {
    return request(app.getHttpServer()).get('/user/detail/1').expect(200);
  });

  it(`/GET get user list`, () => {
    return request(app.getHttpServer()).get('/user/list').expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});
