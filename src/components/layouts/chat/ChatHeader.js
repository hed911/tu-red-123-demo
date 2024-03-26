import React from 'react'

function ChatHeader({img, userName, type, state}) {
	const style = {
		chatHeader: {
            background: '#f0f0f0',
            minHeight: '50px',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '10px',
            borderRadius: '30px'
        },
        imgContainer: {
            width: '40px',
            height: '40px',
            borderRadius: '50%',
        }
	}
	return(
		
	<div style = {style.chatHeader}>
        		<div style = {style.imgContainer}>
        			<img src={img} alt="" style = {style.imgContainer}/>
        		</div>
        		<div className = "pl-3">
        			<p className = "font-weight-bold mb-1">{userName}</p>
        			<p className = "text-muted mb-0">{type} - {state}</p>	
        		</div>
    </div>

		)
}

export default ChatHeader