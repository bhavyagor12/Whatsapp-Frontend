import React from 'react'
import "../Styling/Chat.css"
import { Avatar, IconButton } from '@material-ui/core'
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import MoreVert from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SelectInput from '@material-ui/core/Select/SelectInput';
import MicIcon from '@material-ui/icons/Mic';
function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                     <p>Last Seen at....</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton >
                        <SearchOutlined />
                    </IconButton>
                    <IconButton >
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton >
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Bhavya</span>
                    
                    
                    this is a msg
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                    </p>
                    <p className="chat__message">
                    <span className="chat__name">Bhavya</span>
                    
                    
                    this is a msg
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                    </p>
                    <p className="chat__message chat__receiver">
                    <span className="chat__name">Bhavya</span>
                    
                    
                    this is a msg
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                    </p>
                    
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input
                    placeholder="type a message"
                    type="text" />
                    <button /*onClick={sendMessage}*/
                    type="submit">
                        Send a Message
                    </button>
                    
                </form>
                <MicIcon />
            </div>
            
        </div>
    )
}

export default Chat
