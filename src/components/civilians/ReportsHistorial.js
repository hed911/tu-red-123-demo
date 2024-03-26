import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import TableHelper from '../layouts/TableHelper'
import ModalBase from '../layouts/ModalBase'
import ChatBase from '../layouts/ChatBase'
import ModalDetail from './ModalDetail'
import Collapse from 'react-bootstrap/Collapse'
import {default as ModalDetailContact} from '../civilianreports/ModalDetail'
import {default as ModalUbicationReports} from '../civilianreports/ModalUbication'
import alarmicon from '../../assets/images/alarmicon.png'


function ReportsHistorial(){
const [showDetail, setShowDetail] = useState(false);
const [showChat, setShowChat] = useState(false)
const [showUbication, setShowUbication] = useState(false)


const handleCloseChat = () => setShowChat(false);
const handleShowChat = () => setShowChat(true);

const handleCloseUbication = () => setShowUbication(false);
const handleShowUbication = () => setShowUbication(true);


const handleCloseDetail = () => setShowDetail(false);
const handleShowDetail = () => setShowDetail(true);

	const columnsReports = ['Código', 'Tipo de reporte', 'Dirección', 'Descripción', 'Categoría', 'Subcategoría','Estado', 'Acciones']
	//AQUÍ IRÍA BIEN SEA UN METODO O UNA VARIABLE CON EL MAP DEL ARRAY DE DATOS
	const tbody = (			
					<tr>
					   <td className = "text-center">00001</td>
					   <td className = "text-center">Anonimo</td>
					   <td className = "text-center">Calle x no. y-z</td>
					   <td className = "text-center">Covid-19</td>
					   <td className = "text-center">
					   	<img src={alarmicon} alt="" style = {{width : '25px'}} />
					   </td>
					   <td className = "text-center">3008556458</td>

					   <td className = "text-center"><span className = "badge badge-danger">Pendiente</span></td>
					   <td className = "text-center">
					      <Dropdown>
					         <Dropdown.Toggle variant="success" id="dropdown-basic">
					         </Dropdown.Toggle>
					         <Dropdown.Menu>
					            <Dropdown.Item onClick = {handleShowDetail} ><i className = "fa fa-eye mr-2"></i>Detalle</Dropdown.Item>
					            <Dropdown.Item onClick = {handleShowUbication}><i className = "fa fa-map-marker-alt mr-2"></i>Ubicación</Dropdown.Item>
					            <Dropdown.Item onClick = {handleShowChat}><i className = "fa fa-comment-dots mr-2"></i>Chat</Dropdown.Item>
					         </Dropdown.Menu>
					      </Dropdown>
					   </td>
					</tr>
		)	
return(
						<div className="p-1 shadow-none mt-2">
            				<div className="card-header border-0">
							   <div className="row align-items-center">
							      <div className="col-4">
							         <h3 className="mb-0">Reportes</h3>
							      </div>
							      <div className="col-8 text-right">
		
							      </div>
							   </div>

            				</div>

							<TableHelper columns = {columnsReports} tbody = {tbody}></TableHelper>

							<ModalBase show = {showDetail} handleShowModal = {handleCloseDetail} size = "xl" title = "Detalle del contacto">
								<ModalDetailContact></ModalDetailContact>
							</ModalBase>

							<ModalBase show = {showUbication} handleShowModal = {handleCloseUbication} title = "Ubicación" size = "xl">
        						<ModalUbicationReports></ModalUbicationReports>
        					</ModalBase>

        					<ModalBase show = {showChat} handleShowModal = {handleCloseChat} title = "Chat" size = "lg">
        						<ChatBase userName = "Jaime Andrés Barrios" type = "Reporte ciudadano" state = "En gestión"/>
        					</ModalBase>
	   			 		</div>
	)
}

export default ReportsHistorial