import React, {useState} from 'react'

import ComponentCard from '../layouts/ComponentCard'

import TableHelper from '../layouts/TableHelper'
import ModalBase from '../layouts/ModalBase'
import ModalCreate from './ModalCreate'
import ModalEdit from './ModalEdit'
import ModalDetail from './ModalDetail'
import ChatBase from '../layouts/ChatBase'

import {Link} from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'

function IndexCivilians(){

const [showCreate, setShowCreate] = useState(false);
const [showEdit, setShowEdit] = useState(false);
const [showChat, setShowChat] = useState(false)
const [showDetail, setShowDetail] = useState(false);
const [openFilter, setOpenFilter] = useState(false)
const handleClickFilter = () => setOpenFilter(!openFilter)

const handleCloseCreate = () => setShowCreate(false);
const handleShowCreate = () => setShowCreate(true);

const handleCloseEdit = () => setShowEdit(false);
const handleShowEdit = () => setShowEdit(true);

const handleCloseChat = () => setShowChat(false);
const handleShowChat = () => setShowChat(true);

const handleCloseDetail = () => setShowDetail(false);
const handleShowDetail = () => setShowDetail(true);

const handleClickNew = () => handleShowCreate()

	const columns = ['','Nombre', 'Teléfono', 'Correo', 'País', 'Ciudad','Confiabilidad', 'Estado', 'Acciones']
	const tbody = (
						<tr>
						<td className = "text-center">
							<i className = "fa fa-mobile-alt text-success"></i>
						</td>
					      <td className = "text-center">Jaime Barrios</td>
					      <td className = "text-center">3012345678</td>
					      <td className = "text-center">example@example.com</td>
					      <td className = "text-center">Colombia</td>
					      <td className = "text-center">Barranquilla</td>
					      <td className = "text-center">3</td>
					      <td className = "text-center"><span className = "badge badge-success">Activo</span></td>
					      <td className = "text-center">
					         <Dropdown>
					            <Dropdown.Toggle variant="success" id="dropdown-basic" className = "">
					            </Dropdown.Toggle>
					            <Dropdown.Menu>
					               <Dropdown.Item onClick = {handleShowDetail}><i className = "fa fa-eye mr-2"></i>Detalle</Dropdown.Item>
					               <Dropdown.Item onClick = {handleShowEdit}><i className = "fa fa-edit mr-2"></i>Editar</Dropdown.Item>
					               <Dropdown.Item className = "p-0"><Link to = "/ciudadanos/historial" className = "click-historial d-block" ><i className = "fa fa-tasks mr-2"></i>Historial</Link></Dropdown.Item>
					               <Dropdown.Item><i className = "fa fa-trash mr-2"></i>Eliminar</Dropdown.Item>
					            </Dropdown.Menu>
					         </Dropdown>
					      </td>
					   </tr>
		)
	const filterComponent = (
			<div className = "row mt-3">
				<div className = "col-md-4">
					<label htmlFor="">Nombre</label>
					<input type="text" className = "form-control" />
				</div>
				<div className = "col-md-4">
					<label htmlFor="">Número de documento</label>
					<input type="number" className = "form-control" />
				</div>
				<div className = "col-md-4">
					<label htmlFor="">Teléfono</label>
					<input type="number" className = "form-control" />
				</div>
				<div className = "col-md-4 mt-2">
					<label htmlFor="">Correo</label>
					<input type="number" className = "form-control" />
				</div>
				<div className = "col-md-4 mt-2">
					<label htmlFor="">Ciudad</label>
					<input type="number" className = "form-control" />
				</div>
				<div className = "col-md-4 mt-2">
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
        	<ComponentCard 
        	title = "Ciudadanos" 
        	buttonTitle = "Nuevo ciudadano" 
        	handleClickNew = {handleClickNew}
        	hasFilter = {true} 
			handleClickFilter = {handleClickFilter} 
			showFilter = {openFilter}
			filterComponent = {filterComponent}>
				<TableHelper columns = {columns} tbody = {tbody}></TableHelper>	
        	</ComponentCard>

        	<ModalBase show = {showCreate} handleShowModal = {handleCloseCreate} title = "Crear nuevo ciudadano" size = "xl">
        		<ModalCreate></ModalCreate>
        	</ModalBase>
        	<ModalBase show = {showEdit} handleShowModal = {handleCloseEdit} title = "Editar ciudadano" size = "xl">
        		<ModalEdit></ModalEdit>
        	</ModalBase>

        	<ModalBase show = {showDetail} handleShowModal = {handleCloseDetail} size = "xl" title = "Detalle ciudadano">
				<ModalDetail></ModalDetail>
			</ModalBase>

        	<ModalBase show = {showChat} handleShowModal = {handleCloseChat} title = "Chat" size = "lg">
        		<ChatBase userName = "Jaime Andrés Barrios" type = "Ciudadano" state = "En gestión"/>
        	</ModalBase>



		</div>
	)
}

export default IndexCivilians;