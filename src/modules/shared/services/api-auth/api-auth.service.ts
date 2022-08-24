import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ICurrentUserType } from '@src/decorators/current.user';

@Injectable()
export class ApiAuthService {
  public async apiAuth(user: ICurrentUserType, method: string, url: string): Promise<boolean> {
    const { isSuper } = user;
    if (isSuper) {
      return true;
    } else {
      const isUserExist = true;
      if (isUserExist) {
        return true;
      } else {
        throw new HttpException(`当前账号没操作:${method}-${url}的权限`, HttpStatus.OK);
      }
    }
  }
}
