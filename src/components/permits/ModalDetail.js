import React from 'react'

function ModalDetail(){
	return(
		<div className = "row">
			<div className = "col-md-6">
				<label htmlFor="" className = "label-primary">Rol :</label>
				<p className = "p-info">Administrador</p>
			</div>
			<div className = "col-md-6 mt-4">
				<label htmlFor="" className = "label-primary">Estado :</label>
				<p className = "p-info">Activo</p>
			</div>
			<div className = "col-md-4">
				<label htmlFor="" className = "label-primary">País : </label>
				<p className = "p-info">Colombia</p>
			</div>
			<div className = "col-md-4">
				<label htmlFor="" className = "label-primary">Departamento :</label>
				<p className = "p-info">Atlantico</p>
			</div>
			<div className = "col-md-4">
				<label htmlFor="" className = "label-primary">Ciudad :</label>
				<p className = "p-info">Barranquilla</p>
			</div>
		</div>

		)
}

export default ModalDetail