import {TUserResponse} from '../../shared/types';

type TPassword = {
  password: string;
}

export type SignUpRequestData =
  Pick<TUserResponse, 'first_name' | 'second_name' | 'login' | 'phone' | 'email'>
  & TPassword;
export type LoginRequestData = Pick<TUserResponse, 'login'> & TPassword;
