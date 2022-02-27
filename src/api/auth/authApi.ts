import HTTP, {BaseApi} from '../../modules/HTTPTransport';
import {ENDPOINTS} from '../consts';

const authApiInstance = new HTTP(ENDPOINTS.AUTH.PATH);

class AuthApi extends BaseApi {
  request():Promise<any> {
    return authApiInstance.get(ENDPOINTS.AUTH.USER);
  }
}

export default AuthApi;
