import {TUserResponse} from '../../shared/types';

type TPassword = {
  password: string;
}

export type SignUpRequest =
  Pick<TUserResponse, 'first_name' | 'second_name' | 'login' | 'phone' | 'email'>
  & TPassword;
export type LoginRequest = Pick<TUserResponse, 'login'> & TPassword;
