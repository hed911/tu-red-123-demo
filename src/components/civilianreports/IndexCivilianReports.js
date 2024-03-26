import React, {useState} from 'react'
import ComponentCard from '../layouts/ComponentCard'
import TableHelper from '../layouts/TableHelper'
import ModalBase from '../layouts/ModalBase'
import Dropdown from 'react-bootstrap/Dropdown'
import ModalDetail from './ModalDetail'
import ModalEdit from './ModalEdit'
import ModalUbication from './ModalUbication'

import ChatBase from '../layouts/ChatBase'
import policecar from '../../assets/images/police-car.png'





function IndexCivilianReports(){

const [showDetail, setShowDetail] = useState(false);
const [showEdit, setShowEdit] = useState(false);
const [showChat, setShowChat] = useState(false)
const [showUbication, setShowUbication] = useState(false)

const [openFilter, setOpenFilter] = useState(false)
const handleClickFilter = () => setOpenFilter(!openFilter)

const handleCloseDetail = () => setShowDetail(false);
const handleShowDetail = () => setShowDetail(true);

const handleCloseEdit = () => setShowEdit(false);
const handleShowEdit = () => setShowEdit(true);

const handleCloseChat = () => setShowChat(false);
const handleShowChat = () => setShowChat(true);

const handleCloseUbication = () => setShowUbication(false);
const handleShowUbication = () => setShowUbication(true);

	const columns = ['Código', 'Tipo de reporte', 'Dirección', 'Descripción', 'Categoría', 'Subcategoría', 'Estado', 'Acciones']
	const tbody = (
						<tr>
					      <td className = "text-center">1</td>
					      <td className = "text-center">Anonimo</td>
					      <td className= "text-center">Calle x no. y</td>
					      <td className = "text-center">Descripción...</td>
					      <td className = "text-center">
					      	<img src={policecar} style = {{width : '35px'}} alt="" />
					      </td>
					      <td className = "text-center">Atraco</td>
					      <td className = "text-center"><span className = "badge badge-danger">Pendiente</span></td>
					      <td className = "text-center">
					         <Dropdown>
					            <Dropdown.Toggle variant="success" id="dropdown-basic" className = "">
					            </Dropdown.Toggle>
					            <Dropdown.Menu>
					               <Dropdown.Item onClick = {handleShowDetail}><i className = "fa fa-eye mr-2"></i>Detalle</Dropdown.Item>
					               <Dropdown.Item onClick = {handleShowEdit}><i className = "fa fa-edit mr-2"></i>Editar</Dropdown.Item>
					               <Dropdown.Item onClick = {handleShowUbication}><i className = "fa fa-map-marker-alt mr-2"></i>Ubicación</Dropdown.Item>
					               <Dropdown.Item onClick = {handleShowChat}><i className = "fa fa-comment-dots mr-2"></i>Chat</Dropdown.Item>
					               <Dropdown.Item><i className = "fa fa-trash mr-2"></i>Eliminar</Dropdown.Item>
					            </Dropdown.Menu>
					         </Dropdown>
					      </td>
					   </tr>
		)
	const filterComponent = (
			<div className = "row mt-3">
				<div className = "col-md-6">
					<label htmlFor="">Código</label>
					<input type="text" className = "form-control" />
				</div>
				<div className = "col-md-6">
					<label htmlFor="">Estado</label>
					<select name="" className = "form-control" id="">
						<option value="">Activo</option>
						<option value="">Inactivo</option>
					</select>
				</div>
				<div className = "col-md-4 mt-2">
					<label htmlFor="">Tipo de reporte</label>
					<select name="" className = "form-control" id="">
						<option value="">Anonimo</option>
						<option value="">Usuario registrado</option>
					</select>
				</div>
				<div className = "col-md-4 mt-2">
					<label htmlFor="">Dirección</label>
					<input type="text" className = "form-control" />
				</div>
				<div className = "col-md-4 mt-2">
					<label htmlFor="">Subcategoría</label>
					<input type="text" className = "form-control" />
				</div>
			</div>
		)
	return(
		<div>
        	<ComponentCard 
        	title = "Reportes Ciudadanos" 
        	noCreate = {true}
        	hasFilter = {true} 
			handleClickFilter = {handleClickFilter} 
			showFilter = {openFilter}
			filterComponent = {filterComponent}>
				<TableHelper columns = {columns} tbody = {tbody}></TableHelper>	
        	</ComponentCard>

        	<ModalBase show = {showDetail} handleShowModal = {handleCloseDetail} title = "Detalle del ciudadano" size = "lg">
        		<ModalDetail></ModalDetail>
        	</ModalBase>
        	<ModalBase show = {showEdit} handleShowModal = {handleCloseEdit} title = "Editar reporte" size = "lg">
        		<ModalEdit></ModalEdit>
        	</ModalBase>
        	<ModalBase show = {showChat} handleShowModal = {handleCloseChat} title = "Chat" size = "lg">
        		<ChatBase userName = "Jaime Andrés Barrios" type = "Reporte ciudadano" state = "En gestión"/>
        	</ModalBase>

        	<ModalBase show = {showUbication} handleShowModal = {handleCloseUbication} title = "Ubicación" size = "xl">
        		<ModalUbication></ModalUbication>
        	</ModalBase>

		</div>
	)
}

export default IndexCivilianReports;
