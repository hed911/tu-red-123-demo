import React from 'react'
import avatar1 from '../../assets/images/avatars/avatar1.png'
import SMSReceived from './chat/SMSReceived'
import SMSSend from './chat/SMSSend'
import ChatHeader from './chat/ChatHeader'
import ChatFooter from './chat/ChatFooter'

function ChatBase({userName, type, state}) {
    const style = {
        chatContainer: {
            padding: '10px 1rem',
        },       
        smsContainer: {
            minHeight: '350px',
            maxHeight: '350px',
            overflow: 'auto',
            display : 'flex',
            flexDirection : 'column',
        },
    }
    return (
        <div style = {style.chatContainer}>

        	<ChatHeader img = {avatar1} userName = {userName} state = {state} type = {type}></ChatHeader>

        	<div style = {style.smsContainer} className = "mt-3 px-3">
        				<SMSReceived>
                            Crea componentes encapsulados que manejen su propio estado, y conviértelos en interfaces de usuario complejas.
                        </SMSReceived>  
                        <SMSSend>
                           Crea componentes encapsulados que manejen su propio estado, y conviértelos en interfaces de usuario complejas.
                        </SMSSend>
                        <SMSReceived>
                            Crea componentes encapsulados que manejen su propio estado, y conviértelos en interfaces de usuario complejas.
                        </SMSReceived>  
                        <SMSReceived>
                            Crea componentes encapsulados que manejen su propio estado, y conviértelos en interfaces de usuario complejas.
                        </SMSReceived>  
                        <SMSSend>
                           Crea componentes encapsulados que manejen su propio estado, y conviértelos en interfaces de usuario complejas.
                        </SMSSend>
        	</div>

            <ChatFooter></ChatFooter>

        	
        </div>
    )
}

export default ChatBase