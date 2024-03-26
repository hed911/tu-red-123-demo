import React from 'react'

function ModalCreate(){
	return(
		<div className = "row">
			<div className = "col-md-6 px-5">
				<div className = "row">
					<div className = "col-md-12">
						<p className = "font-weight-bold mb-2 bg-style">Datos</p>
					</div>
					<div className = "col-md-6">
						<label htmlFor="">Nombre *</label>
						<input type="text" className = "form-control" />
					</div>
					<div className = "col-md-6">
						<label htmlFor="">Apellido *</label>
						<input type="text" className = "form-control" />
					</div>
					<div className = "col-md-8 mt-3">
						<label htmlFor="">Foto*</label>
						<input type="file" className = "form-control" />
					</div>
					<div className = "col-md-4 mt-3">
						<label htmlFor="">Genero *</label>
						<select name="" className = "form-control" id="">
							<option value="">Masculino</option>
							<option value="">Femenino</option>
						</select>
					</div>
					<div className = "col-md-6 mt-3">
						<label htmlFor="">Tipo de documento *</label>
						<select name="" className = "form-control" id="">
							<option value="">Cedula</option>
						</select>
					</div>
					<div className = "col-md-6 mt-3">
						<label htmlFor="">No. de identificación *</label>
						<input type="number" className = "form-control" />
					</div>
					<div className = "col-md-6 mt-3">
						<label htmlFor="">Correo *</label>
						<input type="email" className = "form-control" />
					</div>
					<div className = "col-md-6 mt-3">
						<label htmlFor="">Teléfono *</label>
						<input type="number" className = "form-control" />
					</div>

				</div>
			</div>


			<div className = "col-md-6 px-5">
				<div className = "row">
					<div className = "col-md-12">
						<p className = "font-weight-bold mb-2 bg-style">Datos persona de contacto</p>
					</div>
					<div className = "col-md-12">
						<label htmlFor="">Nombre *</label>
						<input type="text" className = "form-control" />
					</div>
					<div className = "col-md-12 mt-3">
						<label htmlFor="">Apellido *</label>
						<input type="text" className = "form-control" />
					</div>
					<div className = "col-md-12 mt-3">
						<label htmlFor="">Correo *</label>
						<input type="email" className = "form-control" />
					</div>
					<div className = "col-md-12 mt-3">
						<label htmlFor="">Teléfono *</label>
						<input type="number" className = "form-control" />
					</div>

				</div>
			</div>
			<div className = "col-md-12 mt-5 px-5">
				<div className = "row">
					<div className = "col-md-12">
						<p className = "font-weight-bold mb-2 bg-style 	">Ubicación</p>
					</div>
					<div className = "col-md-4">
						<label htmlFor="">País *</label>
						<select name="" className = "form-control" id="">
							<option value="">País</option>
						</select>
					</div>
					<div className = "col-md-4">
						<label htmlFor="">Departamento *</label>
						<select name="" className = "form-control" id="">
							<option value="">Departamento</option>
						</select>
					</div>
					<div className = "col-md-4">
						<label htmlFor="">Ciudad *</label>
						<select name="" className = "form-control" id="">
							<option value="">Ciudad</option>
						</select>
					</div>
				</div>
			</div>
			<div className = "col-md-12 mt-5 px-5">
				<div className = "row">
					<div className = "col-md-12">
						<p className = "font-weight-bold mb-2 bg-style">Datos médicos</p>
					</div>
					<div className = "col-md-3">
						<label htmlFor="">Tipo de sangre *</label>
						<input type="text" className = "form-control" />
					</div>
					<div className = "col-md-3">
						<label htmlFor="">EPS *</label>
						<input type="text" className = "form-control" />
					</div>
					<div className = "col-md-3">
						<label htmlFor="">Peso *</label>
						<input type="text" className = "form-control" />
					</div>
					<div className = "col-md-3">
						<label htmlFor="">Altura *</label>
						<input type="text" className = "form-control" />
					</div>
					<div className = "col-md-6 mt-3">
						<label htmlFor="">Voluntario Médico *</label>
						<select name="" className = "form-control"id="">
							<option value="">Sí</option>
							<option value="">No</option>
						</select>
					</div>
					<div className = "col-md-6 mt-3">
						<label htmlFor="">Politica de tratamiento de datos *</label>
						<select name="" className = "form-control"id="">
							<option value="">Sí</option>
							<option value="">No</option>
						</select>
					</div>

					<div className = "col-md-4 mt-3 p-2">
						<label htmlFor="" className = "text-danger">Alergías *</label>
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

					<div className = "col-md-4 mt-3 p-2">
						<label htmlFor="" className = "text-danger">Enfermedades *</label>
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

					<div className = "col-md-4 mt-3 p-2">
						<label htmlFor="" className = "text-danger">Medicamentos *</label>
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
				<button className = "btn btn-primary btn-block">
					<i className = "fa fa-save mr-2"></i>Guardar
				</button>
			</div>
		</div>

		)
}

export default ModalCreate;