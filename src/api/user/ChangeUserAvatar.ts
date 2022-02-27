import HTTP, {BaseApi} from '../../modules/HTTPTransport';
import {ENDPOINTS} from '../consts';

const userApiInstance = new HTTP(ENDPOINTS.USER.PATH, true );

export class ChangeUserAvatar extends BaseApi {
  public request(data:FormData):Promise<string> {
    return userApiInstance.put(ENDPOINTS.USER.AVATAR, {data});
  }
}
export default ChangeUserAvatar;
