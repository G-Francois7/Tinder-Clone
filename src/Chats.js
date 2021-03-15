import React from 'react';
import './Chats.css';
import Chat from './Chat.js'

function Chats() {
    return <div className="chats">
        <Chat
        name="Sarah"
        message="Hey! how are you ?"
        timestamp="35 minutes ago"
        profilPic="https://www.letribunaldunet.fr/wp-content/uploads/2021/03/sarah-harding-cancer-.jpg"
        />
        <Chat
        name="Ellen"
        message="Whats up ?"
        timestamp="55 minutes ago"
        profilPic="https://resize-parismatch.lanmedia.fr/img/var/news/storage/images/paris-match/people/ellen-degeneres-a-contracte-le-coronavirus-1716262/28303498-1-fre-FR/Ellen-DeGeneres-a-contracte-le-coronavirus.jpg"
        />
        <Chat
        name="Sandra"
        message="Ola!"
        timestamp="3 days ago"
        profilPic="https://secure-journal.hautehorlogerie.org/wp-content/uploads/2018/07/Sandra-Bullock-c.jpg"
        />
        <Chat
        name="Natasha"
        message="Oops there is he is..."
        timestamp="1 week ago"
        profilPic="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/03/05/18/natasha-richardson.jpg?width=1200"
        />
    </div>;
}

export default Chats
