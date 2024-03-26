import React from 'react'


function ModalDetailCategorie(){

	return(
          <div className = "form-row mt-4">
               <div className = "col-md-12 mb-1">
                    <p className = "bg-style">Datos</p>
               </div>
          	<div className = "col-md-3 form-group">
          	    <label htmlFor="" className = "label-primary">Código :</label>
          		<p className = "p-info">001</p>
          	</div>
               <div className = "col-md-3 form-group">
                    <label className = "label-primary">Nombre :</label>
                    <p className = "p-info">Emergencia médica</p>
               </div>
          	<div className = "col-md-3 form-group">
          		<label className = "label-primary">Escala :</label>
          		<p className = "p-info">Emergencias</p>
          	</div>
          	<div className = "col-md-3 form-group">
          		<label className = "label-primary">Estado :</label>
          		<p className = "p-info">Activo</p>
          	</div>

          	<div className = "col-md-12 mt-4">
          	<p  className = "label-primary">Subcategorías :</p>
          		<div className = "table-responsive mt-4" style = {{minHeight : '10rem', maxHeight : '10rem', overflow : 'auto'}}>
          			<table className = "table tablesorter table-bordered">
          				<thead className = "thead-light">
          					<tr>
          						<td>Nombre</td>
          					</tr>
          				</thead>
          			</table>
          		</div>
          	</div>
          </div>
		)
}

export default ModalDetailCategorie