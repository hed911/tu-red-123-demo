import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import TableHelper from '../layouts/TableHelper'
import ModalCreateCategorie from './ModalCreateCategorie'
import ModalEditCategorie from './ModalEditCategorie'
import ModalDetailCategorie from './ModalDetailCategorie'
import ComponentCard from '../layouts/ComponentCard'
import ModalBase from '../layouts/ModalBase'
import alarmicon from '../../assets/images/alarmicon.png'


function IndexCategories() {

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

    const columns = ['Código', 'Escala', 'Nombre', 'Logo', 'Estado', 'Acciones']
    const tbody = (
        <tr>
					      <td className = "text-center">00001</td>
					      <td className = "text-center">Emergencia</td>
					      <td className = "text-center">Ambulancia</td>
					      <td className = "text-center">
					      	<img src={alarmicon} alt="logo" style = {{ width : '30px' }} />
					      </td>
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
        <div className = "row mt-4">
			<div className = "col-md-6">
				<label htmlFor="">Código</label>
				<input type="number" className = "form-control" />
			</div>
			<div className = "col-md-6">
				<label htmlFor="">Estado</label>
				<select name="" className = "form-control" id="">
					<option value="">Activo</option>
					<option value="">Inactivo</option>
				</select>
			</div>
			<div className = "col-md-6 mt-2">
				<label htmlFor="">Escala</label>
				<input type="text" className = "form-control" />
			</div>
			<div className = "col-md-6 mt-2">
				<label htmlFor="">Categoría</label>
				<input type="text" className = "form-control" />
			</div>
		</div>
    )
    return (
        <div>
			<ComponentCard 
			title = "Categoría" 
			buttonTitle = "Nueva categoría" 
			handleClickNew = {handleClickNew} 
			hasFilter = {true} 
			handleClickFilter = {handleClickFilter} 
			showFilter = {openFilter}
			filterComponent = {filterComponent}>
				<TableHelper columns = {columns} tbody = {tbody}></TableHelper>	
			</ComponentCard>

        	<ModalBase show = {showCreate} handleShowModal = {handleCloseCreate} title = "Crear nueva categoría" size = "xl">
        		<ModalCreateCategorie></ModalCreateCategorie>
        	</ModalBase>

        	<ModalBase show = {showEdit} handleShowModal = {handleCloseEdit} title = "Editar categoría" size = "xl">
        		<ModalEditCategorie></ModalEditCategorie>
        	</ModalBase>
        	<ModalBase show = {showDetail} handleShowModal = {handleCloseDetail} title = "Detalle de categoría" size = "xl">
        		<ModalDetailCategorie></ModalDetailCategorie>
        	</ModalBase>
		</div>
    )
}

export default IndexCategories;