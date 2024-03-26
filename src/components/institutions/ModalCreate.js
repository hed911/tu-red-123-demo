import React from 'react'
import Select from 'react-select'

function ModalCreate() {
     const optionsCategories = [
          {value : '1', label : 'Categoria 1'},
          {value : '2', label : 'Categoria 2'},
          {value : '3', label : 'Categoria 3'}
     ]
     const optionsSubcategories = [
          {value : '1', label : 'Subcategoria 1'},
          {value : '2', label : 'Subcategoria 2'},
          {value : '3', label : 'Subcategoria 3'}
     ]
               

    return (
               <div className = "form-row">
                  <div className = "col-md-6">
                     <div className = "row ">
                        <div className = "col-md-12">
                           <p className = "font-weight-bold mb-3 bg-style">Configuración</p>
                        </div>
                        <div className = "col-md-6">
                           <label htmlFor="">Código *</label>
                           <input type="number" className = "form-control" placeholder = "Código"/>
                        </div>
                        <div className = "col-md-6">
                           <label htmlFor="">Usuario *</label>
                           <input type="text" className = "form-control" placeholder = "Usuario"/>
                        </div>
                        <div className = "col-md-4 mt-3">
                           <label htmlFor="">Escala *</label>
                           <select name="" className = "form-control" id="">
                              <option value="">Escala</option>
                           </select>
                        </div>
                        <div className = "col-md-4 mt-3">
                           <label htmlFor="">Categoría *</label>
                           <Select options={optionsCategories} isMulti  className="basic-multi-select" />
                        </div>
                        <div className = "col-md-4 mt-3">
                           <label htmlFor="">Subcategoría *</label>
                           <Select options={optionsSubcategories} isMulti  className="basic-multi-select" />
                        </div>
                     </div>
                  </div>
                  <div className = "col-md-6 px-4">
                     <div className = "row">
                        <div className = "col-md-12">
                           <p className = "font-weight-bold mb-3 bg-style">Ubicación</p>
                        </div>
                        <div className = "col-md-6">
                           <label htmlFor="">País *</label>
                           <select name="" id="" className = "form-control">
                              <option value="">País</option>
                           </select>
                        </div>
                        <div className = "col-md-6 ">
                           <label htmlFor="">Departamento *</label>
                           <select name="" id="" className = "form-control">
                              <option value="">Departamento</option>
                           </select>
                        </div>
                        <div className = "col-md-6 mt-3">
                           <label htmlFor="">Ciudad *</label>
                           <select name="" id="" className = "form-control">
                              <option value="">Ciudad</option>
                           </select>
                        </div>
                        <div className = "col-md-6 mt-3">
                           <label htmlFor="">Municipio *</label>
                           <select name="" id="" className = "form-control">
                              <option value="">Municipio</option>
                           </select>
                        </div>
                     </div>
                  </div>
                  <div className = "col-md-12">
                     <div className = "row mt-4">
                        <div className = "col-md-12 mt-3">
                           <p className = "font-weight-bold mb-3 bg-style">Datos de configuración</p>
                        </div>
                        <div className = "col-md-6">
                           <label htmlFor="">Nombre de contacto *</label>
                           <input type="text" className = "form-control" placeholder = "Nombre completo"/>
                        </div>
                        <div className = "col-md-6">
                           <label htmlFor="">Teléfono *</label>
                           <input type="number" className = "form-control" placeholder = "Teléfono"/>
                        </div>
                        <div className = "col-md-12 mt-4">
                           <label htmlFor="">Correo electronico *</label>
                           <input type="email" className = "form-control" placeholder = "Correo electronico"/>
                        </div>
                        <div className = "col-md-6 mt-4">
                           <label htmlFor="">Contraseña *</label>
                           <input type="password" className = "form-control" placeholder = "contraseña"/>
                        </div>
                        <div className = "col-md-6 mt-4">
                           <label htmlFor="">Confirmar contraseña *</label>
                           <input type="password" className = "form-control" placeholder = "contraseña"/>
                        </div>
                     </div>
                  </div>
                  <div className = "col-md-12 mt-5 mb-4">
                     <button className = "btn btn-primary btn-block"><i className = "fa fa-save mr-2"></i>Guardar</button>
                  </div>
               </div>
    )
}

export default ModalCreate;