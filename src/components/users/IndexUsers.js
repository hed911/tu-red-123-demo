import React, {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import TableHelper from '../layouts/TableHelper'
import ModalBase from '../layouts/ModalBase'
import ModalCreateUsers from './ModalCreateUsers'
import ModalEditUsers from './ModalEditUsers'
import ModalDetailUser from './ModalDetailUser'
import Collapse from 'react-bootstrap/Collapse'


function IndexUsers(){

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

const handleClickNew = () => handleShowCreate()

	const columns = ['Nombres', 'Apellidos', 'Celular', 'Rol', 'Fecha de creación', 'Estado', 'Acciones']
	const tbody = (
					<tr>
					      <td className = "text-center">Jaime</td>
					      <td className = "text-center">Barrios</td>
					      <td className = "text-center">3012245526</td>
					      <td className = "text-center">Administrador</td>
					     <td className = "text-center">12/12/2021</td> 
					      <td className = "text-center"><span className = "badge badge-success">Activo</span></td>
					      <td className = "text-center">
					         <Dropdown>
					            <Dropdown.Toggle variant="success" id="dropdown-basic" className = "">
					            </Dropdown.Toggle>
					            <Dropdown.Menu>
					               <Dropdown.Item onClick = {handleShowDetail}><i className = "fa fa-eye mr-2"></i>Detalle</Dropdown.Item>
					               <Dropdown.Item onClick = {handleShowEdit}><i className = "fa fa-edit mr-2"></i>Editar</Dropdown.Item>
					               <Dropdown.Item><i className = "fa fa-trash mr-2"></i>Eliminar</Dropdown.Item>
					            </Dropdown.Menu>
					         </Dropdown>
					      </td>
					</tr>
		)
	return(
		<div>
			<div className="content pb-0 card shadow-sm">
		        	<div className=" shadow-none">
						<div className="card-header border-0">
						   <div className="row align-items-center">
						      <div className="col-4">
						         <h3 className="mb-0">Usuarios</h3>
						      </div>
						      <div className="col-8 text-right">
						      	<button className="btn btn-sm btn-danger mr-4" onClick = {handleCollapseFilters}>
								   <i className="fas fa-filter"></i> Filtros
								</button>
						         <button className="btn btn-success btn-sm text-white mr-4" onClick = {handleClickNew}>
						         <i className="fas fa-plus text-white mr-2"></i> Nuevo usuario 
						         </button>
						      </div>
						   </div>
						    <Collapse in={open}>
						        <div className = "row px-2 py-5">
						         	<div className = "col-md-6">
						         		<label htmlFor="">Cedula</label>
						         		<input type="number" className = "form-control" />
						         	</div>
						         	<div className = "col-md-6">
						         		<label htmlFor="">Nombre</label>
						         		<input type="text" className = "form-control" />
						         	</div>
						         	<div className = "col-md-6 mt-3">
						         		<label htmlFor="">Apellido</label>
						         		<input type="text" className = "form-control" />
						         	</div>
						         	<div className = "col-md-6 mt-3">
						         		<label htmlFor="">Rol</label>
						         		<select name="" className = "form-control" id="">
						         			<option value="">Seleccione una opción</option>
						         		</select>
						         	</div>
						        </div>
						      </Collapse>
						</div>	
						<TableHelper columns = {columns} tbody = {tbody}></TableHelper>	
		        	</div>
				</div>
				<ModalBase show = {showCreate} handleShowModal = {handleCloseCreate} size = "xl" title = "Crear nuevo usuario">
					<ModalCreateUsers></ModalCreateUsers>
				</ModalBase>

				<ModalBase show = {showEdit} handleShowModal = {handleCloseEdit} size = "xl" title = "Editar usuario">
					<ModalEditUsers></ModalEditUsers>
				</ModalBase>

				<ModalBase show = {showDetail} handleShowModal = {handleCloseDetail} title = "Detalle de usuario" size = "xl">
        			<ModalDetailUser></ModalDetailUser>
        		</ModalBase>
		</div>
		)
}

export default IndexUsers;