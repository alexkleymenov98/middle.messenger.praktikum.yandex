import Store from './store';
import {TStore} from './types';

const setErrorTextForm = (payload: TStore['errorTextForm']): void => {
  Store.set('errorTextForm', payload);
};

const setUser = (payload: TStore['user']): void => {
  Store.set('user', payload);
  setErrorTextForm('');
};

const setChats = (payload: TStore['chats']): void => {
  Store.set('chats', payload);
};

export {setUser, setErrorTextForm, setChats};
