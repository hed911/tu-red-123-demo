import React from 'react'
import MapContainer from '../../layouts/MapContainer'

function ModalDetail(){
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
          					<p className = "bg-style mb-2">Ubicación</p>	
          				</div>
          				<div className = "col-md-6">
          					<label htmlFor="" className = "label-primary">País :</label>
          					<p className = "p-info">Colombia</p>
          				</div>
          				<div className = "col-md-6 ">
          					<label htmlFor="" className = "label-primary">Departamento :</label>
          					<p className = "p-info">Atlantico</p>
          				</div>
          				<div className = "col-md-6">
          					<label htmlFor="" className = "label-primary">Ciudad :</label>
          					<p className = "p-info">Barranquilla</p>
          				</div>
          				<div className = "col-md-6">
          					<label htmlFor="" className = "label-primary">Barrio :</label>
          					<p className = "p-info">Poblado</p>
          				</div>
          			</div>
          		</div>
          		<div className = "col-md-6 px-5">
          			<div className = "row ">
          				<div className = "col-md-12">
          					<p className = "bg-style mb-3">Configuración</p>	
          				</div>
          				<div className = "col-md-6">
          					<label htmlFor="" className = "label-primary">Código :</label>
          					<p className = "p-info">0001</p>
          				</div>
          				<div className = "col-md-6">
          					<label htmlFor="" className = "label-primary">Evento :</label>
          					<p className = "p-info">Evento x</p>
          				</div>
          				<div className = "col-md-12 mt-3">
          					<label htmlFor="" className = "label-primary">Descripción :</label>
          					<textarea name="" className = "form-control" id="" cols="10" rows="3" disabled></textarea>
          				</div>
          				<div className = "col-md-12 mt-3">
          					<label htmlFor="" className = "label-primary">Recomendación :</label>
          					<textarea name="" className = "form-control" id="" cols="10" rows="4" disabled></textarea>
          				</div>
          			</div>
          			<div className = "row mt-4">
          				<div className = "col-md-6 mt-3">
          					<label htmlFor="" className = "label-primary">Fecha :</label>
          					<p className = "p-info">20/12/2021</p>
          				</div>
          				<div className = "col-md-6 mt-3">
          					<label htmlFor="" className = "label-primary">Estado :</label>
          					<p className = "p-info">Activo</p>
          				</div>
          			</div>
          		</div>
          	</div>

		)
}

export default ModalDetail;