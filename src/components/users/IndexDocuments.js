import React, {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import TableHelper from '../layouts/TableHelper'
import ComponentCard from '../layouts/ComponentCard'
import ModalBase from '../layouts/ModalBase'
import ModalCreateDocuments from './ModalCreateDocuments'
import ModalEditDocuments from './ModalEditDocuments'


function IndexDocuments(){
const [showCreate, setShowCreate] = useState(false);
const [showEdit, setShowEdit] = useState(false);
const [openFilter, setOpenFilter] = useState(false)
const handleClickFilter = () => setOpenFilter(!openFilter)

const handleCloseCreate = () => setShowCreate(false);
const handleShowCreate = () => setShowCreate(true);

const handleCloseEdit = () => setShowEdit(false);
const handleShowEdit = () => setShowEdit(true);

const handleClickNew = () => handleShowCreate()

	const columns = ['Código', 'Tipo de documento', 'Estado', 'Acciones']
	const tbody = (
					<tr>
					      <td className = "text-center">1</td>
					      <td className = "text-center">Cedula</td>
					      <td className = "text-center"><span className = "badge badge-success">Activo</span></td>
					      <td className = "text-center">
					         <Dropdown>
					            <Dropdown.Toggle variant="success" id="dropdown-basic" className = "">
					            </Dropdown.Toggle>
					            <Dropdown.Menu>
					             
					               <Dropdown.Item onClick = {handleShowEdit}><i className = "fa fa-edit mr-2" ></i>Editar</Dropdown.Item>
					               <Dropdown.Item><i className = "fa fa-trash mr-2"></i>Eliminar</Dropdown.Item>
					            </Dropdown.Menu>
					         </Dropdown>
					      </td>
					</tr>
		)

	const filterComponent = (
		<div className = "row">
			<div className = "col-md-4">
				<label htmlFor="">Código</label>
				<input type="number" className = "form-control" />
			</div>
			<div className = "col-md-4">
				<label htmlFor="">Tipo de documento</label>
				<input type="text" className = "form-control" />
			</div>
			<div className = "col-md-4">
				<label htmlFor="">Estado</label>
				<select name="" id="" className = "form-control">
					<option value="">Activo</option>
					<option value="">Inactivo</option>
				</select>
			</div>
		</div>
		)

	return(
			<div>
	        		<ComponentCard title = "Tipo de documento" 
	        		buttonTitle = "Nuevo tipo de documento" 
	        		handleClickNew = {handleClickNew}
	        		hasFilter = {true} 
					handleClickFilter = {handleClickFilter} 
					showFilter = {openFilter}
					filterComponent = {filterComponent}>

						<TableHelper columns = {columns} tbody = {tbody}></TableHelper>	

	        		</ComponentCard>
	        		<ModalBase show = {showCreate} handleShowModal = {handleCloseCreate} title = "Crear nuevo tipo de documento">
	        			<ModalCreateDocuments></ModalCreateDocuments>
	        		</ModalBase>
	        		<ModalBase show = {showEdit} handleShowModal = {handleCloseEdit} title = "Editar tipo de documento">
	        			<ModalEditDocuments></ModalEditDocuments>
	        		</ModalBase>
	        		

	  				
			</div>
		)
}

export default IndexDocuments;