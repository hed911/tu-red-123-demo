import React from 'react'
import MapContainer from '../../layouts/MapContainer'

function ModalEditDetails(){
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
          				<div className = "col-md-6 mt-4">
          					<label htmlFor="">Ciudad *</label>
          					<select name="" id="" className = "form-control">
          						<option value="">Ciudad</option>
          					</select>
          				</div>
          				<div className = "col-md-6 mt-4">
          					<label htmlFor="">Municipio *</label>
          					<select name="" id="" className = "form-control">
          						<option value="">Municipio</option>
          					</select>
          				</div>
          			</div>
          		</div>
          		<div className = "col-md-6 px-5">
          			<div className = "row ">
          				<div className = "col-md-12">
          					<p className = "font-weight-bold mb-3 bg-style">Datos</p>	
          				</div>
          				<div className = "col-md-12">
          					<label htmlFor="">Código *</label>
          					<input type="number" className = "form-control" placeholder = "Código"/>
          				</div>
          				<div className = "col-md-12 mt-3">
          					<label htmlFor="">Nombre *</label>
          					<select name="" className = "form-control" id="">
          						<option value="">Seleccione una opción</option>
          					</select>
          				</div>
          				<div className = "col-md-12 mt-3">
          					<label htmlFor="">Dirección *</label>
          					<input type="text" className = "form-control" />
          				</div>
          				<div className = "col-md-12 mt-3">
          					<label htmlFor="">Teléfono *</label>
          					<input type="number" className = "form-control"/>
          				</div>
          				<div className = "col-md-12 mt-3" >
          					<label htmlFor="">Horario *</label>
          					<input type="text" className = "form-control"/>
          				</div>
                              <div className = "col-md-12 mt-3" >
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

export default ModalEditDetails