import React, {useState} from 'react'
import {NavLink, Route, Switch} from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import TableHelper from '../layouts/TableHelper'
import ModalBase from '../layouts/ModalBase'
import MapContainer from '../layouts/MapContainer'
import ModalCreate from './ModalCreate'
import ModalEdit from './ModalEdit'
import ModalDetail from './ModalDetail'
import Collapse from 'react-bootstrap/Collapse'

function IndexInstitutions(){

const [showCreate, setShowCreate] = useState(false);
const [showEdit, setShowEdit] = useState(false);
const [showDetail, setShowDetail] = useState(false);

const [open, setOpen] = useState(false);
const handleCollapseFilters = () => {
	setOpen(!open)
}

const handleCloseCreate = () => setShowCreate(false);
const handleShowCreate = () => setShowCreate(true);

const handleCloseEdit = () => setShowEdit(false);
const handleShowEdit = () => setShowEdit(true);

const handleCloseDetail = () => setShowDetail(false);
const handleShowDetail = () => setShowDetail(true);

	const columns = ['Código', 'Escala', 'Categoría', 'Nombre', 'Ciudad', 'Teléfono','Fecha de creación', 'Estado', 'Acciones']
	//AQUÍ IRÍA BIEN SEA UN METODO O UNA VARIABLE CON EL MAP DEL ARRAY DE DATOS
	const tbody = (			
					<tr>
					   <td className = "text-center">00001</td>
					   <td className = "text-center">Emergencia</td>
					   <td className = "text-center">Ambulancia</td>
					   <td className = "text-center">Jaime Barrios</td>
					   <td className = "text-center">Barranquilla</td>
					   <td className = "text-center">3008556458</td>
					   <td className = "text-center">12/12/2021</td>
					   <td className = "text-center"><span className = "badge badge-success">Activo</span></td>
					   <td className = "text-center">
					      <Dropdown>
					         <Dropdown.Toggle variant="success" id="dropdown-basic">
					         </Dropdown.Toggle>
					         <Dropdown.Menu>
					            <Dropdown.Item onClick = {handleShowDetail} ><i className = "fa fa-eye mr-2"></i>Detalle</Dropdown.Item>
					            <Dropdown.Item onClick = {handleShowEdit}><i className = "fa fa-edit mr-2"></i>Editar</Dropdown.Item>
					            <Dropdown.Item><i className = "fa fa-trash mr-2"></i>Eliminar</Dropdown.Item>
					         </Dropdown.Menu>
					      </Dropdown>
					   </td>
					</tr>
		)
	return(
		<div className="content pb-0 card shadow-sm">
	 		<div className="nav-wrapper ml-3 mr-3" style={{paddinTop: "8px"}}>
	 			<ul className="nav nav-pills nav-fill nav-pills-warning flex-column flex-md-row" id="tabs-icons-text" role="tablist">
			        <li className="nav-item">
			            <NavLink className="nav-link"  to="/instituciones/mapa" exact><i className="fas fa-map mr-2"></i>Mapa</NavLink>
			        </li>
			        <li className="nav-item">
			            <NavLink className="nav-link"  to="/instituciones" exact><i className="fas fa-building mr-2"></i>Instituciones</NavLink>
			        </li>
	   			 </ul>
	   			 <Switch>
	   			 	<Route path = "/instituciones" exact>
            			<div className="p-1 shadow-none mt-2">
            				<div className="card-header border-0">
							   <div className="row align-items-center">
							      <div className="col-4">
							         <h3 className="mb-0">Instituciones</h3>
							      </div>
							      <div className="col-8 text-right">
							         <button className="btn btn-sm btn-danger mr-4" onClick = {handleCollapseFilters}>
							         <i className="fas fa-filter"></i> Filtros
							         </button>
							        	<button className="btn btn-success btn-sm text-white mr-4" onClick = {handleShowCreate}>
										  <i className="fas fa-plus text-white"></i> Nueva Institución 
										</button>
										<button className="btn btn-info btn-sm text-white">
										  <i className="fas fa-file-export text-white"></i> Exportar 
										</button>
							      </div>
							   </div>
							   <Collapse in={open}>
						        <div className = "row px-2 py-5">
						         	<div className = "col-md-3">
						         	<label htmlFor="">Código</label>
						         		<input type="number" className = "form-control" />
						         	</div>

						         	<div className = "col-md-3">
						         	<label htmlFor="">Escala</label>
						         		<select name="" className = "form-control" id="">
						         			<option value="">Escoja una opción</option>
						         		</select>
						         	</div>

						         	<div className = "col-md-3">
						         	<label htmlFor="">Categoría</label>
						         		<select name="" className = "form-control" id="">
						         			<option value="">Escoja una opción</option>
						         		</select>
						         	</div>
						         	<div className = "col-md-3">
						         	<label htmlFor="">Subcategoría</label>
						         		<select name="" className = "form-control" id="">
						         			<option value="">Escoja una opción</option>
						         		</select>
						         	</div>
						         	<div className = "col-md-3 mt-3">
						         	<label htmlFor="">Nombre de contacto</label>
						         		<input type="number" className = "form-control" />
						         	</div>
						         	<div className = "col-md-3 mt-3">
						         	<label htmlFor="">Departamento</label>
						         		<select name="" className = "form-control" id="">
						         			<option value="">Atlantico</option>
						         		</select>
						         	</div>
						         	<div className = "col-md-3 mt-3">
						         	<label htmlFor="">Ciudad</label>
						         		<select name="" className = "form-control" id="">
						         			<option value="">Barranquilla</option>
						         		</select>
						         	</div>
						         	<div className = "col-md-3 mt-3">
						         	<label htmlFor="">Municipio</label>
						         		<select name="" className = "form-control" id="">
						         			<option value="">Barranquilla</option>
						         		</select>
						         	</div>
						        </div>
						      </Collapse>
            				</div>

							<TableHelper columns = {columns} tbody = {tbody}></TableHelper>

							<ModalBase show = {showCreate} handleShowModal = {handleCloseCreate} size = "xl" title = "Crear nueva insitución">
								<ModalCreate></ModalCreate>
							</ModalBase>

							<ModalBase show = {showEdit} handleShowModal = {handleCloseEdit} size = "xl" title = "Editar institución">
								<ModalEdit></ModalEdit>
							</ModalBase>

							<ModalBase show = {showDetail} handleShowModal = {handleCloseDetail} size = "xl" title = "Detalle institución">
								<ModalDetail></ModalDetail>
							</ModalBase>
	   			 		</div>
	   			 	</Route>
	   			 	<Route path = "/instituciones/mapa" exact>
	   			 		<div className = "row ">
							<div className="col-md-3 p-md-4 p-2">
							   <div className="form-group">
							      <label>Departamento</label>
							      <select id="inputState" className="form-control form-control-sm">
							         <option  disabled="">Departamento</option>
							      </select>
							   </div>
								<div class="form-group">
								   <label>Municipio</label>
								   <select id="inputState" class="form-control form-control-sm">
								      <option defaultValue disabled="">Municipio</option>
								   </select>
								</div>
								<div class="form-group">
								   <label>Ciudad/Poblado</label>
								   <select id="inputState" class="form-control form-control-sm">
								      <option defaultValue disabled="">Ciudad</option>
								   </select>
								</div>
								<div class="form-group">
								   <label>Categoria</label>
								   <select id="inputState" class="form-control form-control-sm">
								      <option defaultValue disabled="">Categoria</option>
								   </select>
								</div>
								<div class="form-group">
								   <label>Tipo</label>
								   <select id="inputState" class="form-control form-control-sm">
								      <option defaultValue disabled="">Tipo</option>
								   </select>
								</div>
							</div>
							<div className="col-md-9">
              					<div className="card" style={{height: '71vh'}}>
                  					<MapContainer/>
              					</div>
            				</div>
	   			 		</div>
	   			 	</Route>
	   			 </Switch>
	 		</div>
		</div>		
	)
}

export default IndexInstitutions;