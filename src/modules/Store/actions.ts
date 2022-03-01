import Store from './store';
import {TStore} from './types';
import {ChatUser} from '../../api/chat/types';
import {MessageResponse} from '../../shared/types';

const getUser = ():TStore['user']=>{
  return Store.getState().user;
};

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

const setActiveChat = (payload:TStore['activeChat']):void=>{
  Store.set('activeChat', payload);
};

const setUsersToChat = (payload:ChatUser[]):void=>{
  Store.set('activeChat.users', payload);
};

const getActiveChat = ():TStore['activeChat']=>{
  return Store.getState().activeChat;
};

const openModal = (type:TStore['modal']['type']):void =>{
  Store.set('modal', {
    type,
    isShow: true,
  });
};
const hideModal = ():void=>{
  Store.set('modal', {
    type: null,
    isShow: false,
  });
};

const setMessageList = (payload:MessageResponse[]):void=>{
  Store.set('activeChat.messageList', payload);
};

const setNewMessage = (payload:MessageResponse):void =>{
  const activeChat = Store.getState().activeChat;
  if (activeChat?.messageList) {
    setMessageList([payload, ...activeChat?.messageList]);
  }
};

export {
  getUser,
  setUser,
  setErrorTextForm,
  setChats,
  setActiveChat,
  openModal,
  hideModal,
  getActiveChat,
  setUsersToChat,
  setMessageList,
  setNewMessage,
};
