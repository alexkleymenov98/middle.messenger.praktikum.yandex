export const template = `.profile
    .profile__avatar
        .avatar.avatar-default
            img(src=avatar)
    h1.profile__title #{name}
    ul.profile-info
        li.profile-info__row
            span.label Почта
            span.value pochta@yandex.ru
        li.profile-info__row
            span.label Логин
            span.value ivanivanov
        li.profile-info__row
            span.label Имя
            span.value Иван
        li.profile-info__row
            span.label Фамилия
            span.value Иванов
        li.profile-info__row
            span.label Имя в чате
            span.value Иван
        li.profile-info__row
            span.label Телефон
            span.value +7 (909) 967 30 30
    | !{navigation}`;