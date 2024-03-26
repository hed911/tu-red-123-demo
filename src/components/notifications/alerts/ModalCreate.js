import React from 'react'

function ModalCreate(){
	return(
		<div className = "row">
			<div className = "col-md-6">
				<label htmlFor="">Tipo de alerta *</label>
				<select name="" className = "form-control" id="">
					<option value="">
						Seleccione una opción
					</option>
				</select>
			</div>
			<div className = "col-md-6">
				<label htmlFor="">Foto *</label>
				<input type="file" className = "form-control" />
			</div>
			<div className = "col-md-6 mt-4">
				<label htmlFor="">Descripción *</label>
				<textarea name="" className = "form-control" id="" cols="30" rows="10"></textarea>
			</div>
			<div className = "col-md-6 mt-4">
				<label htmlFor="">Recomendaciones *</label>
				<textarea name="" className = "form-control" id="" cols="30" rows="10"></textarea>
			</div>
			<div className = "col-md-12 mt-4">
				<label htmlFor="">Estado *</label>
				<select name="" className = "form-control" id="">
					<option value="">
						Activo
					</option>
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