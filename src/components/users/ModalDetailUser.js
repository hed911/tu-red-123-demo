import React from 'react'
import avatar1 from '../../assets/images/avatars/avatar1.png'

function ModalDetailUser() {
    const style = {
        imgContainer: {
            height: '150px',
            width: '150px',
            borderRadius: '12px'

        }
    }
    return (
        <div>
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
					<div className = "col-md-4 mt-3">
						<label htmlFor="" className = "label-primary">Fecha de creación :</label>
						<p className = "p-info">20/12/2020</p>
					</div>

				</div>
			</div>
			</div>
			<div className = "row mt-5">

				<div className = "col-md-12">
					<p className = "bg-style">Configuración</p>
				</div>


				<div className = "col-md-6">
					<div className = "row">
						<div className = "col-md-12">
							<label htmlFor="" className = "label-primary">Estado :</label>
							<p className = "p-info">Activo</p>
						</div>
						<div className = "col-md-12 mt-3">
							<label htmlFor="" className = "label-primary">Rol :</label>
							<p className = "p-info">Administrador</p>
						</div>
						<div className = "col-md-12 mt-3">
							<label htmlFor="" className = "label-primary">Fecha de vencimiento :</label>
							<p className = "p-info">12/12/2021</p>
						</div>
					</div>
					
				</div>

				<div className = "col-md-6 ">
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
			</div>
		</div>
    )
}

export default ModalDetailUser;