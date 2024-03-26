import React, {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import TableHelper from '../layouts/TableHelper'
import ModalBase from '../layouts/ModalBase'
import ComponentCard from '../layouts/ComponentCard'
import ModalCreateProduction from './ModalCreateProduction'
import ModalEditProduction from './ModalEditProduction'

function IndexProduction(){

const [showCreate, setShowCreate] = useState(false);
const [showEdit, setShowEdit] = useState(false);
const [openFilter, setOpenFilter] = useState(false)
const handleClickFilter = () => setOpenFilter(!openFilter)

const handleCloseCreate = () => setShowCreate(false);
const handleShowCreate = () => setShowCreate(true);

const handleCloseEdit = () => setShowEdit(false);
const handleShowEdit = () => setShowEdit(true);

const handleClickNew = () => handleShowCreate()


	const columns = ['Lote', 'Tipo', 'Cantidad', 'Cantidad activa', 'Fecha de producción', 'Fecha de activación', 'Fecha de vencimiento', 'Estado', 'Acciones']
	const tbody = (
						<tr>
					      <td className = "text-center">1</td>
					      <td className = "text-center">Tipo B</td>
					      <td className = "text-center">5</td>
					      <td className = "text-center">5</td>
					      <td className = "text-center">17/01/2020</td>
					      <td className = "text-center">17/01/2020</td>
					      <td className = "text-center">17/01/2020</td>
					      
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
			<div className = "row mt-3">
				<div className = "col-md-6">
					<label htmlFor="">Lote</label>
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
					<label htmlFor="">Tipo</label>
					<select name="" id="" className = "form-control">
						<option value="">Tipo B</option>
					</select>
				</div>
				<div className = "col-md-4 mt-2">
					<label htmlFor="">Cantidad</label>
					<input type="number" className = "form-control" />
				</div>
				<div className = "col-md-4 mt-2">
					<label htmlFor="">Cantidad activa</label>
					<input type="number" className = "form-control" />
				</div>
			</div>
		)
	return(
		<div>
			<ComponentCard 
			title = "Producción" 
			buttonTitle = "Crear nueva producción" 
			handleClickNew = {handleClickNew}
			hasFilter = {true} 
			handleClickFilter = {handleClickFilter} 
			showFilter = {openFilter}
			filterComponent = {filterComponent}>
				<TableHelper columns = {columns} tbody = {tbody}></TableHelper>	
			</ComponentCard>
			<ModalBase show = {showCreate} handleShowModal = {handleCloseCreate} size = "lg" title = "Crear nueva producción">
				<ModalCreateProduction></ModalCreateProduction>
			</ModalBase>
			<ModalBase show = {showEdit} handleShowModal = {handleCloseEdit} size = "lg" title = "Editar producción">
				<ModalEditProduction></ModalEditProduction>
			</ModalBase>
		</div>

	)
}

export default IndexProduction;