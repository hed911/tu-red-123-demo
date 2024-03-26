import React, {useState} from 'react'
import TableHelper from '../layouts/TableHelper'
import CardPermits from './CardPermits'
import ModalBase from '../layouts/ModalBase'
import ModalCreate from './ModalCreate'
import ModalEdit from './ModalEdit'
import ModalDetail from './ModalDetail'


function IndexPermits(){
const [showCreate, setShowCreate] = useState(false);
const [showEdit, setShowEdit] = useState(false);
const [showDetail, setShowDetail] = useState(false);


const handleCloseCreate = () => setShowCreate(false);
const handleShowCreate = () => setShowCreate(true);

const handleCloseEdit = () => setShowEdit(false);
const handleShowEdit = () => setShowEdit(true);

const handleCloseDetail = () => setShowDetail(false);
const handleShowDetail = () => setShowDetail(true);

	const columns = ['Rol', 'Estado', 'Opciones']
	const tbody = (
					<tr>
						<td className = "text-center">Administrador</td>
						<td className = "text-center"><span className = "badge badge-success">Activo</span></td>
						<td className = "text-center">
							<div className = "d-flex justify-content-between align-items-center">
								<button className = "btn" onClick = {handleShowEdit}><i className = "fa fa-edit text-success"></i></button>
								<button className = "btn"><i className = "fa fa-lock text-danger"></i></button>
								<button className = "btn" onClick = {handleShowDetail}><i className = "fa fa-eye text-info"></i></button>
							</div>
						</td>
					</tr>

		)
	return(
		<div>
			<div className = "row">
				<div className = "col-md-5">
				<div className = "card">
					<div className = "card-body">
						<div className = "row">
							<div className = "col-md-8">
								<p className = "mb-0 font-weight-bold">Roles y permisos</p>
							</div>
							<div className = "col-md-4 text-right">
								<button className = "btn btn-primary btn-block" onClick = {handleShowCreate}>
									<i className = "fa fa-plus mr-2"></i>Nuevo rol
								</button>
							</div>
						</div>
						<div className = "row mt-4">
							<div className = "col-md-12">
								<TableHelper columns = {columns} tbody = {tbody}></TableHelper>
							</div>
						</div>
					</div>
				</div>
				</div>
				<div className = "col-md-7">
					<div className = "row">
						<div className = "col-md-6">
							<div className = "row">
								<CardPermits moduleName = "Categoría" />	
								<CardPermits moduleName = "Instituciones" />					
								<CardPermits moduleName = "Usuarios" />	
								<CardPermits moduleName = "Comercial" />		
								<CardPermits moduleName = "Configuración" />					
							</div>
						</div>
						<div className = "col-md-6">
							<div className = "row">
								<CardPermits moduleName = "Notificaciones" />					
								<CardPermits moduleName = "Ciudadanos" />
								<CardPermits moduleName = "Emergencias" noCreate = {true}/>					
								<CardPermits moduleName = "Reportes ciudadanos" noCreate = {true}/>
								<CardPermits moduleName = "Dashboard" noCreate = {true}/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ModalBase title = "Crear nuevo rol" handleShowModal = {handleCloseCreate} show = {showCreate} size = "">
				<ModalCreate></ModalCreate>
			</ModalBase>
			<ModalBase title = "Editar rol" handleShowModal = {handleCloseEdit} show = {showEdit} size = "">
				<ModalEdit></ModalEdit>
			</ModalBase>
			<ModalBase title = "Detalle rol" handleShowModal = {handleCloseDetail} show = {showDetail} size = "">
				<ModalDetail></ModalDetail>
			</ModalBase>
		</div>
		)
}

export default IndexPermits;