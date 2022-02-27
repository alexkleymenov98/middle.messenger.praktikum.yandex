import HTTP, {BaseApi} from '../../modules/HTTPTransport';
import {ChangePasswordRequest} from './types';
import {ENDPOINTS} from '../consts';

const userApiInstance = new HTTP(ENDPOINTS.USER.PATH);

export class ChangeUserPassword extends BaseApi {
  public request(data:ChangePasswordRequest):Promise<string> {
    return userApiInstance.put(ENDPOINTS.USER.PASSWORD, {data});
  }
}
export default ChangeUserPassword;
