import React from 'react'
import alarmicon from '../../assets/images/alarmicon.png'
import policecar from '../../assets/images/police-car.png'
import bombero from '../../assets/images/firefighter.png'

function Categories(){
	return(
<div className = "pt-5">
			<div className = "row">
				<div className = "col-md-6">
					<div className = "card">
						<h2 className = "pl-5 pt-4 font-weight-bold">Categoría</h2>
						<div className = "row p-5 pt-2">
							<div className = "col-md-12">
								<label htmlFor="">Escala</label>
								<select name="" className = "form-control" id="">
									<option value="">Emergencia</option>
								</select>
							</div>
							<div className = "col-md-12 mt-5">
								<button className = "btn btn-primary btn-block" style = {{height : '100%'}}><i className = "fa fa-chart-line mr-2"></i>Generar</button>
							</div>
						</div>
					</div>
				</div>
				<div className = "col-md-6">
					<div className = "card">
						<div className = "card-body">
							<div className = "row">
								<div className = "col-md-12">
									<p><span className = "font-weight-bold">Escala seleccionada : </span><span className = "text-muted"></span>Emergencia - 3 categorías</p>
									<div className = "table-responsive mt-4" style = {{minHeight : '190px', maxHeight : '190px', overflow : 'auto'}}>
										<table className = "table table-striped table-hover table-flush">
											<tbody>
											<tr>
												<td>
													<img src={alarmicon} alt="" style = {{width : '30px'}}/>
												</td>
												<td>
													Emergencia médica
												</td>
											</tr>
											<tr>
												<td>
													<img src={policecar} alt="" style = {{width : '30px'}}/>
												</td>
												<td>
													Emergencia policial
												</td>
											</tr>

											<tr>
												<td>
													<img src={bombero} alt="" style = {{width : '30px'}}/>
												</td>
												<td>
													Emergencia bomberos
												</td>
											</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className = "col-md-12">
					<div className = "card">
						<div className = "card-body">
							<div className = "row">
								<div className = "col-md-4">
								<div className="ds-stat">
			                            <span className="ds-stat-name">Emergencias médica reportadas</span>
			                            <h3 className="ds-stat-number">7<span className="ds-stat-percent"><i className="fas fa-caret-up"></i>75%</span></h3>
			                            <div className="progress" style={{height: '3px'}}>
			                                <div className="progress-bar bg-success" role="progressbar" style={{width: '75%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
			                            </div>
			                        </div>
							</div>
							<div className = "col-md-4">
								<div className="ds-stat">
			                            <span className="ds-stat-name">Emergencias policia reportadas</span>
			                            <h3 className="ds-stat-number">3<span className="ds-stat-percent"><i className="fas fa-caret-down"></i>20%</span></h3>
			                            <div className="progress" style={{height: '3px'}}>
			                                <div className="progress-bar bg-danger" role="progressbar" style={{width: '20%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
			                            </div>
			                        </div>
							</div>
							<div className = "col-md-4">
								<div className="ds-stat">
			                            <span className="ds-stat-name">Emergencias bomberos reportadas</span>
			                            <h3 className="ds-stat-number">1<span className="ds-stat-percent"><i className="fas fa-caret-up"></i>5%</span></h3>
			                            <div className="progress" style={{height: '3px'}}>
			                                <div className="progress-bar bg-success" role="progressbar" style={{width: '5%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
			                            </div>
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

export default Categories