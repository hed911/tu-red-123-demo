import React from 'react'


function ModalCreateCategorie(){
  return(
    <div>
          <div className = "form-row mt-4">
          	<div className = "col-md-6 form-group">
          	    <label htmlFor="">Código *</label>
          		<input type="number" className = "form-control" placeholder = "Código" />
          	</div>
          	<div className = "col-md-6 form-group">
          		<label>Escala *</label>
          		<select className = "form-control">
          			<option disabled defaultValue>Seleccione una opción</option>
          		</select>
          	</div>
          	<div className = "col-md-6 mt-4">
          	<p  className = "mb-2 font-weight-bold">Categoría</p>
          		<div className = "form-row">
          			<div className = "col-md-4">
          				<input type="text" className = "form-control" placeholder = "Nombre categoría"/>
          			</div>
                         <div className = "col-md-8">
                              <input type="file" className = "form-control" placeholder = "Nombre categoría" style = {{height : '3.1rem'}}/>
                         </div>
          		<button className = "btn btn-block btn-success mt-3 mb-3"><i className = "fa fa-plus mr-2"></i>Agregar categoría</button>
          		</div>
          		<div className = "table-responsive mt-4" style = {{minHeight : '10rem', maxHeight : '10rem', overflow : 'auto'}}>
          			<table className = "table tablesorter table-bordered">
          				<thead className = "thead-light">
          					<tr>
          						<td></td>
          						<td>Nombre</td>
          						<td></td>
          					</tr>
          				</thead>
                              <tbody>
                                   <tr>
                                        <td className = "text-center"><input type="radio" /></td>
                                        <td className = "text-center">Emergencias</td>
                                        <td className = "text-center"><i className = "fa fa-times text-danger" style = {{pointer: 'cursor'}}></i></td>
                                   </tr>
                              </tbody>
          			</table>
          		</div>
          	</div>

          	<div className = "col-md-6 mt-4">
          	<p  className = "mb-2 font-weight-bold">Subcategoría</p>
          		<div className = "form-row">
          			<div className = "col-md-12">
          				<input type="text" className = "form-control" placeholder = "Nombre subcategoría"/>
          				<button className = "btn btn-block btn-success mt-3 mb-3"><i className = "fa fa-plus mr-2"></i>Agregar subcategoría</button>
          			</div>
          		</div>
          		<div className = "table-responsive mt-4" style = {{minHeight : '10rem', maxHeight : '10rem', overflow : 'auto'}}>
          			<table className = "table tablesorter table-bordered">
          				<thead className = "thead-light">
          					<tr>
          						<td>Nombre</td>
          						<td></td>
          					</tr>
          				</thead>
                               <tbody>
                                   <tr>
                                        <td className = "text-center">Emergencia medica</td>
                                        <td className = "text-center"><i className = "fa fa-times text-danger" style = {{pointer: 'cursor'}}></i></td>
                                   </tr>
                              </tbody>
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

export default ModalCreateCategorie;