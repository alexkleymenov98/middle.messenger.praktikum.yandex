import HTTP, {BaseApi} from '../../modules/HTTPTransport';
import {ENDPOINTS} from '../consts';
import {TUserResponse} from '../../shared/types';

const userApiInstance = new HTTP(ENDPOINTS.USER.PATH, true );

export class ChangeUserAvatar extends BaseApi {
  public request(data:FormData):Promise<TUserResponse> {
    return userApiInstance.put<TUserResponse>(ENDPOINTS.USER.AVATAR, {data});
  }
}
export default new ChangeUserAvatar();
