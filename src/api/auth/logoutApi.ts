import {BaseApi} from '../../modules/HTTPTransport';
import {ENDPOINTS} from '../consts';
import {SuccessResponse} from '../../shared/types';

class LogoutApi extends BaseApi {
  constructor() {
    super(ENDPOINTS.AUTH.PATH);
  }
  public request(): Promise<SuccessResponse> {
    return this.http.post<SuccessResponse>(ENDPOINTS.AUTH.LOGOUT);
  }
}
export default new LogoutApi();
