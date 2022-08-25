import { Test, TestingModule } from '@nestjs/testing';
import { UserEntity } from '../../entities/user.entity';
import { UserService } from './user.service';

import { getRepositoryToken } from '@nestjs/typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('UserService', () => {
  let service: UserService;

  const mockUser = {
    id: '1',
    name: 'haoxiang',
    address: 'a steet',
    describe: 'test',
  };

  const mockRepository = {
    findOne: () => mockUser,
    find: () => [mockUser],
    save: (data: any) => data,
    update: (data: any) => data,
    delete: (id: string) => id,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: mockRepository,
        },
      ],
      imports: [],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create user', () => {
    it('should a created user', async () => {
      jest.spyOn(mockRepository, 'findOne').mockReturnValueOnce(undefined as any);
      const user = await service.createUser(mockUser);
      expect(user).toBe(mockUser);
    });
    it('should throw a error with imformation', async () => {
      try {
        await service.createUser(mockUser);
      } catch (error) {
        expect(error).toStrictEqual(
          new HttpException(`user name ${mockUser.name} already exist`, HttpStatus.OK),
        );
      }
    });
  });

  describe('update user', () => {
    it('should be success', async () => {
      const res = await service.updateUser(mockUser);
      expect(res).toBe(undefined);
    });
  });

  describe('delete user', () => {
    it('should be success', async () => {
      const res = await service.deleteUser(mockUser);
      expect(res).toBe(undefined);
    });
  });

  describe('get user detail', () => {
    it('should get a user', async () => {
      const res = await service.getUserDetail(mockUser.id);
      expect(res).toBe(mockUser);
    });
    it('should throw a error with imformation', async () => {
      try {
        jest.spyOn(mockRepository, 'findOne').mockReturnValueOnce(undefined as any);
        await service.getUserDetail(mockUser.id);
      } catch (error) {
        expect(error).toStrictEqual(
          new HttpException(`did not find user by id ${mockUser.id}`, HttpStatus.OK),
        );
      }
    });
  });

  describe('get user list', () => {
    it('should get a user list', async () => {
      const res = await service.getUserList();
      expect(res).toContain(mockUser);
    });
  });
});
