import React from 'react'

function ModalCreate(){
	return(
		<div className = "row">
			<div className = "col-md-12">
				<label htmlFor="">Rol *</label>
				<input type="text" className = "form-control" />
			</div>
			<div className = "col-md-12">
				<label htmlFor="">País *</label>
				<select name="" className = "form-control" id="">
					<option value="">Colombia</option>
				</select>
			</div>
			<div className = "col-md-12">
				<label htmlFor="">Departamento *</label>
				<select name="" className = "form-control" id="">
					<option value="">Atlantico</option>
				</select>
			</div>
			<div className = "col-md-12">
				<label htmlFor="">Ciudad *</label>
				<select name="" className = "form-control" id="">
					<option value="">Barranquilla</option>
				</select>
			</div>
			<div className = "col-md-12 mt-4">
				<label htmlFor="">Estado *</label>
				<select name="" id="" className = "form-control">
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

export default ModalCreate