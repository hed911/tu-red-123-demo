import React from 'react'

function ModalCreateProducts(){
	return(
		<div className = "row">
			<div className = "col-md-6">
				<label htmlFor="">Código *</label>
				<input type="number" className = "form-control" placeholder = "Código" />
			</div>
			<div className = "col-md-6">
				<label htmlFor="">Nombre *</label>
				<input type="text" className = "form-control" placeholder = "Nombre" />
			</div>
			<div className = "col-md-12 mt-4">
				<select name="" className = "form-control" id="">
					<option value="">Activo</option>
					<option value="">Inactivo</option>
				</select>
			</div>
			<div className = "col-md-12 mt-5">
				<button className = "btn btn-primary btn-block">
					<i className = "fa fa-save mr-2"></i>Guardar
				</button>
			</div>
		</div>

		)
}

export default ModalCreateProducts