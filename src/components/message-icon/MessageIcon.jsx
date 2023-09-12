import { IconButton } from '@material-ui/core'
import { ChatBubble, Message, MessageSharp } from '@material-ui/icons'
import './message.css'
import React from 'react'


export default function MessageIcon() {
    
  return (
    <div className="message-icon">
    <a href="https://www.messenger.com/t/125973733931605">
    <IconButton >
        <Message />
      </IconButton>
    </a>
      
    </div>
  )
}
