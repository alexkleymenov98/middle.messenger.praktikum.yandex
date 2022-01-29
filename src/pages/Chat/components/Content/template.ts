export const template = `
.message-content
        if(isEmpty)
          .empty
            p Выберите чат чтобы отправить сообщение
        if(!isEmpty)
          .message-container
            | !{messageHeader}
            | !{messageList}
            | !{messageForm}`;
