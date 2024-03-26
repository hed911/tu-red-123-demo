import React from 'react'

function ModalEditUsers(){
const style = {
		photoContainer : {
			width : '200px',
			height : '200px',
			border : '1px solid #ccc'
		}
	}
	return(
		<div>
			<div className = "row">
			  <div className = "col-md-6">
			  		<div className = "d-flex justify-content-center">
						<div style = {style.photoContainer}></div>
			  		</div>
			  		<div className = "row mt-4">
				  		<div className = "d-flex justify-content-center" style = {{width : '100%'}}>
				  			<input type="file" className = "form-control" style = {{width : '400px'}}/>
				  		</div>
			  		</div>
			  </div>
			  <div className = "col-md-6">
			  	<div className = "row mt-4">
			  			<div className = "col-md-12">
			  				<p className = "mb-4 font-weight-bold bg-style">Datos</p>
			  			</div>
			  			<div className = "col-md-6">
			  				<label htmlFor="">Nombre *</label>
			  				<input type="text" className = "form-control" placeholder = "Nombre"/>
			  			</div>
			  			<div className = "col-md-6">
			  				<label htmlFor="">Apellido *</label>
			  				<input type="text" className = "form-control" placeholder = "Apellido"/>
			  			</div>
			  			<div className = "col-md-6 mt-4">
			  				<label htmlFor="">Tipo de documento de identidad *</label>
			  				<select name="" className = "form-control" id="">
			  					<option value="">Seleccione una opción</option>
			  				</select>
			  			</div>
			  			<div className = "col-md-6 mt-4">
			  				<label htmlFor="">Documento de identidad *</label>
			  				<input type="number" className = "form-control" />
			  			</div>
			  			<div className = "col-md-6 mt-4">
			  				<label htmlFor="">Celular *</label>
			  				<input type="number" className = "form-control" placeholder = "Celular"/>
			  			</div>
			  			<div className = "col-md-6 mt-4">
			  				<label htmlFor="">Email *</label>
			  				<input type="email" className = "form-control" placeholder = "Email"/>
			  			</div>
			  		</div>
			  </div>
			</div>
			<div className = "row mt-4">
				<div className = "col-md-12">
					<p className = "font-weight-bold bg-style">Configuración</p>
				</div>
				<div className = "col-md-6">
					<label htmlFor="">Contraseña *</label>
					<input type="password" className = "form-control" />
				</div>
				<div className = "col-md-6">
					<label htmlFor="">Estado *</label>
					<select name="" id="" className = "form-control">
						<option value="">Activo</option>
						<option value="">Inactivo</option>

					</select>
				</div>
				<div className = "col-md-6 mt-4">
					<div className = "row">
						<div className = "col-md-12">
							<label htmlFor="">Rol *</label>
							<select name="" className = "form-control" id="">
								<option value="">Seleccione una opción</option>
							</select>
						</div>
					</div>
				</div>

				<div className = "col-md-6 mt-4">
					<div className = "table-responsive mt-4" style = {{minHeight : '15rem', maxHeight : '15rem', overflow : 'auto'}}>
          			<table className = "table tablesorter table-bordered">
          				<thead className = "thead-light">
          					<tr>
          						<td></td>
          						<td>Modulos</td>
          					</tr>
          				</thead>
          			</table>
          		</div>
				</div>
				<div className = "col-md-12 mt-5">
					<button className = "btn btn-primary btn-block"><i className = "fa fa-save mr-2"></i>Guardar</button>	
				</div>
			</div>
		</div>
		)
}

export default ModalEditUsers;