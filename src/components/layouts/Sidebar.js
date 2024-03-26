import React from 'react'
import {Link} from 'react-router-dom'
import avatar1 from '../../assets/images/avatars/avatar1.png'

function Sidebar(){
	return(
		<div className="page-sidebar" style={{background: "linear-gradient(to right top, #0d0d0d, #121212, #171717, #1b1b1b, #1f1f1f)"}}>
		   <div className="profile-menu">
		      <Link to="/perfil">
		      <img src={avatar1} alt="" />
		      </Link>
		   </div>
		   <div className="page-sidebar-inner">
		      <div className="page-sidebar-menu">
		         <ul>
		            <li>
		               <Link to="/dashboard" data-toggle="tooltip" data-placement="right" title="Dashboard"><i className="fas fa-columns"></i></Link>
		            </li>
		            <li>
		               <Link to="/mapa" data-toggle="tooltip" data-placement="right" title="Mapa"><i className="fas fa-map"></i></Link>
		            </li>
		            <li>
		               <Link to="/instituciones" data-toggle="tooltip" data-placement="right" title="Instituciones"><i className="fas fa-building"></i></Link>
		            </li>
		            <li>
		               <Link to="/notificaciones/eventos" data-toggle="tooltip" data-placement="right" title="Eventos"><i className="fas fa-plus"></i></Link>
		            </li>
		         </ul>
		      </div>
		   </div>
		   <div className="settings-menu-btn">
		      <Link to="/permisos" className="settings-menu-link"><i className="fas fa-cog"></i></Link>
		   </div>
		</div>

		)
}

export default Sidebar;