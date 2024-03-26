import React from 'react'
import MapContainer from '../../layouts/MapContainer'

function ModalDetailPlaces(){
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
          		</div>
          		<div className = "col-md-6 px-5">
          			<div className = "row ">
          				<div className = "col-md-12">
          					<p className = "bg-style mb-3">Datos</p>	
          				</div>
          				<div className = "col-md-6">
          					<label htmlFor="" className = "label-primary">Código :</label>
          				      <p className = "p-info">001</p>	          				
                              </div>
          				<div className = "col-md-6">
          					<label htmlFor="" className = "label-primary">Nombre :</label>
          					<p className = "p-info">Lugar x</p>
          				</div>
          				<div className = "col-md-6 mt-3">
          					<label htmlFor="" className = "label-primary">Dirección :</label>
          					<p className = "p-info">Calle x no z-y</p>
          				</div>
          				<div className = "col-md-6 mt-3">
          					<label htmlFor="" className = "label-primary">Teléfono :</label>
          					<p className = "p-info">3012345678</p>
          				</div>
          				<div className = "col-md-6 mt-3" >
          					<label htmlFor="" className = "label-primary">Horario :</label>
          					<p className = "p-info">De 7am a 5pm</p>
          				</div>
                              <div className = "col-md-6 mt-3" >
                                   <label htmlFor="" className = "label-primary">Estado :</label>
                                   <p className = "p-info">Activo</p>
                              </div>
          			</div>
          		</div>
                    <div className  = "col-md-12">
                         <div className = "row mt-3">
                              <div className = "col-md-12 mb-1">
                                   <p className = "bg-style mb-1">Ubicación</p> 
                              </div>
                              <div className = "col-md-3">
                                   <label htmlFor="" className = "label-primary">País :</label>
                                   <p className = "p-info">Colombia</p>
                              </div>
                              <div className = "col-md-3 ">
                                   <label htmlFor="" className = "label-primary">Departamento :</label>
                                   <p className = "p-info">Atlantico</p>
                              </div>
                              <div className = "col-md-3">
                                   <label htmlFor="" className = "label-primary">Ciudad :</label>
                                   <p className = "p-info">Barranquilla</p>
                              </div>
                              <div className = "col-md-3">
                                   <label htmlFor="" className = "label-primary">Municipio :</label>
                                   <p className = "p-info">Barranquilla</p>
                              </div>
                         </div>    
                    </div>
          	</div>

		)
}	

export default ModalDetailPlaces