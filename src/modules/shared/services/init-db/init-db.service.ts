import { Injectable } from '@nestjs/common';

@Injectable()
export class InitDbService {
  onModuleInit() {
    console.log('初始化数据库');
  }
}
