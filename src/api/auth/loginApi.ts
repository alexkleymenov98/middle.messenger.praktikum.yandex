import HTTP, {BaseApi} from '../../modules/HTTPTransport';
import {LoginRequest} from './types';
import {ENDPOINTS} from '../consts';

const authApiInstance = new HTTP(ENDPOINTS.AUTH.PATH);

class LoginApi extends BaseApi {
  public request(data:LoginRequest): Promise<string> {
    return authApiInstance.post(ENDPOINTS.AUTH.SIGNIN, {data});
  }
}
export default LoginApi;
