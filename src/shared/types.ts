import Form from '../components/Form';

export type PageProps = {
  title: string;
  content: Form;
}

export type Indexed<T = unknown> = {
  [key in string]: T;
};

export type ComponentEvents = Partial<Record<keyof GlobalEventHandlersEventMap, (e: Event) => void>>;

export type TUserResponse = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string | null;
}

type TUserLastMessage = Pick<TUserResponse, 'first_name' | 'second_name' | 'avatar' | 'email' |
  'login' | 'phone'>

export type TChatResponse = {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: {
    user: TUserLastMessage;
    time: string;
    content: string;
  }
};
