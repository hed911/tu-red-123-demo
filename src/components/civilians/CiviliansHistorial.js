import React, {useState} from 'react'
import {NavLink, Route, Switch} from 'react-router-dom'
import ReportsHistorial from './ReportsHistorial'
import AlertsHistorial from './AlertsHistorial'


function CivilianHistorial(){

	return(
		<div className="content pb-0 card shadow-sm">
	 		<div className="nav-wrapper ml-3 mr-3" style={{paddinTop: "8px"}}>
	 			<ul className="nav nav-pills nav-fill nav-pills-warning flex-column flex-md-row" id="tabs-icons-text" role="tablist">
			        <li className="nav-item">
			            <NavLink className="nav-link"  to="/ciudadanos/historial/emergencias" exact><i className="fas fa-exclamation mr-2"></i>Emergencias</NavLink>
			        </li>
			        <li className="nav-item">
			            <NavLink className="nav-link"  to="/ciudadanos/historial" exact><i className="fas fa-user-edit mr-2"></i>Reportes</NavLink>
			        </li>
	   			 </ul>
	   			 <Switch>
	   			 	<Route path = "/ciudadanos/historial" exact>
            			<ReportsHistorial />
	   			 	</Route>
	   			 	<Route path = "/ciudadanos/historial/emergencias" exact>
	   			 		<AlertsHistorial />
	   			 	</Route>
	   			 </Switch>
	 		</div>
		</div>		
	)
}

export default CivilianHistorial