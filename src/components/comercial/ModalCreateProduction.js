import React from 'react'

function ModalCreateProduction(){
	return(
		<div className = "row">
			<div className = "col-md-6">
				<label htmlFor="">Lote *</label>
				<input type="number" placeholder = "Lote" className = "form-control"/>
			</div>
			<div className = "col-md-6">
				<label htmlFor="">Tipo *</label>
				<select name="" className = "form-control" id="">
					<option value="">Seleccione una opción</option>
				</select>
			</div>
			<div className = "col-md-6 mt-4">
				<label htmlFor="">Cantidad generada *</label>
				<input type="number" placeholder = "Cantidad generada" className = "form-control"/>
			</div>
			<div className = "col-md-6 mt-4">
				<label htmlFor="">Cantidad activa *</label>
				<input type="number" placeholder = "Cantidad activa" className = "form-control"/>
			</div>
			<div className = "col-md-4 mt-5">
				<label htmlFor="">Fecha de producción  *</label>
				<input type="date" placeholder = "Fecha" className = "form-control"/>
			</div>
			<div className = "col-md-4 mt-5">
				<label htmlFor="">Fecha de activación  *</label>
				<input type="date" placeholder = "Fecha" className = "form-control"/>
			</div>
			<div className = "col-md-4 mt-5">
				<label htmlFor="">Fecha de vencimiento  *</label>
				<input type="date" placeholder = "Fecha" className = "form-control"/>
			</div>
			<div className = "col-md-12 mt-5">
				<label htmlFor="">Estado *</label>
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

export default ModalCreateProduction;