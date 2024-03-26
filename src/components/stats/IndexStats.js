import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'


import General from './General'
import Categories from './Categories'
import Institutions from './Institutions'
import Comercial from './Comercial'
import Notifications from './Notifications'
import Civilians from './Civilians'
import Emergency from './Emergency'
import Reports from './Reports'
function IndexStats(){
	
        
	return(
<div>
	<ul class="nav nav-tabs">
	  <li class="nav-item">
	    <Link class="nav-link" to = "/estadisticas">General</Link>
	  </li>
	  <li class="nav-item">
	    <Link class="nav-link" to = "/estadisticas/categoria">Categoría</Link>
	  </li>
	  <li class="nav-item">
	    <Link class="nav-link" to = "/estadisticas/instituciones">Instituciones</Link>
	  </li>
	  <li class="nav-item">
	    <Link class="nav-link" to = "/estadisticas/comercial">Comercial</Link>
	  </li>
	  <li class="nav-item">
	    <Link class="nav-link" to = "/estadisticas/notificaciones">Notificaciones</Link>
	  </li>
	  <li class="nav-item">
	    <Link class="nav-link" to = "/estadisticas/ciudadanos">Ciudadanos</Link>
	  </li>

	  <li class="nav-item">
	    <Link class="nav-link" to = "/estadisticas/emergencias">Emergencias</Link>
	  </li>
	  <li class="nav-item">
	    <Link class="nav-link" to = "/estadisticas/reportes">Reportes</Link>
	  </li>

	</ul>

	<Switch>

	<Route path = "/estadisticas" exact>
		<General />
	</Route>

	<Route path = "/estadisticas/categoria" exact>
		<Categories />
	</Route>

	<Route path = "/estadisticas/instituciones" exact>
		<Institutions />
	</Route>

	<Route path = "/estadisticas/comercial" exact>
		<Comercial />
	</Route>

	<Route path = "/estadisticas/notificaciones" exact>
		<Notifications />
	</Route>

	<Route path = "/estadisticas/ciudadanos" exact>
		<Civilians />
	</Route>

	<Route path = "/estadisticas/emergencias" exact>
		<Emergency />
	</Route>

	<Route path = "/estadisticas/reportes" exact>
		<Reports />
	</Route>

	</Switch>	

</div>
		)
}

export default IndexStats