import React from 'react'
import avatar1 from '../../assets/images/avatars/avatar1.png'
import MapContainer from '../layouts/MapContainer'
import policecar from '../../assets/images/police-car.png'

function ModalEdit(){
	const style = {
		imgContainer : {
			height : '200px',
			border: '1px solid #ccc',
			width : '200px'
		},
		logoContainer : {
			height : '100px',
			width : '100px',
			boxShadow : '0 3px 6px rgba(0,0,0,16%)',
			borderRadius : '50%',
			display : 'flex',
			justifyContent : 'center',
			alignItems : 'center'
		},
		mapContainer : {
			height : '330px',
			border : '1px solid #ccc'
		}
	}
	return(
		<div className = "row pb-3">
			<div className = "col-md-5">
			<div className = "d-flex justify-content-center align-items-center flex-column">
				<img src={avatar1} alt="" style = {style.imgContainer}/>
				<input type="file" className  = "form-control mt-4" style = {{ width : '260px' }}/>
			</div>
			</div>
			<div className = "col-md-7">
				<div className = "row">
					<div className = "col-md-12">
						<p className = "font-weight-bold mb-2 bg-style">Datos del ciudadano</p>
					</div>
					<div className = "col-md-6">
						<label htmlFor="">Nombre</label>
						<input type="text" className = "form-control"/>
					</div>
					<div className = "col-md-6">
						<label htmlFor="">Apellido</label>
						<input type="text" className = "form-control"/>
					</div>
					<div className = "col-md-6 mt-4">
						<label htmlFor="">Tipo de documento</label>
						<input type="text" className = "form-control" />
					</div>
					<div className = "col-md-6 mt-4">
						<label htmlFor="">No. de documento</label>
						<input type="number" className = "form-control" />
					</div>
					<div className = "col-md-6 mt-4">
						<label htmlFor="">Teléfono</label>
						<input type="number" className = "form-control"/>
					</div>
					<div className = "col-md-6 mt-4">
						<label htmlFor="">Correo</label>
						<input type="email" className = "form-control"/>
					</div>
				</div>
			</div>
			<div className = "col-md-12 mt-5">
				<div className = "row">
					<div className = "col-md-12">
						<p className = "font-weight-bold mb-4 bg-style">Detalles del reporte</p>
					</div>
					<div className = "col-md-6 mt-5">
						<div className = "card" style = {{height : '55vh'}}>
							<MapContainer />
						</div>
					</div>
					<div className = "col-md-6">
						<div className = "d-flex justify-content-center">
							<img src={policecar} alt="" style = {style.logoContainer}/>
						</div>
						<div className = "row mt-4">
							<div className = "col-md-6">
								<label htmlFor="">Código</label>
								<input type="text" className = "form-control" />
							</div>
							<div className = "col-md-6">
								<label htmlFor="">Estado</label>
								<select name="" className = "form-control" id="">
									<option value="">Pendiente</option>
									<option value="">En gestión</option>
									<option value="">Cerrado</option>
								</select>
							</div>
							<div className = "col-md-6 mt-4">
								<label htmlFor="">Categoría</label>
								<input type="text" className = "form-control" />
							</div>
							<div className = "col-md-6 mt-4">
								<label htmlFor="">Subcategoría</label>
								<input type="text" className = "form-control" />
							</div>
							<div className = "col-md-6 mt-4">
								<label htmlFor="">Dirección</label>
								<input type="text" className = "form-control" />
							</div>
							<div className = "col-md-6 mt-4">
								<label htmlFor="">Notas</label>
								<textarea name="" id="" cols="1" rows="2" className = "form-control"></textarea>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className = "col-md-12 mt-5">
				<button className = "btn btn-primary btn-block">
					<i className = "fa fa-spinner mr-2"></i>Actualizar
				</button>
			</div>
		</div>
		)
}

export default ModalEdit;