import React from 'react'
import avatar1 from '../../assets/images/avatars/avatar1.png'
import bg from '../../assets/images/profile-bg.jpeg'



function IndexUserProfile() {
    return (
<div>
        <div className="row">
        <div className="col-xl-12">
            <div className="profile-cover" style= {{height: '30vh'}}>
                <img src={bg} style = {{ height: '30vh'}} />
            </div>
            <div className="profile-header">
                <div className="profile-img">
                    <img src={avatar1} />
                </div>
                <div className="profile-name">
                    <h3>Angelo Snow</h3>
                </div>
            </div>
        </div>
    </div>

        <div className="row">
        
        <div className="col-md-8 col-12 p-3">
            <div className="card">
                <div className="card-body">
                    <h5 className=" bg-style">Informacion Personal</h5>
                        <div className = "row">
                        <div className = "col-md-6 mt-3">
                            <label htmlFor="">Cambiar foto</label>
                            <input type="file" className = "form-control" />
                        </div>
                         <div className = "col-md-6 mt-3">
                            <label htmlFor=""><i className = "fa fa-user mr-2"></i>Nombre</label>
                            <input type="text" className = "form-control" />
                        </div>
                        <div className = "col-md-6 mt-3">
                            <label htmlFor=""><i className = "fa fa-envelope mr-2"></i>Correo</label>
                            <input type="email" className = "form-control" />
                        </div>
                        <div className = "col-md-6 mt-3">
                            <label htmlFor=""><i className = "fa fa-phone mr-2"></i>Teléfono</label>
                            <input type="number" className = "form-control" />
                        </div>
                          <div className = "col-md-6 mt-3">
                            <label htmlFor=""><i className = "fa fa-id-card mr-2"></i>No. de documento</label>
                            <input type="number" className = "form-control" />
                        </div>
                         <div className = "col-md-6 mt-3">
                            <label htmlFor=""><i className = "fa fa-sliders-h mr-2"></i>Cargo</label>
                            <select name="" className = "form-control" id="">
                                <option value="">Opción 1</option>
                            </select>
                        </div>
                        <div className = "col-md-12 mt-3">
                            <label htmlFor="" ><i className = "fa fa-cog mr-2"></i>Rol</label>
                            <select name="" className = "form-control" id="">
                                <option value="">Administrador</option>
                            </select>
                        </div>
                        <div className = "col-md-12 mt-5">
                            <button className = "btn btn-primary btn-block">
                                <i className = "fa fa-save mr-2"></i>Guardar cambios
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4 col-12 p-3">
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <h5 className = "bg-style">Cambio de contraseña</h5>
                        <div className="row mt-3">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label>Contraseña</label>
                                <input type="password" name="nombre" id="nombre" className="form-control" />
                              </div>
                            </div>

                            <div className="col-md-12">
                              <div className="form-group">
                                <label>Confirmar</label>
                                <input type="password" name="apellido" id="apellido" className="form-control" />
                              </div>
                            </div>
                            <div className = "col-md-12 mt-3">
                                <button className = "btn btn-success btn-block">
                                <i className = "fa fa-lock mr-2"></i>Cambiar contraseña

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            
</div>

    )
}

export default IndexUserProfile