import React from 'react'
import MapContainer from '../../layouts/MapContainer'

function ModalEdit(){
	const style = {
	containerMap : {
		width : '100%',
		height : '300px',
		padding : '1rem',
		border : '1px solid #ccc'
	}
}
	return(
          	<div className = "form-row">
          		<div className = "col-md-6 form-group">
          			<div style = {style.containerMap} className = "card">
                              <MapContainer></MapContainer>
          			</div>
          			<div className = "row mt-5">
          				<div className = "col-md-12">
          					<p className = "font-weight-bold mb-1 bg-style">Ubicación</p>	
          				</div>
          				<div className = "col-md-6">
          					<label htmlFor="">País *</label>
          					<select name="" id="" className = "form-control">
          						<option value="">País</option>
          					</select>
          				</div>
          				<div className = "col-md-6 ">
          					<label htmlFor="">Departamento *</label>
          					<select name="" id="" className = "form-control">
          						<option value="">Departamento</option>
          					</select>
          				</div>
          				<div className = "col-md-6">
          					<label htmlFor="">Ciudad *</label>
          					<select name="" id="" className = "form-control">
          						<option value="">Ciudad</option>
          					</select>
          				</div>
          				<div className = "col-md-6">
          					<label htmlFor="">Barrio *</label>
          					<select name="" id="" className = "form-control">
          						<option value="">Barrio</option>
          					</select>
          				</div>
          			</div>
          		</div>
          		<div className = "col-md-6 px-5">
          			<div className = "row ">
          				<div className = "col-md-12">
          					<p className = "font-weight-bold mb-3 bg-style">Configuración</p>	
          				</div>
          				<div className = "col-md-6">
          					<label htmlFor="">Código *</label>
          					<input type="number" className = "form-control" placeholder = "Código"/>
          				</div>
          				<div className = "col-md-6">
          					<label htmlFor="">Evento *</label>
          					<select name="" className = "form-control" id="">
          						<option value="">Seleccione una opción</option>
          					</select>
          				</div>
          				<div className = "col-md-12 mt-3">
          					<label htmlFor="">Descripción *</label>
          					<textarea name="" className = "form-control" id="" cols="10" rows="3"></textarea>
          				</div>
          				<div className = "col-md-12 mt-3">
          					<label htmlFor="">Recomendación *</label>
          					<textarea name="" className = "form-control" id="" cols="10" rows="4"></textarea>
          				</div>
          			</div>
          			<div className = "row mt-4">
          				<div className = "col-md-6 mt-3">
          					<label htmlFor="">Fecha *</label>
          					<input type="date" className = "form-control" placeholder = "Nombre completo"/>
          				</div>
          				<div className = "col-md-6 mt-3">
          					<label htmlFor="">Estado *</label>
          					<select name="" className = "form-control" id="">
          						<option value="">Activo</option>
          						<option value="">Inactivo</option>
          					</select>
          				</div>
          			</div>
          		</div>
          		<div className = "col-md-12 mt-5 mb-4">
          			<button className = "btn btn-primary btn-block"><i className = "fa fa-spinner mr-2"></i>Actualizar</button>
          		</div>
          	</div>

		)
}

export default ModalEdit;