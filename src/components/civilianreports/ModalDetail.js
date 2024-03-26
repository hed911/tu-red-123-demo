import React from 'react'
import avatar1 from '../../assets/images/avatars/avatar1.png'
function ModalDetail(){
	const style = {
		imgContainer : {
			height : '200px',
			border: '1px solid #ccc',
			width : '200px'
		}
	}
	return(
		<div className = "row pb-3">
			<div className = "col-md-4">
			<div className = "d-flex justify-content-center">
				<div style = {style.imgContainer}>
						<img src={avatar1} alt="" style = {style.imgContainer}/>
				</div>
			</div>
			</div>
			<div className = "col-md-8">
				<div className = "row">
					<div className = "col-md-12">
						<p className = "bg-style mb-3">Datos del ciudadano</p>
					</div>
					<div className = "col-md-6">
						<label htmlFor="" className = "label-primary">Nombre : </label>
						<p className = "p-info">Jaime</p>
					</div>
					<div className = "col-md-6">
						<label htmlFor="" className = "label-primary">Apellido :</label>
						<p className = "p-info">Barrios</p>
					</div>
					<div className = "col-md-6 mt-3">
						<label htmlFor="" className = "label-primary">Tipo de documento : </label>
						<p className = "p-info">Cedula</p>
					</div>
					<div className = "col-md-6 mt-3">
						<label htmlFor="" className = "label-primary">No. de documento</label>
						<p className = "p-info">12345678</p>
					</div>
					<div className = "col-md-6 mt-3">
						<label htmlFor="" className = "label-primary">Teléfono :</label>
						<p className = "p-info">3012345678</p>
					</div>
					<div className = "col-md-6 mt-3">
						<label htmlFor="" className = "label-primary">Correo : </label>
						<p className = "p-info">example@example.com</p>
					</div>
					<div className = "col-md-4 mt-3">
						<label htmlFor="" className = "label-primary">Tipo de sangre : </label>
						<p className = "p-info">O+</p>
					</div>
					<div className = "col-md-4 mt-3">
						<label htmlFor="" className = "label-primary">Peso :</label>
						<p className = "p-info">80kg</p>
					</div>
					<div className = "col-md-4 mt-3">
						<label htmlFor="" className = "label-primary">Altura :</label>
						<p className = "p-info">1.70</p>
					</div>



				</div>
			</div>
		</div>
		)
}

export default ModalDetail;