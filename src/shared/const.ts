export enum RouterLinks {
  LOGIN = '/',
  REGISTRATION = '/sign-up',
  CHAT = '/messenger',
  PROFILE = '/settings',
  CHANGE_PROFILE = '/settings/change-profile',
  CHANGE_PASSWORD = '/settings/change-password',
  ERROR_404 = '/404',
}
export enum RouterLinksName {
  LOGIN = 'Войти',
  EXIT = 'Выйти',
  REGISTRATION = 'Создать аккаунт',
  CHAT = 'К чатам',
  PROFILE = 'Профиль',
  PROFILE_BACK = 'Вернуться в профиль',
  CHANGE_PROFILE = 'Изменить профиль',
  CHANGE_PASSWORD = 'Изменить пароль',
}
export enum InputName {
  LOGIN = 'login',
  PASSWORD = 'password',
  EMAIL = 'email',
  FIRST_NAME ='first_name',
  SECOND_NAME = 'second_name',
  PHONE = 'phone',
  CONFIRM = 'confirm',
  DISPLAY_NAME = 'display_name',
  OLD_PASSWORD = 'oldPassword',
  NEW_PASSWORD = 'newPassword',
  MESSAGE = 'message',
  TITLE = 'title',
  USER_ID = 'user_id'
}
export enum InputLabel {
  LOGIN = 'Логин',
  PASSWORD = 'Пароль',
  EMAIL = 'Почта',
  FIRST_NAME ='Имя',
  SECOND_NAME = 'Фамилия',
  PHONE = 'Телефон',
  CONFIRM = 'Пароль еще раз',
  CONFIRM_NEW = 'Повторите новый пароль',
  DISPLAY_NAME = 'Имя в чате',
  OLD_PASSWORD = 'Старый пароль',
  NEW_PASSWORD = 'Новый пароль',
  CHAT_NAME = 'Название чата',
  USER_ID = 'ID пользователя',
}

export enum BUTTON_NAME {
  LOGIN = 'Войти',
  REGISTRATION = 'Создать аккаунт',
  SAVE = 'Сохранить',
}

export enum ROUTE_ACCESS {
  PUBLIC = 'public',
  PRIVATE = 'private',
  ERROR = 'error',
}
