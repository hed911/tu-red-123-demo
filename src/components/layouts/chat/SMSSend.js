import React from 'react'

function SMSSend({ children }) {
    const style = {
        smsSend: {
            background: '#ec131b',
            color: '#fff',
            alignSelf : 'flex-end',
            maxWidth: '50%',
            maxHeight: 'auto',
            padding: '8px 15px',
            borderRadius: '12px'
        }
    }
    return (
        <div className = "mt-3" style = {style.smsSend}>
        	<p>
        		{children}				
        	</p>
        </div>
    )
}

export default SMSSend;