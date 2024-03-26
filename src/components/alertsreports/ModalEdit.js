import React from 'react'

function ModalEdit(){
	return(
		<div className = "row">
			<div className = "col-md-6">
				<label htmlFor="">Código *</label>
				<input type="text" className = "form-control" />
			</div>
			<div className = "col-md-6">
				<label htmlFor="">Usuario *</label>
				<select name="" className = "form-control" id="">
					<option value="">Usuario registrado</option>
					<option value="">Anonimo</option>
				</select>
			</div>
			<div className = "col-md-6 mt-4">
				<label htmlFor="">Tipo de alerta *</label>
				<select name="" className = "form-control" id="">
					<option value="">Atraco</option>
					
				</select>
			</div>
			<div className = "col-md-6 mt-4">
				<label htmlFor="">Descripción *</label>
				<textarea name="" id="" cols="30" rows="1" className = "form-control"></textarea>
			</div>
			<div className = "col-md-12 mt-4">
				<label htmlFor="">Estado *</label>
				<select name="" className = "form-control" id="">
					<option value="">Pendiente</option>
					
				</select>
			</div>
			<div className = "col-md-12 mt-5">
				<button className = "btn btn-primary btn-block">
					<i className = "fa fa-spinner mr-2"></i>Actualizar
				</button>
			</div>
		</div>
		)
}

export default ModalEdit