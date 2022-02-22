import React from 'react'
import "../Styling/Sidebar.css"
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar ,IconButton } from '@material-ui/core';
import {SearchOutlined} from "@material-ui/icons";
import SidebarChat from  "./SidebarChat";
function Sidebar() {
    return (
        <div className="sidebar"> 
        
        <div className="sidebar__header">
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThxZj5p6oJk5O8R5V7v-wtebVhkhL8oYSD3w&usqp=CAU"/>
            <div className="sidebar__headerRight">
               
                <IconButton><DonutLargeIcon/></IconButton>
                <IconButton><ChatIcon/></IconButton>
                <IconButton><MoreVertIcon/></IconButton>
            
            </div>
          
        </div>
        <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                <SearchOutlined/>
                <input placeholder="Search or Start new chat" type="text"/>
            </div>
        </div>
        <div className="sidebar__chats">
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>

        </div>
    )
}

export default Sidebar
