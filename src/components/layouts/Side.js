import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

function Side(){
	const classes = useStyles();
	if( window.screen.width <= 700){
		const body = document.querySelector('body')
		body.classList.add('collapsed-sidebar')
		const texts = document.querySelectorAll('.text-side')
		for (var i = 0; i < texts.length; i++) {
				texts[i].classList.add('d-none')
			}
	}

	return(
			<div className="secondary-sidebar shadow-sm" style = {{maxHeight : '100vh', overflowY : 'auto', position : 'fixed'}}>
			   <div className="secondary-sidebar-bar">
			      <Link to="/dashboard" className="logo-box"><img style={{width : '100%'}} src={logo}  alt = "Logo"/></Link>
			   </div>
			   <div className="secondary-sidebar-menu mt-5">
				<TreeView
				      className={classes.root}
				      defaultCollapseIcon={<ExpandMoreIcon />}
				      defaultExpandIcon={<ChevronRightIcon />}
				    >
				      <TreeItem nodeId = "9" label = {<Link to = "/dashboard"><i className = "fa fa-chart-bar mr-2"></i><span className = "text-side">Dashboard</span></Link>}></TreeItem>
				      <TreeItem nodeId = "12" label = {<Link to = "/estadisticas"><i className = "fa fa-chart-pie mr-2"></i><span className = "text-side">Estadisticas</span></Link>}></TreeItem>

				      <TreeItem nodeId = "1" label = {<p><i className= "fa fa-align-left mr-2" ></i> <span className = "text-side">Categoría</span></p>}>
				      	<Link to = "/categorias/escala"><i className = "fa fa-hospital-alt mr-2"></i><span className = "text-side">Escala</span></Link>
				      	<Link to = "/categorias"><i className = "fa fa-ambulance mr-2"></i><span className = "text-side">Categorías</span></Link>
				      </TreeItem>
				      <TreeItem nodeId = "2" label = {<Link to = "/instituciones"><i className = "fas fa-building mr-2"></i><span className = "text-side">Institución</span></Link>} />
				      <TreeItem nodeId = "3" label = {<p><i className = "fa fa-users mr-2"></i><span className = "text-side">Usuarios</span></p>}>
				      	<Link to = "/usuarios/documentos"><i className = "fa fa-id-card-alt mr-2"></i><span className = "text-side">Documentos</span></Link>
				      	<Link to = "/usuarios"><i className = "fa fa-user mr-2"></i><span className = "text-side">Usuario</span></Link>				      	
				      </TreeItem>
				      <TreeItem nodeId = "4" label = {<p><i className = "fa fa-dollar-sign mr-2"></i><span className = "text-side">Comercial</span></p>}>
				      	<Link to = "/comercial/productos"><i className = "fa fa-truck-loading mr-2"></i><span className = "text-side">Productos</span></Link>	
				      	<Link to = "/comercial/produccion"><i className = "fa fa-project-diagram mr-2"></i><span className = "text-side">Producción</span></Link>	
				      </TreeItem>
				      <TreeItem nodeId = "5" label = {<p><i className = "fa fa-clipboard-check mr-2"></i><span className = "text-side">Configuración</span></p>}>
				      	<Link to = "/configuracion/eventos"><i className = "fa fa-calendar-alt mr-2"></i><span className = "text-side">Eventos</span></Link>
				      	<Link to = "/configuracion/alertas"><i className = "fa fa-exclamation-circle mr-2"></i><span className = "text-side">Alertas</span></Link>
				      	<Link to = "/configuracion/emergencias"><i className = "fa fa-bell mr-2"></i><span className = "text-side">Emergencias</span></Link>
				      	<TreeItem nodeId = "12" label = {<p><i className = "fa fa-map-marker-alt mr-2"></i><span className = "text-side">Lugares</span></p>} style = {{paddingLeft : '.3rem'}}>
				      		<Link to = "/configuracion/lugar"><i className = "fa fa-cog mr-2"></i><span className = "text-side">Config.</span></Link>
				      		<Link to = "/configuracion/lugar/detalle"><i className = "fa fa-map-marker-alt mr-2"></i><span className = "text-side">Detalle</span></Link>

				      	</TreeItem>

				      </TreeItem>
				      <TreeItem nodeId = "6" label = {<p><i className= "fa fa-bell mr-2"></i><span className = "text-side">Notificaciones</span></p>}>
				      	<Link to = "/notificaciones/eventos"><i className = "fa fa-calendar-alt mr-2"></i><span className = "text-side">Eventos</span></Link>
				      	<Link to = "/notificaciones/alertas"><i className = "fa fa-clock mr-2"></i><span className = "text-side">Alertas</span></Link>
				      	<Link to = "/notificaciones/ciudadano"><i className = "fa fa-user-injured mr-2"></i><span className = "text-side">Ciudadanos</span></Link>
				      </TreeItem>
				      <TreeItem nodeId = "7" label = {<Link to = "/ciudadanos"><i className = "fa fa-people-carry mr-2"></i><span className = "text-side">Ciudadanos</span></Link>}></TreeItem>
				      <TreeItem nodeId = "8" label = {<Link to = "/emergencias"><i className = "fa fa-first-aid mr-2"></i><span className = "text-side">Emergencias</span></Link>}></TreeItem>
				      <TreeItem nodeId = "10" label = {<p><i className= "fa fa-edit mr-2"></i><span className = "text-side">Reportes</span></p>}>
				      	<Link to = "/reportes"><i className = "fa fa-user-edit mr-2"></i><span className = "text-side">Ciudadanos</span></Link>
				      	<Link to = "/reportes/alertas"><i className = "fa fa-exclamation mr-2"></i><span className = "text-side">Alertas</span></Link>

				      </TreeItem>

				      <TreeItem nodeId = "11" label = {<Link to = "/mapa"><i className = "fa fa-map mr-2"></i><span className = "text-side">Mapa</span></Link>}></TreeItem>


				    </TreeView>   
			   </div>
			</div>
	)
}

export default Side;