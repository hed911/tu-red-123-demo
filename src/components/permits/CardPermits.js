import React, {useState} from 'react'
import Collapse from 'react-bootstrap/Collapse'

function CardPermits({moduleName, noCreate}){
	const [open, setOpen] = useState(false)

	const handleCollapse = () => setOpen(!open)
	return(
			<div className = "col-md-12 mb-4">
				<div className = "card">
					<div className = "card-header">
						<input type="checkbox" className = "mr-3" />
						<label htmlFor="">{moduleName}</label>
						<button className = "btn float-right" onClick = {handleCollapse}><i className = "fa fa-plus"></i></button>
					</div>
					<Collapse in={open}>
						<div className = "card-body">
						{
							noCreate == true 
							? ''
							: <div>
								<input type="checkbox" className = "mr-3" />
								<label htmlFor="">Crear</label>
							</div>
						}
							
							<div>
								<input type="checkbox" className = "mr-3" />
								<label htmlFor="">Editar</label>
							</div>
							<div>
								<input type="checkbox" className = "mr-3" />
								<label htmlFor="">Ver</label>
							</div>
							<div>
								<input type="checkbox" className = "mr-3" />
								<label htmlFor="">Eliminar</label>
							</div>
						</div>
      				</Collapse>
				</div>
			</div>
		)
}

export default CardPermits;