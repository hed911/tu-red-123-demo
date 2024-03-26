import React, {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import TableHelper from '../../layouts/TableHelper'
import ModalBase from '../../layouts/ModalBase'
import ComponentCard from '../../layouts/ComponentCard'
import ModalCreate from './ModalCreate'
import ModalEdit from './ModalEdit'


function IndexEmergency(){
const [showCreate, setShowCreate] = useState(false);
const [showEdit, setShowEdit] = useState(false);
const [openFilter, setOpenFilter] = useState(false)
const handleClickFilter = () => setOpenFilter(!openFilter)

const handleCloseCreate = () => setShowCreate(false);
const handleShowCreate = () => setShowCreate(true);

const handleCloseEdit = () => setShowEdit(false);
const handleShowEdit = () => setShowEdit(true);

const handleClickNew = () => handleShowCreate()


const columns = ['Código', 'Nombre', 'Número de línea', 'Estado', 'Acciones']
	const tbody = (
						<tr>
					      <td className = "text-center">1</td>
					      <td className = "text-center">Emergencia</td>
					      <td className = "text-center">123</td>
					      <td className = "text-center"><span className = "badge badge-success">Activo</span></td>
					      <td className = "text-center">
					         <Dropdown>
					            <Dropdown.Toggle variant="success" id="dropdown-basic" className = "">
					            </Dropdown.Toggle>
					            <Dropdown.Menu>
					               <Dropdown.Item onClick = {handleShowEdit}><i className = "fa fa-edit mr-2"></i>Editar</Dropdown.Item>
					               <Dropdown.Item><i className = "fa fa-trash mr-2"></i>Eliminar</Dropdown.Item>
					            </Dropdown.Menu>
					         </Dropdown>
					      </td>
					   </tr>
		)
	const filterComponent = (
		<div className = "row mt-4">
				<div className = "col-md-6">
					<label htmlFor="">Código</label>
					<input type="number" className = "form-control" />
				</div>
				<div className = "col-md-6">
					<label htmlFor="">Nombre</label>
					<input type="text" className = "form-control" />
				</div>
				<div className = "col-md-6 mt-3">
					<label htmlFor="">Número de línea</label>
					<input type="number" className = "form-control" />
				</div>
				<div className = "col-md-6 mt-3">
					<label htmlFor="">Estado</label>
					<select name="" className = "form-control" id="">
						<option value="">Activo</option>
						<option value="">Inactivo</option>
					</select>
				</div>
			</div>
		)
	return(
		<div>
			<ComponentCard 
			title = "Líneas de emergencia" 
			buttonTitle = "Crear nueva línea de emergencia" 
			handleClickNew = {handleClickNew}
			hasFilter = {true} 
			handleClickFilter = {handleClickFilter} 
			showFilter = {openFilter}
			filterComponent = {filterComponent}>
				<TableHelper columns = {columns} tbody = {tbody}></TableHelper>	
			</ComponentCard>

			<ModalBase title = "Crear nueva línea de emergencia" show = {showCreate} handleShowModal = {handleCloseCreate}>
				<ModalCreate></ModalCreate>
			</ModalBase>
			<ModalBase title = "Editar línea de emergencia" show = {showEdit} handleShowModal = {handleCloseEdit}>
				<ModalEdit></ModalEdit>
			</ModalBase>

		</div>

	)
}

export default IndexEmergency;