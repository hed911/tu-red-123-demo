import React from 'react'

function SMSReceived({ children }) {
    const style = {
        smsReceived: {
            background: '#f0f0f0',
            maxWidth: '50%',
            maxHeight: 'auto',
            padding: '8px 15px',
            borderRadius: '12px'
        },
    }
    return (
        <div className = "mt-3" style = {style.smsReceived}>
        	<p>
        		{children}				
        	</p>
        </div>
    )
}

export default SMSReceived;