import React from 'react'
import MapContainer from '../layouts/MapContainer'

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
                              <MapContainer />
          			</div>
          		</div>
          		<div className = "col-md-6">
          			<div className = "row ">
          				<div className = "col-md-12">
          					<p className = "font-weight-bold mb-3 bg-style">Configuración</p>	
          				</div>
          				<div className = "col-md-4">
          					<label htmlFor="" className = "label-primary">Código :</label>
          					<p className = "p-info">001</p>
          				</div>
          				<div className = "col-md-4">
          					<label htmlFor="" className = "label-primary">Usuario :</label>
          					<p className = "p-info">Usuario123</p>
          				</div>
          				<div className = "col-md-4">
          					<label htmlFor="" className = "label-primary">Estado :</label>
          					<p className = "p-info">Activo</p>
          				</div>
          				<div className = "col-md-4 mt-3">
          					<label htmlFor="" className = "label-primary">Escala :</label>
          					<p className = "p-info">Emergencias</p>
          				</div>
          				<div className = "col-md-4 mt-3">
          					<label htmlFor="" className = "label-primary">Categoría :</label>
          					<p className = "p-info">Desastres</p>
          				</div>
          				<div className = "col-md-4 mt-3">
          					<label htmlFor="" className = "label-primary">Subcategoría :</label>
          					<p className = "p-info">Desastres naturales</p>
          				</div>
          			</div>
          			<div className = "row mt-4">
          				<div className = "col-md-12 mt-3">
          					<p className = "font-weight-bold mb-3 bg-style">Datos de configuración</p>	
          				</div>
          				<div className = "col-md-4">
          					<label htmlFor="" className = "label-primary">Nombre de contacto :</label>
          					<p className = "p-info">Jaime Barrios</p>
          				</div>
          				<div className = "col-md-4">
          					<label htmlFor="" className = "label-primary">Teléfono :</label>
          					<p className = "p-info">3003456722</p>
          				</div>
          				<div className = "col-md-4">
          					<label htmlFor="" className = "label-primary">Correo electronico :</label>
          					<p className = "p-info">example@example.com</p>
          				</div>
          			</div>
          		</div>
                    <div className = "col-md-12">
                         <div className = "row">
                              <div className = "col-md-12 mb-2">
                                   <p className = "font-weight-bold mb-2 bg-style">Ubicación</p>    
                              </div>
                              <div className = "col-md-3 ">
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

export default ModalDetail