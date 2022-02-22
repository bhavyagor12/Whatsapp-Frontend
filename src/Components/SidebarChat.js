import { Avatar } from '@material-ui/core'
import React from 'react'
import "../Styling/SidebarChat.css"
function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>This is last message from room</p>
            </div>
        </div>
    )
}

export default SidebarChat
