import React from 'react'
import {Switch, Route, HashRouter as Router, Redirect, Link} from 'react-router-dom'
import Sidebar from './Sidebar'
import Side from './Side'
import Navbar from './Navbar'
import IndexInstitutions from '../institutions/IndexInstitutions'
import IndexCategories from '../category/IndexCategories'
import IndexEscala from '../category/IndexEscala'
import IndexDocuments from '../users/IndexDocuments'
import IndexUsers from '../users/IndexUsers'
import IndexProducts from '../comercial/IndexProducts'
import IndexProduction from '../comercial/IndexProduction'
import IndexEvents from '../configuration/events/IndexEvents'
import IndexAlerts from '../configuration/alerts/IndexAlerts'
import IndexPlaces from '../configuration/places/IndexPlaces'
import IndexPlacesDetail from '../configuration/places/IndexPlacesDetail'
import IndexEmergency from '../configuration/emergency/IndexEmergency'
import IndexEventsNotifications from '../notifications/events/IndexEventsNotifications'
import IndexAlertsNotifications from '../notifications/alerts/IndexAlertsNotifications'
import IndexCivilianNotifications from '../notifications/civilian/IndexCivilianNotifications'
import IndexCivilians from '../civilians/IndexCivilians'
import CiviliansHistorial from '../civilians/CiviliansHistorial'
import IndexCivilianReports from '../civilianreports/IndexCivilianReports'
import IndexModuleEmergency from '../emergency/IndexModuleEmergency'
import IndexAlertsReports from '../alertsreports/IndexAlertsReports'

import IndexPermits from '../permits/IndexPermits'
import IndexLogin from '../login/IndexLogin'
import IndexUserProfile from '../userprofile/IndexUserProfile'
import IndexDashboard from '../dashboard/IndexDashboard'
import IndexMap from '../map/IndexMap'
import IndexStats from '../stats/IndexStats'



function SwitchHelper(){
	return(
			<Switch>
                <Route path = "/" exact>
                    <Redirect to = "/login"></Redirect>
                </Route>
                <Route path = "/login" exact>
                    <IndexLogin></IndexLogin>
                </Route>


                <div className = "container-app">
                    <Sidebar />
                    <div className = "page-content">
                        <Side></Side>
                        <Navbar></Navbar>
                        <div className="page-inner no-page-title">
                        <Route path = "/dashboard" exact>
                            <IndexDashboard></IndexDashboard>
                        </Route>
                        <Route path = "/estadisticas">
                            <Router>
                                <IndexStats></IndexStats>
                            </Router>
                        </Route>
                        <Route path = "/instituciones">
                            <Router>
                                <IndexInstitutions></IndexInstitutions>
                            </Router>
                        </Route>
                        <Route path = "/categorias" exact>
                            <IndexCategories></IndexCategories>
                        </Route>
                        <Route path = "/categorias/escala" exact>
                            <IndexEscala></IndexEscala>
                        </Route>
                        <Route path = "/usuarios" exact>
                            <IndexUsers></IndexUsers>
                        </Route>
                        <Route path = "/usuarios/documentos" exact>
                            <IndexDocuments></IndexDocuments>
                        </Route>
                        <Route path = "/comercial/productos" exact>
                            <IndexProducts></IndexProducts>
                        </Route>
                        <Route path = "/comercial/produccion" exact>
                            <IndexProduction></IndexProduction>
                        </Route>
                        <Route path = "/configuracion/eventos" exact> 
                            <IndexEvents></IndexEvents>
                        </Route>
                        <Route path = "/configuracion/alertas" exact> 
                            <IndexAlerts></IndexAlerts>
                        </Route>
                        <Route path = "/configuracion/emergencias" exact>
                            <IndexEmergency></IndexEmergency>
                        </Route>
                        <Route path = "/configuracion/lugar" exact>
                            <IndexPlaces></IndexPlaces>
                        </Route>
                        <Route path = "/configuracion/lugar/detalle" exact>
                            <IndexPlacesDetail></IndexPlacesDetail>
                        </Route>
                        <Route path = "/notificaciones/eventos" exact>
                            <IndexEventsNotifications></IndexEventsNotifications>
                        </Route>
                        <Route path = "/notificaciones/alertas" exact>
                            <IndexAlertsNotifications></IndexAlertsNotifications>
                        </Route>
                        <Route path = "/notificaciones/ciudadano" exact>
                            <IndexCivilianNotifications></IndexCivilianNotifications>
                        </Route>
                        <Route path = "/ciudadanos" exact>
                            <IndexCivilians></IndexCivilians>
                        </Route>
                        <Route path = "/reportes" exact>
                            <IndexCivilianReports></IndexCivilianReports>
                        </Route>
                        <Route path = "/emergencias">
                            <IndexModuleEmergency></IndexModuleEmergency>
                        </Route>

                        <Route path = "/permisos">
                            <IndexPermits></IndexPermits>
                        </Route>
                        <Route path = "/perfil">
                            <IndexUserProfile></IndexUserProfile>
                        </Route>
                        <Route path = "/mapa" exact>
                            <IndexMap></IndexMap>
                        </Route>

                        <Route path = "/ciudadanos/historial">
                            <Router>
                                <CiviliansHistorial></CiviliansHistorial>
                            </Router>
                        </Route>
                        <Route path = "/reportes/alertas">
                            <IndexAlertsReports />
                        </Route>
                    </div>
                    </div>  
                </div>
            </Switch>
		)
}

export default SwitchHelper;