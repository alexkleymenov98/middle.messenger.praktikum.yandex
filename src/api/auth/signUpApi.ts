import HTTP, {BaseApi} from '../../modules/HTTPTransport';
import {SignUpRequest} from './types';
import {ENDPOINTS} from '../consts';

const authApiInstance = new HTTP(ENDPOINTS.AUTH.PATH);

class SignUpApi extends BaseApi {
  public request(data:SignUpRequest):Promise<string> {
    return authApiInstance.post(ENDPOINTS.AUTH.SIGNUP, {data});
  }
}
export default SignUpApi;
