import React, {useState} from 'react'
import ComponentCard from '../layouts/ComponentCard'
import TableHelper from '../layouts/TableHelper'
import ModalBase from '../layouts/ModalBase'
import Dropdown from 'react-bootstrap/Dropdown'
import ModalDetail from './ModalDetail'
import ModalEdit from './ModalEdit'
import ModalUbication from './ModalUbication'
import ChatBase from '../layouts/ChatBase'
import alarmicon from '../../assets/images/alarmicon.png'

function IndexModuleEmergency(){

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

	const imgFit = {
		height : '35px',
		width : '35px',
		borderRadius : '50%'
	}
	const columns = ['Código', '¿Quién reporta?', 'Afectada', 'Confiabilidad', 'Dirección', 'Descripción', 'Categoría', 'Subcategoría', 'Estado', 'Acciones']
	const tbody = (
						<tr>
					      <td className = "text-center">1</td>
					      <td className = "text-center">Jaime Barrios</td>
					      <td className= "text-center">Anonimo</td>
					      <td className = "text-center">3</td>
					      <td className = "text-center">Calle x no. y</td>
					      <td className = "text-center">Hay una persona de edad mayor con COVID</td>
					      <td className = "text-center">
					      	<img src={alarmicon} alt="" style = {imgFit}/>
					      </td>
					      <td className = "text-center">Enfermedad</td>
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
			<div className  = "col-md-4">
				<label htmlFor="">Código</label>
				<input type="number" className  ="form-control" />
			</div>
			<div className  = "col-md-4">
				<label htmlFor="">Categoría</label>
				<select name="" className = "form-control" id="">
					<option value="">
						Categoría 1
					</option>
				</select>
			</div>
			<div className  = "col-md-4">
				<label htmlFor="">Subcategoría</label>
				<select name="" className = "form-control" id="">
					<option value="">Subcategoría</option>
				</select>
			</div>
			<div className  = "col-md-4 mt-2">
				<label htmlFor="">País</label>
				<select name="" className = "form-control" id="">
					<option value="">Colombia</option>
				</select>
			</div>
			<div className  = "col-md-4 mt-2">
				<label htmlFor="">Departamento</label>
				<select name="" className = "form-control" id="">
					<option value="">Atlantico</option>
				</select>
			</div>
			<div className  = "col-md-4 mt-2">
				<label htmlFor="">Ciudad</label>
				<select name="" className = "form-control" id="">
					<option value="">Barranquilla</option>
				</select>
			</div>
		</div>
		)
	return(
		<div>
        	<ComponentCard 
        	title = "Emegencias" 
        	noCreate = {true}
        	hasFilter = {true} 
			handleClickFilter = {handleClickFilter} 
			showFilter = {openFilter}
			filterComponent = {filterComponent}>
				<TableHelper columns = {columns} tbody = {tbody}></TableHelper>	
        	</ComponentCard>

        	<ModalBase show = {showDetail} handleShowModal = {handleCloseDetail} title = "Detalle del contacto" size = "xl">
        		<ModalDetail></ModalDetail>
        	</ModalBase>

        	<ModalBase show = {showEdit} handleShowModal = {handleCloseEdit} title = "Editar emergencia" size = "xl">
        		<ModalEdit></ModalEdit>
        	</ModalBase>

        	<ModalBase show = {showChat} handleShowModal = {handleCloseChat} title = "Chat" size = "lg">
        		<ChatBase userName = "Otro usuario" type = "Emergencia" state = "En gestión"/>
        	</ModalBase>

        	<ModalBase show = {showUbication} handleShowModal = {handleCloseUbication} title = "Ubicación" size = "xl">
        		<ModalUbication></ModalUbication>
        	</ModalBase>


		</div>
	)
}

export default IndexModuleEmergency