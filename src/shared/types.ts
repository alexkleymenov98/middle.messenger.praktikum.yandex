import Form from '../components/Form';

export type Success = 'ОК';

export type TID = {
  id: number;
}
export type Token = {
  token: string;
}

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

export type MessageResponse = {
  id: number;
  chat_id: number
  time: string
  type: string
  user_id: number
  content: string
  file?: {
    id: number
    user_id: number
    path: string
    filename: string
    content_type: string
    content_size: number
    upload_date: string
  }
};
