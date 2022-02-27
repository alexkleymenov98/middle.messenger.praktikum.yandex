import AuthApi from '../api/auth/authApi';
import {LoginRequest, SignUpRequest} from '../api/auth/types';
import SignUpApi from '../api/auth/signUpApi';
import LoginApi from '../api/auth/loginApi';
import Router from '../modules/Router';
import {setErrorTextForm, setUser} from '../modules/Store/actions';
import LogoutApi from '../api/auth/logoutApi';
import {RouterLinks} from '../shared/const';

const authApiInstance = new AuthApi();
const authSingUpInstance = new SignUpApi();
const authLoginInstance = new LoginApi();
const authLogoutInstance = new LogoutApi();

class AuthServices {
  public async getUser():Promise<void> {
    try {
      const user = await authApiInstance.request();
      setUser(JSON.parse(user));
      Router.enterAuth(true).start();
    } catch (e) {
      Router.enterAuth(false).start();
    }
  }
  public async singUp(payload:SignUpRequest):Promise<void> {
    try {
      await authSingUpInstance.request(payload);
      await this.getUser();
    } catch (e) {
      setErrorTextForm(e.reason);
    }
  }

  public async login(payload:LoginRequest): Promise<void> {
    try {
      await authLoginInstance.request(payload);
      await this.getUser();
    } catch (e) {
      setErrorTextForm(e.reason);
    }
  }

  public async logout():Promise<void> {
    try {
      await authLogoutInstance.request();
      setUser(null);
      Router.enterAuth(false).start();
      Router.go(RouterLinks.LOGIN);
    } catch (e) {
      console.log(e);
    }
  }
}

export default AuthServices;
