import React from 'react'

function ModalEditEscala(){

	return(
    <div>
          <div className = "row mt-4">
          	<div className = "col-md-6">
          		<input type="number" className = "form-control" placeholder = "Código" />
          	</div>

          	<div className = "col-md-6">
          		<input type="text" className = "form-control" placeholder = "Nombre" />
          	</div>

            <div className = "col-md-12 mt-4">
            <label htmlFor="">Estado</label>
              <select name="" id="" className = "form-control">
                <option value="" >Activo</option>
                <option value="" >Inactivo</option>
              </select>
            </div>

          	<div className = "col-md-12 mt-5">
          		<button className = "btn btn-primary btn-block"><i className = "fa fa-spinner mr-2"></i>Actualizar</button>
          	</div>
          </div>
    </div>
		)
}

export default ModalEditEscala;