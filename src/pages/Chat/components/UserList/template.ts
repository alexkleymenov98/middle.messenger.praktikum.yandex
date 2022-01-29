export const template = `div
            each value in [{name:'DC', imageUrl:'', time:'10:49', newMessage:2, lastMessage:"Друзья, у меня дляй!..."}]
                .user-item
                    .user-item__avatar
                        .avatar
                            if(value.imageUrl)
                                img(src=value.imageUrl)
                    h6.user-item__title=value.name
                    p=value.lastMessage
                    .user-item__time=value.time
                    if(value.newMessage)
                        .user-item__new-message=value.newMessage`;