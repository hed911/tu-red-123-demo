import React from 'react'
import {default as ApexChart} from 'react-apexcharts'


function Institutions(){
	var options2 = {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            series: [{
                name: "Reportes por día",
                data: [10, 41, 35, 51, 49, 62, 69]
            }],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: 'Reportes de insitutciones en el dpto por día',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
            }
        }

        var options3 = {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            series: [{
                name: "Reportes por día",
                data: [5, 20, 45, 30, 16, 30, 25]
            }],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: 'Reportes de insitutciones en la ciudad por día',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
            }
        }
	return(
<div className = "pt-5">
			<div className = "row">
				<div className = "col-md-12">
					<div className = "card">
						<h2 className = "pl-5 pt-4 font-weight-bold">Instituciones</h2>
						<div className = "row p-5 pt-2">
							<div className = "col-md-6">
								<label htmlFor="">Departamento</label>
								<select name="" className = "form-control" id="">
									<option value="">Atlantico</option>
								</select>
							</div>
							<div className = "col-md-6">
								<label htmlFor="">Ciudad</label>
								<select name="" className = "form-control" id="">
									<option value="">Barranquilla</option>
								</select>
							</div>
							<div className = "col-md-12 mt-5">
								<button className = "btn btn-primary btn-block" style = {{height : '100%'}}><i className = "fa fa-chart-line mr-2"></i>Generar</button>
							</div>
						</div>
					</div>
				</div>
				</div>
				<div className = "row">
				<div className = "col-md-12">
					<div className = "card">
						<div className = "card-body">
							<div className = "row">
								<div className = "col-md-6">
									<div className="ds-stat">
			                            <span className="ds-stat-name">Porcentaje de utilidad (Departamento)</span>
			                            <h3 className="ds-stat-number">30<span className="ds-stat-percent"><i className="fas fa-caret-up"></i>30%</span></h3>
			                            <div className="progress" style={{height: '3px'}}>
			                                <div className="progress-bar bg-success" role="progressbar" style={{width: '30%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
			                            </div>
			                        </div>
								</div>
								<div className = "col-md-6">
									<div className="ds-stat">
			                            <span className="ds-stat-name">Porcentaje de utilidad (Ciudad)</span>
			                            <h3 className="ds-stat-number">25<span className="ds-stat-percent"><i className="fas fa-caret-up"></i>60%</span></h3>
			                            <div className="progress" style={{height: '3px'}}>
			                                <div className="progress-bar bg-success" role="progressbar" style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
			                            </div>
			                        </div>
								</div>
								<div className = "col-md-6 mt-5">
									<ApexChart options={options2}
						              series= {options2.series}
						              type="line"
						              height ="350"></ApexChart>
								</div>
								<div className = "col-md-6 mt-5">
									<ApexChart options={options3}
						              series= {options3.series}
						              type="line"
						              height ="350"></ApexChart>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		)
}

export default Institutions