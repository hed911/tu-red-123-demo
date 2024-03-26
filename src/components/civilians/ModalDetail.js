import React from 'react'
import avatar1 from '../../assets/images/avatars/avatar1.png'


function ModalDetail(){
const style = {
	imgContainer : {
		height : '150px',
		width : '150px',
		borderRadius : '12px'

	}
}
return(
<div className = "row">
			<div className = "col-md-3">
				<div className = "d-flex justify-content-center align-items-center" style = {{height : '100%'}}>
					<div style = {style.imgContainer}>
						<img src={avatar1} alt="" className = "img-fit"/>
					</div>
				</div>
			</div>
			<div className = "col-md-9">
				<div className = "row">
					<div className = "col-md-12">
						<p className = "font-weight-bold mb-2 bg-style">Datos</p>
					</div>
					<div className = "col-md-4 col-12 mt-1">
						<label htmlFor="" className = "label-primary">Nombre :</label>
						<p className = "p-info">Jaime Barrios</p>
					</div>
					<div className = "col-md-4 col-12 mt-1">
						<label htmlFor="" className = "label-primary">Genero :</label>
						<p className = "p-info">Masculino</p>
					</div>
					<div className = "col-md-4 mt-1">
						<label htmlFor="" className = "label-primary">Tipo de documento :</label>
						<p className = "p-info">Cedula</p>
					</div>
					<div className = "col-md-4 mt-3">
						<label htmlFor="" className = "label-primary">No. de identificación :</label>
						<p className = "p-info">10013072547</p>
					</div>
					<div className = "col-md-4 mt-3">
						<label htmlFor="" className = "label-primary">Correo :</label>
						<p className = "p-info">example@example.com</p>
					</div>
					<div className = "col-md-4 mt-3">
						<label htmlFor="" className = "label-primary">Teléfono :</label>
						<p className = "p-info">3012345678</p>
					</div>

				</div>
			</div>
			<div className = "col-md-12 mt-5">
				<div className = "row">
					<div className = "col-md-12 mb-1">
						<p className = "font-weight-bold mb-2 bg-style">Datos médicos</p>
					</div>
					<div className = "col-md-2">
						<label htmlFor="" className = "label-primary">Tipo de sangre :</label>
						<p className = "p-info">O+</p>
					</div>
					<div className = "col-md-2">
						<label htmlFor="" className = "label-primary">Peso :</label>
						<p className = "p-info">80kg</p>
					</div>
					<div className = "col-md-2">
						<label htmlFor="" className = "label-primary">Altura :</label>
						<p className = "p-info">1.70</p>
					</div>
					<div className = "col-md-2">
						<label htmlFor="" className = "label-primary">EPS :</label>
						<p className = "p-info">EPS X</p>
					</div>
					<div className = "col-md-2">
						<label htmlFor="" className = "label-primary">Voluntario Médico :</label>
						<p className = "p-info">Sí</p>
					</div>
					<div className = "col-md-2">
						<label htmlFor="" className = "label-primary">Politica de tratamiento de datos :</label>
						<p className = "p-info">Sí</p>
					</div>

					<div className = "col-md-4 mt-3 p-2">
						<label htmlFor="" className = "label-primary">Alergías :</label>
						<ul className = "nostyle-list">
							<div className = "row">
								<div className = "col-md-6">
									<li># Item 1</li>
								</div>
								<div className = "col-md-6">
									<li># Item 2</li>
								</div>
								<div className = "col-md-6">
									<li># Item 3</li>
								</div>
								<div className = "col-md-4">
									<li># Item 4</li>
								</div>
							</div>
						</ul>
					</div>

					<div className = "col-md-4 mt-3 p-2">
						<label htmlFor="" className = "label-primary">Enfermedades :</label>
						<ul className = "nostyle-list">
							<div className = "row">
								<div className = "col-md-6">
									<li># Item 1</li>
								</div>
								<div className = "col-md-6">
									<li># Item 2</li>
								</div>
								<div className = "col-md-6">
									<li># Item 3</li>
								</div>
								<div className = "col-md-6">
									<li># Item 4</li>
								</div>
							</div>
						</ul>
					</div>

					<div className = "col-md-4 mt-3 p-2">
						<label htmlFor="" className = "label-primary">Medicamentos :</label>
						<ul className = "nostyle-list">
							<div className = "row">
								<div className = "col-md-4">
									<li># Item 1</li>
								</div>
								<div className = "col-md-4">
									<li># Item 2</li>
								</div>
								<div className = "col-md-4">
									<li># Item 3</li>
								</div>
								<div className = "col-md-4">
									<li># Item 4</li>
								</div>
							</div>
						</ul>
					</div>

				</div>
			</div>
			<div className = "col-md-12 mt-5">
				<div className = "row">
					<div className = "col-md-12">
						<p className = "font-weight-bold mb-2 bg-style">Datos persona de contacto</p>
					</div>
					<div className = "col-md-3 mt-1">
						<label htmlFor="" className = "label-primary">Nombre :</label>
						<p className = "p-info">Lina Marcela</p>
					</div>
					<div className = "col-md-3 mt-1">
						<label htmlFor="" className = "label-primary">Apellido</label>
						<p className = "p-info">Negrete</p>
					</div>
					<div className = "col-md-3 mt-1">
						<label htmlFor="" className = "label-primary">Correo</label>
						<p className = "p-info">example@example.com</p>
					</div>
					<div className = "col-md-3 mt-1">
						<label htmlFor="" className = "label-primary">Teléfono</label>
						<p className = "p-info">3012345678</p>
					</div>

				</div>
			</div>

		</div>

)
}

export default ModalDetail;