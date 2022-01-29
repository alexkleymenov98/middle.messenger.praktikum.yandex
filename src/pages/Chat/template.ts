export const template = `.message-list
    .sidebar
        .sidebar__header
            a(href="#profile") Профиль
            input.search(type="text", placeholder="Поиск")
        .sidebar__content
          | !{userList}
    .message-content-wrapper
      | !{content}`;

