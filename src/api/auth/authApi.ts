import HTTP, {BaseApi} from '../../modules/HTTPTransport';
import {ENDPOINTS} from '../consts';
import {TUserResponse} from '../../shared/types';

const authApiInstance = new HTTP(ENDPOINTS.AUTH.PATH);

class AuthApi extends BaseApi {
  request():Promise<TUserResponse> {
    return authApiInstance.get<TUserResponse>(ENDPOINTS.AUTH.USER);
  }
}

export default new AuthApi();
