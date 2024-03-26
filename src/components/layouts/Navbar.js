import React from 'react'
import {Link} from 'react-router-dom'
import avatar1 from '../../assets/images/avatars/avatar1.png'


function Navbar(){
	const barsHandler = () => {
		const body = document.querySelector('body')
		const texts = document.querySelectorAll('.text-side')
		console.log(body)
		if(body.classList.contains('collapsed-sidebar')){
			body.classList.remove('collapsed-sidebar')
			for (var i = 0; i < texts.length; i++) {
				texts[i].classList.remove('d-none')
			}
		}else{
			body.classList.add('collapsed-sidebar')
			for (var i = 0; i < texts.length; i++) {
				texts[i].classList.add('d-none')
			}
		}
	}

	return(
			<div className="page-header">
			   <div className="search-form">
			      <form action="#" method="GET">
			         <div className="input-group">
			            <input type="text" name="search" className="form-control search-input" placeholder="Type something..." />
			            <span className="input-group-btn">
			            <button className="btn btn-default" id="close-search" type="button"><i className="icon-close"></i></button>
			            </span>
			         </div>
			      </form>
			   </div>
			   <nav className="navbar navbar-default navbar-expand-md shadow-sm bg-white">
			      <div className="container-fluid">
			         <div className="navbar-header">
			            <div className="logo-sm">
			               <button onClick = {barsHandler}><i class="fas fa-bars"></i></button>
			               <span class="logo-box"><span>Tured123</span></span>
			            </div>
			            <button type="button" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			            <i className="fas fa-angle-down"></i>
			            </button>
			         </div>

			         <div className="collapse navbar-collapse justify-content-between" id="bs-example-navbar-collapse-1">
			            <ul className="nav navbar-nav mr-auto">
			               <li className="collapsed-sidebar-toggle-inv"><a  onClick = {barsHandler} id="collapsed-sidebar-toggle-button"><i className="fas fa-bars"></i></a></li>
			            </ul>
			         </div>
			         <ul className="nav navbar-nav">
			            <li className="dropdown nav-item d-md-block">
			               <a className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
			               <Link className = "rounded-circle" to = "/perfil" >
			               	<img src={avatar1} alt="" className="rounded-circle" style = {{height : '40px', width : '40px'}}/>
			               </Link>
			               </a>
			               <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
			                  <li><Link to="/perfil">Perfil</Link></li>
			                  <li><Link to="/login">Cerrar sesion</Link></li>
			               </ul>
			            </li>
			         </ul>
			      </div>
			   </nav>
			</div>


		)
}

export default Navbar;