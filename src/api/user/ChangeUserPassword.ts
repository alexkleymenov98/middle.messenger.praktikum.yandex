import HTTP, {BaseApi} from '../../modules/HTTPTransport';
import {ChangePasswordRequest} from './types';
import {ENDPOINTS} from '../consts';
import {Success} from '../../shared/types';

const userApiInstance = new HTTP(ENDPOINTS.USER.PATH);

export class ChangeUserPassword extends BaseApi {
  public request(data:ChangePasswordRequest):Promise<Success> {
    return userApiInstance.put<Success>(ENDPOINTS.USER.PASSWORD, {data});
  }
}
export default new ChangeUserPassword();
