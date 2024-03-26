import React, {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import TableHelper from '../../layouts/TableHelper'
import ModalBase from '../../layouts/ModalBase'
import ComponentCard from '../../layouts/ComponentCard'
import ModalCreate from './ModalCreate'
import ModalEdit from './ModalEdit'
import ModalDetail from './ModalDetail'


function IndexEventsNotifications(){

const [showCreate, setShowCreate] = useState(false);
const [showEdit, setShowEdit] = useState(false);
const [showDetail, setShowDetail] = useState(false);
const [openFilter, setOpenFilter] = useState(false)
const handleClickFilter = () => setOpenFilter(!openFilter)

const handleCloseCreate = () => setShowCreate(false);
const handleShowCreate = () => setShowCreate(true);

const handleCloseEdit = () => setShowEdit(false);
const handleShowEdit = () => setShowEdit(true);

const handleCloseDetail = () => setShowDetail(false);
const handleShowDetail = () => setShowDetail(true);

const handleClickNew = () => handleShowCreate()



const columns = ['Código', 'Evento', 'Departamento', 'Ciudad', 'Barrio', 'Fecha', 'Estado', 'Acciones']
	const tbody = (
						<tr>
					      <td className = "text-center">1</td>
					      <td className = "text-center">Evento x</td>
					      <td className = "text-center">Atlantico</td>
					      <td className = "text-center">Barranquilla</td>
					      <td className = "text-center">Poblado</td>
					      <td className = "text-center">17/01/2021</td>
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
	const filterComponent = (
			<div className = "row mt-3">
				<div className = "col-md-4">
					<label htmlFor="">Código</label>
					<input type="number" className = "form-control" />
				</div>
				<div className = "col-md-4">
					<label htmlFor="">Estado</label>
					<select name="" className = "form-control" id="">
						<option value="">Activo</option>
						<option value="">Inactivo</option>
					</select>
				</div>
				<div className = "col-md-4">
					<label htmlFor="">Evento</label>
					<input type="text" className = "form-control" />
				</div>
				<div className = "col-md-4 mt-2">
					<label htmlFor="">Departamento</label>
					<input type="text" className = "form-control" />
				</div>
				<div className = "col-md-4 mt-2">
					<label htmlFor="">Ciudad</label>
					<input type="text" className = "form-control" />
				</div>
				<div className = "col-md-4 mt-2">
					<label htmlFor="">Barrio</label>
					<input type="text" className = "form-control" />
				</div>
			</div>
		)
	return(
		<div>
			<ComponentCard 
			title = "Eventos" 
			buttonTitle = "Nuevo evento" 
			handleClickNew = {handleClickNew} 
			hasFilter = {true} 
			handleClickFilter = {handleClickFilter} 
			showFilter = {openFilter}
			filterComponent = {filterComponent}>
				<TableHelper columns = {columns} tbody = {tbody}></TableHelper>	
			</ComponentCard>
			<ModalBase show = {showCreate} handleShowModal = {handleCloseCreate} title = "Crear nuevo evento" size = "xl">
				<ModalCreate></ModalCreate>
			</ModalBase>
			<ModalBase show = {showEdit} handleShowModal = {handleCloseEdit} title = "Editar evento" size = "xl">
				<ModalEdit></ModalEdit>
			</ModalBase>
			<ModalBase show = {showDetail} handleShowModal = {handleCloseDetail} size = "xl" title = "Detalle eventos">
				<ModalDetail></ModalDetail>
			</ModalBase>
		</div>

	)
}

export default IndexEventsNotifications;