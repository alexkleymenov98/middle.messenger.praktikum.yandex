import AuthApi from '../api/auth/authApi';
import {LoginRequest, SignUpRequest} from '../api/auth/types';
import SignUpApi from '../api/auth/signUpApi';
import LoginApi from '../api/auth/loginApi';
import Router from '../modules/Router';
import {setErrorTextForm, setUser} from '../modules/Store/actions';
import {RouterLinks} from '../shared/const';
import LogoutApi from '../api/auth/logoutApi';

class AuthServices {
  public async getUser():Promise<void> {
    try {
      const user = await AuthApi.request();
      setUser(user);
      Router.enterAuth(true).start();
    } catch (e) {
      Router.enterAuth(false).start();
    }
  }
  public async singUp(payload:SignUpRequest):Promise<void> {
    try {
      await SignUpApi.request(payload);
      await this.getUser();
      Router.enterAuth(true).start();
    } catch (e) {
      setErrorTextForm(e.reason);
    }
  }

  public async login(payload:LoginRequest): Promise<void> {
    try {
      await LoginApi.request(payload);
      await this.getUser();
    } catch (e) {
      setErrorTextForm(e.reason);
    }
  }

  public async logout():Promise<void> {
    try {
      await LogoutApi.request();
      setUser(null);
      Router.enterAuth(false).start();
      Router.go(RouterLinks.LOGIN);
    } catch (e) {
      console.log(e);
    }
  }
}

export default new AuthServices();
