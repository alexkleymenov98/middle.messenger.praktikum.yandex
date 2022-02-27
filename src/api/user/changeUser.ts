import HTTP, {BaseApi} from '../../modules/HTTPTransport';
import {ChangeUserRequest} from './types';
import {ENDPOINTS} from '../consts';

const userApiInstance = new HTTP(ENDPOINTS.USER.PATH);

export class ChangeUser extends BaseApi {
  public request(data:ChangeUserRequest):Promise<string> {
    return userApiInstance.put(ENDPOINTS.USER.PROFILE, {data});
  }
}
export default ChangeUser;
