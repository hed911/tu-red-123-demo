import React from 'react'

function ChatFooter(){
	const style = {
		 inputToTypeIn : {
        	border : '3px solid #ec131b',
        	padding :  '10px 15px',
        	width : '100%',
        	borderRadius : '16px',
        	boxShadow : '0 4px 4px rgba(0,0,0,25%)'
        },
        buttonSend : {
        	height : '100%'
        }
	}
	return(

	<div className = "row mt-3 py-3">
        		<div className = "col-md-10">
        			<input type="text" style = {style.inputToTypeIn}/>
        		</div>
        		<div className = "col-md-2">
        			<button className = "btn btn-primary btn-block" style = {style.buttonSend}>
        				<i className = "fa fa-paper-plane"></i>
        			</button>
        		</div>
    </div>

		)
}

export default ChatFooter