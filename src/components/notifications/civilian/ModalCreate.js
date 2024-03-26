import React from 'react'

function ModalCreate(){
	return(
		<div className = "row">
			<div className = "col-md-6">
				<label htmlFor="">Reporte *</label>
				<input type="text" className = "form-control" />
			</div>
			<div className = "col-md-6">
				<label htmlFor="">Estado *</label>
				<select value="" className = "form-control">
					<option value="">Activo</option>
					<option value="">Inactivo</option>
				</select>
			</div>
			<div className = "mt-2 col-md-12">
				<div className = "d-flex align-items-center mb-3">
					<label htmlFor="">Opciones *</label>
					<button className = "btn btn-success ml-4" onClick = ""><i className = "fa fa-plus"></i></button>
				</div>
			<div className = "d-flex">
				<button className = "btn sm mr-2">
					<i className = "fa fa-times text-danger"></i>
				</button>
				<input type="text" className = "form-control" />
			</div>
			</div>
			<div className = "col-md-12 mt-5">
				<button className = "btn btn-primary btn-block"><i className = "fa fa-save mr-2"></i>Guardar</button>
			</div>
		</div>
		)
}

export default ModalCreate;