import React from 'react'

function ModalCreatePlaces(){
	return(
		<div className = "row">
			<div className = "col-md-6">
				<label htmlFor="">Código *</label>
				<input type="number" className = "form-control" />
			</div>
			<div className = "col-md-6">
				<label htmlFor="">Nombre *</label>
				<input type="text" className = "form-control" />
			</div>
			<div className = "col-md-12 mt-5">
				<button className = "btn btn-primary btn-block">
					<i className = "fa fa-save mr-2"></i>Guardar
				</button>
			</div>
		</div>
		)
}

export default ModalCreatePlaces