import React, {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import TableHelper from '../../layouts/TableHelper'
import ModalBase from '../../layouts/ModalBase'
import ComponentCard from '../../layouts/ComponentCard'
import ModalCreateDetails from './ModalCreateDetails'
import ModalEditDetails from './ModalEditDetails'
import ModalDetailPlaces from './ModalDetailPlaces'

function IndexEvents(){
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

	const columns = ['Código', 'Nombre', 'Dirección', 'Teléfono', 'Horario', 'Ciudad', 'Estado', 'Acciones']
	const tbody = (
						<tr>
					      <td className = "text-center">1</td>
					      <td className = "text-center">Lugar x</td>
					      <td className = "text-center">Calle x no.y</td>
					      <td className = "text-center">3012345678</td>
					      <td className = "text-center">De 8am a 12m</td>
					      <td className = "text-center">Barranquilla</td>
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
					<label htmlFor="">Nombre</label>
					<input type="text" className = "form-control" />
				</div>
				<div className = "col-md-4 mt-2">
					<label htmlFor="">Dirección</label>
					<input type="number" className = "form-control" />
				</div>
				<div className = "col-md-4 mt-2">
					<label htmlFor="">Teléfono</label>
					<input type="number" className = "form-control" />
				</div>
				<div className = "col-md-4 mt-2">
					<label htmlFor="">Ciudad</label>
					<input type="text" className = "form-control" />
				</div>
			</div>
		)
	return(
		<div>
			<ComponentCard title = "Detalle de lugares" 
			buttonTitle =  "Crear nuevo detalle de lugar" 
			handleClickNew = {handleClickNew}
			hasFilter = {true} 
			handleClickFilter = {handleClickFilter} 
			showFilter = {openFilter}
			filterComponent = {filterComponent}>
				<TableHelper columns = {columns} tbody = {tbody}></TableHelper>	
			</ComponentCard>

			<ModalBase title = "Crear nuevo detalle de lugar" show = {showCreate} handleShowModal = {handleCloseCreate} size = "xl">
				<ModalCreateDetails></ModalCreateDetails>
			</ModalBase>
			<ModalBase title = "Editar detalle de lugar" show = {showEdit} handleShowModal = {handleCloseEdit} size = "xl">
				<ModalEditDetails></ModalEditDetails>
			</ModalBase>
			<ModalBase show = {showDetail} handleShowModal = {handleCloseDetail} size = "xl" title = "Detalle del lugar">
				<ModalDetailPlaces></ModalDetailPlaces>
			</ModalBase>
		</div>

	)
}

export default IndexEvents;