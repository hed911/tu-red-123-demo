import React from 'react'

function ModalEdit(){
const style = {
	imgContainer : {
		height : '250px',
		width : '250px',
		border : '1px solid #ccc',

	}
}
return(
<div className = "row">
			<div className = "col-md-6">
				<div className = "row">
					<div className = "col-md-12">
						<p className = "font-weight-bold mb-2 bg-style">Datos</p>
					</div>
					<div className = "col-md-6">
						<label htmlFor="">Nombre</label>
						<input type="text" className = "form-control" />
					</div>
					<div className = "col-md-6">
						<label htmlFor="">Apellido</label>
						<input type="text" className = "form-control" />
					</div>
					<div className = "col-md-12 mt-3">
						<label htmlFor="">Genero</label>
						<select name="" className = "form-control" id="">
							<option value="">Masculino</option>
							<option value="">Femenino</option>
						</select>
					</div>
					<div className = "col-md-6 mt-3">
						<label htmlFor="">Tipo de documento</label>
						<select name="" className = "form-control" id="">
							<option value="">Cedula</option>
						</select>
					</div>
					<div className = "col-md-6 mt-3">
						<label htmlFor="">No. de identificación</label>
						<input type="number" className = "form-control" />
					</div>
					<div className = "col-md-6 mt-3">
						<label htmlFor="">Correo</label>
						<input type="email" className = "form-control" />
					</div>
					<div className = "col-md-6 mt-3">
						<label htmlFor="">Teléfono</label>
						<input type="number" className = "form-control" />
					</div>

				</div>
			</div>


			<div className = "col-md-6">
				<div className = "d-flex justify-content-center align-items-center flex-column" style = {{height : '100%'}}>
					<div style = {style.imgContainer}></div>
					<input type="file" className = "form-control mt-5" />
				</div>
			</div>



			<div className = "col-md-12 mt-5">
				<div className = "row">
					<div className = "col-md-12">
						<p className = "font-weight-bold mb-2 bg-style">Datos persona de contacto</p>
					</div>
					<div className = "col-md-6">
						<label htmlFor="">Nombre</label>
						<input type="text" className = "form-control" />
					</div>
					<div className = "col-md-6">
						<label htmlFor="">Apellido</label>
						<input type="text" className = "form-control" />
					</div>
					<div className = "col-md-6 mt-3">
						<label htmlFor="">Correo</label>
						<input type="email" className = "form-control" />
					</div>
					<div className = "col-md-6 mt-3">
						<label htmlFor="">Teléfono</label>
						<input type="number" className = "form-control" />
					</div>

				</div>
			</div>


			<div className = "col-md-12 mt-5">
				<div className = "row">
					<div className = "col-md-12">
						<p className = "font-weight-bold mb-2 bg-style">Datos médicos</p>
					</div>
					<div className = "col-md-4">
						<label htmlFor="">Tipo de sangre</label>
						<input type="text" className = "form-control" />
					</div>
					<div className = "col-md-4">
						<label htmlFor="">Peso</label>
						<input type="text" className = "form-control" />
					</div>
					<div className = "col-md-4">
						<label htmlFor="">Altura</label>
						<input type="text" className = "form-control" />
					</div>
					<div className = "col-md-6 mt-3">
						<label htmlFor="">Voluntario Médico</label>
						<select name="" className = "form-control"id="">
							<option value="">Sí</option>
							<option value="">No</option>
						</select>
					</div>
					<div className = "col-md-6 mt-3">
						<label htmlFor="">Politica de tratamiento de datos</label>
						<select name="" className = "form-control"id="">
							<option value="">Sí</option>
							<option value="">No</option>
						</select>
					</div>

					<div className = "col-md-4 mt-3  p-2">
						<label htmlFor="" className = "text-danger">Alergías</label>
						<ul style = {{listStyle : 'none'}}>
							<div className = "row">
								<div className = "col-md-4">
									<li><input type="checkbox" className = "mr-2" />Item 1</li>
								</div>
								<div className = "col-md-4">
									<li><input type="checkbox" className = "mr-2" />Item 2</li>
								</div>
								<div className = "col-md-4">
									<li><input type="checkbox" className = "mr-2" />Item 3</li>
								</div>
								<div className = "col-md-4">
									<li><input type="checkbox" className = "mr-2" />Item 4</li>
								</div>
							</div>
						</ul>
					</div>

					<div className = "col-md-4 mt-3  p-2">
						<label htmlFor="" className = "text-danger">Enfermedades</label>
						<ul style = {{listStyle : 'none'}}>
							<div className = "row">
								<div className = "col-md-4">
									<li>
										<input type="checkbox" className = "mr-2" />Item 1
									</li>
								</div>
								<div className = "col-md-4">
									<li><input type="checkbox" className = "mr-2" />Item 2</li>
								</div>
								<div className = "col-md-4">
									<li><input type="checkbox" className = "mr-2" />Item 3</li>
								</div>
								<div className = "col-md-4">
									<li><input type="checkbox" className = "mr-2" />Item 4</li>
								</div>
							</div>
						</ul>
					</div>

					<div className = "col-md-4 mt-3  p-2">
						<label htmlFor="" className = "text-danger">Medicamentos</label>
						<ul style = {{listStyle : 'none'}}>
							<div className = "row">
								<div className = "col-md-4">
									<li><input type="checkbox" className = "mr-2" />Item 1</li>
								</div>
								<div className = "col-md-4">
									<li><input type="checkbox" className = "mr-2" />Item 2</li>
								</div>
								<div className = "col-md-4">
									<li><input type="checkbox" className = "mr-2" />Item 3</li>
								</div>
								<div className = "col-md-4">
									<li><input type="checkbox" className = "mr-2" />Item 4</li>
								</div>
							</div>
						</ul>
					</div>

				</div>
			</div>
			<div className = "col-md-12 mt-5">
				<div className = "row">
					<div className = "col-md-12">
						<p className = "bg-style">Cambiar estado de emergencia</p>
					</div>
					<div className = "col-md-12 mt-3">

						<select name="" className = "form-control" id="">
							<option value="">Pendiente</option>
							<option value="">En gestión</option>
							<option value="">Cerrado</option>
						</select>
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

export default ModalEdit