import HTTP, {BaseApi} from '../../modules/HTTPTransport';
import {ENDPOINTS} from '../consts';

const authApiInstance = new HTTP(ENDPOINTS.AUTH.PATH);

class LogoutApi extends BaseApi {
  public request():Promise<string> {
    return authApiInstance.post(ENDPOINTS.AUTH.LOGOUT, );
  }
}
export default LogoutApi;
