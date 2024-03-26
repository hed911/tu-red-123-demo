import React from 'react'

function Civilians(){
	return(
<div className = "pt-5">
			<div className = "row">
				<div className = "col-md-6">
					<div className = "card">
						<h2 className = "pl-5 pt-4 font-weight-bold">Ciudadanos</h2>
						<div className = "row p-5 pt-2">
							<div className = "col-md-12">
								<label htmlFor="">Filtros</label>
								<select name="" className = "form-control" id="">
									<option value="">Por genero</option>
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
								<p><span className = "font-weight-bold">Total : </span><span className = "text-muted"></span>120 ciudadanos</p>
									
									<div className = "table-responsive mt-4" style = {{minHeight : '190px', maxHeight : '190px', overflow : 'auto'}}>
										<table className = "table table-striped table-hover table-flush">
											<tbody>
												<tr>
													<td>Jaime Barrios</td>
													<td>12/12/2020</td>
												</tr>
												<tr>
													<td>Lina Marcela</td>
													<td>12/12/2020</td>
												</tr>
												<tr>
													<td>Jesús Gabriel</td>
													<td>12/12/2020</td>
												</tr>
												<tr>
													<td>Angelo Snow</td>
													<td>12/12/2020</td>
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
						<p><span className = "font-weight-bold">Filtro seleccionada : </span><span className = "text-muted"></span>Por genero</p>
							<div className = "row mt-5">
								<div className = "col-md-6">
								<div className="ds-stat">
			                            <span className="ds-stat-name">Masculino</span>
			                            <h3 className="ds-stat-number">80<span className="ds-stat-percent"><i className="fas fa-caret-up"></i>70%</span></h3>
			                            <div className="progress" style={{height: '3px'}}>
			                                <div className="progress-bar bg-success" role="progressbar" style={{width: '70%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
			                            </div>
			                        </div>
							</div>
							<div className = "col-md-6">
								<div className="ds-stat">
			                            <span className="ds-stat-name">Femenino</span>
			                            <h3 className="ds-stat-number">40<span className="ds-stat-percent"><i className="fas fa-caret-down"></i>30%</span></h3>
			                            <div className="progress" style={{height: '3px'}}>
			                                <div className="progress-bar bg-danger" role="progressbar" style={{width: '30%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
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

export default Civilians;