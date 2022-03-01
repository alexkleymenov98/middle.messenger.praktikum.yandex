import HTTP, {BaseApi} from '../../modules/HTTPTransport';
import {ChangeUserRequest} from './types';
import {ENDPOINTS} from '../consts';
import {TUserResponse} from '../../shared/types';

const userApiInstance = new HTTP(ENDPOINTS.USER.PATH);

export class ChangeUser extends BaseApi {
  public request(data:ChangeUserRequest):Promise<TUserResponse> {
    return userApiInstance.put<TUserResponse>(ENDPOINTS.USER.PROFILE, {data});
  }
}
export default new ChangeUser();
