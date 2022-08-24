import { Module, Global } from '@nestjs/common';
import { ToolsService } from './services/tools/tools.service';
import { InitDbService } from './services/init-db/init-db.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/entities/user.entity';
import { ApiAuthService } from './services/api-auth/api-auth.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [ToolsService, InitDbService, ApiAuthService],
  exports: [ToolsService, ApiAuthService],
})
export class SharedModule {}
