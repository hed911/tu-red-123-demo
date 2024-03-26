import React from 'react'
import {Link} from 'react-router-dom'

function IndexLogin(){
	const body = document.querySelector('body')
	body.style.backgroundColor  ='#1e1e2f' 
	const style = {
		bgDefault : {
			backgroundColor : '#1e1e2f'	
		} 
	}
	return(
		<div className="main-content">
    <div className="header py-7 py-lg-7 pt-lg-9 pt-5" style={{backgroundImage: 'url(https://www.kritikalvision.ai/wp-content/uploads/2019/10/smart-cities-banner-1.jpg)', backgroundSize: 'contain', height : '100%'}}>
      <div className="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon className="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>

    <div className="container  pb-5" >
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-7">
          <div className="card border-0 mb-0 py-5 px-5 shadow" >
            <div className="card-body px-lg-5 py-lg-5 px-5 py-5">
              <div className="text-center text-muted mb-5 rounded p-2" style = {style.bgDefault}>
               <img src="http://tu-red-911.herokuapp.com/assets/logo_main-d09d98d25427936bf65461bc2079c252579c67e133046a98621eb6cbce1f4b94.png" width="75%" />
              </div>
                <div className="form-group mb-3">
                  <div className="input-group input-group-merge input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                    </div>
                    <input className="form-control" placeholder="Correo" type="email" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-merge input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-lock"></i></span>
                    </div>
                    <input className="form-control" placeholder="Contraseña" type="password" />
                  </div>
                </div>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input className="custom-control-input" id=" customCheckLogin" type="checkbox" />
                  <label className="custom-control-label" for=" customCheckLogin">
                    <span className="text-muted">Recordarme</span>
                  </label>
                </div>
                <div className="text-center mt-5">
                  <Link to="/dashboard" className="btn btn-primary btn-block">Iniciar Sesion</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

		)
}

export default IndexLogin