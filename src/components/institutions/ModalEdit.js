import React from 'react'
import MapContainer from '../layouts/MapContainer'


function ModalEdit(){
	const style = {
	containerMap : {
		width : '100%',
		height : '300px',
		padding : '1rem',
	}
}
	return(
          	<div className = "form-row">
          		<div className = "col-md-6 form-group">
          			<div style = {style.containerMap} className = "card">
                              <MapContainer />                              
          			</div>
          			<div className = "row mt-5">
          				<div className = "col-md-12">
          					<p className = "font-weight-bold mb-1">Ubicación</p>	
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
          					<label htmlFor="">Municipio *</label>
          					<select name="" id="" className = "form-control">
          						<option value="">Municipio</option>
          					</select>
          				</div>
          			</div>
          		</div>
          		<div className = "col-md-6">
          			<div className = "row ">
          				<div className = "col-md-12">
          					<p className = "font-weight-bold mb-3">Configuración</p>	
          				</div>
          				<div className = "col-md-4">
          					<label htmlFor="">Código *</label>
          					<input type="number" className = "form-control" placeholder = "Código"/>
          				</div>
          				<div className = "col-md-4">
          					<label htmlFor="">Usuario *</label>
          					<input type="text" className = "form-control" placeholder = "Usuario"/>
          				</div>
          				<div className = "col-md-4">
          					<label htmlFor="">Estado *</label>
          					<select name="" id="" className = "form-control">
          						<option value="">Activo</option>
          						<option>Inactivo</option>
          					</select>
          				</div>
          				<div className = "col-md-4 mt-3">
          					<label htmlFor="">Escala *</label>
          					<select name="" className = "form-control" id="">
          						<option value="">Escala</option>
          					</select>	
          				</div>
          				<div className = "col-md-4 mt-3">
          					<label htmlFor="">Categoría *</label>
          					<select name="" className = "form-control" id="">
          						<option value="">Categoría</option>
          					</select>	
          				</div>
          				<div className = "col-md-4 mt-3">
          					<label htmlFor="">Subcategoría *</label>
          					<select name="" className = "form-control" id="">
          						<option value="">Subcategoría</option>
          					</select>	
          				</div>
          			</div>
          			<div className = "row mt-4">
          				<div className = "col-md-12 mt-3">
          					<p className = "font-weight-bold mb-3">Datos de configuración</p>	
          				</div>
          				<div className = "col-md-6">
          					<label htmlFor="">Nombre de contacto *</label>
          					<input type="text" className = "form-control" placeholder = "Nombre completo"/>
          				</div>
          				<div className = "col-md-6">
          					<label htmlFor="">Teléfono *</label>
          					<input type="number" className = "form-control" placeholder = "Teléfono"/>
          				</div>
          				<div className = "col-md-12 mt-4">
          					<label htmlFor="">Correo electronico *</label>
          					<input type="email" className = "form-control" placeholder = "Correo electronico"/>
          				</div>
          				<div className = "col-md-12 mt-4">
          					<label htmlFor="">Contraseña *</label>
          					<input type="password" className = "form-control" placeholder = "contraseña"/>
          				</div>
          			</div>
          		</div>
          		<div className = "col-md-12 mt-5 mb-4">
          			<button className = "btn btn-primary btn-block"><i className = "fa fa-spinner mr-2"></i>Actualizar</button>
          		</div>
          	</div>

		)
}

export default ModalEdit