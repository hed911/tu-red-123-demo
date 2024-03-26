import React from 'react'
import Collapse from 'react-bootstrap/Collapse'

function ComponentCard({children, title, buttonTitle, noCreate,handleClickNew, hasFilter, handleClickFilter, filterComponent, showFilter}){
	return(
		<div className="content pb-0 card shadow-sm">
	        	<div className=" shadow-none">
					<div className="card-header border-0">
					   <div className="row align-items-center">
					      <div className="col-12 col-md-4">
					         <h3 className="mb-0">{title}</h3>
					      </div>
					      <div className="col-12 col-md-8 text-right">
					      {
					      	hasFilter == true 
					      	? <button className="btn btn-sm btn-danger mr-4" onClick = {() => handleClickFilter()}>
							         <i className="fas fa-filter"></i> Filtros
							   </button>
							: ''
					      }
					      {
					      	noCreate == true  
					      	? ''
					        : <button className="btn btn-success btn-sm text-white mr-4 " onClick = { () => handleClickNew()}>
					         <i className="fas fa-plus text-white mr-2"></i>{buttonTitle} 
					         </button> 
					      }
					         
					      </div>
					   </div>
					   {
					   	hasFilter == true
					   	? <Collapse in={showFilter}>
					   		{filterComponent}
					   		</Collapse>
					   	: ''
					   }
					   
					</div>	
					{children}
	        	</div>
			</div>
		)
}

export default ComponentCard;