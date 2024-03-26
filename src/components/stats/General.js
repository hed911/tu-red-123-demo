import React from 'react'
import {default as ApexChart} from 'react-apexcharts'

function General(){
	var options2 = {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            series: [{
                name: "Descargas por día",
                data: [10, 41, 35, 51, 49, 62, 69]
            }],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: 'Descargas por día',
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
                name: "Descargas por semana",
                data: [150, 230, 160, 280]
            }],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: 'Descargas por semana',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
            }
        }
	return(
<div className = "pt-5">
			<div className = "row">
				<div className = "col-md-12">
					<div className = "card">
						<h2 className = "pl-5 pt-4 font-weight-bold">General</h2>
						<div className = "row p-5">
							<div className = "col-md-6">
								<label htmlFor="">Departamento</label>
								<select name="" className = "form-control" id="">
									<option value="">Seleccione un departamento</option>
								</select>
							</div>
							<div className = "col-md-6">
								<label htmlFor="">Ciudad</label>
								<select name="" className = "form-control" id="">
									<option value="">Seleccione una ciudad</option>
								</select>
							</div>
							
							<div className = "col-md-12 mt-5">
								<button className = "btn btn-primary btn-block"><i className = "fa fa-chart-line mr-2"></i>Generar</button>
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
			                            <span className="ds-stat-name">Porcentaje de descargas</span>
			                            <h3 className="ds-stat-number">67.856<span className="ds-stat-percent"><i className="fas fa-caret-up"></i>48%</span></h3>
			                            <div className="progress" style={{height: '3px'}}>
			                                <div className="progress-bar bg-success" role="progressbar" style={{width: '48%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
			                            </div>
			                        </div>
								</div>
								<div className = "col-md-6">
									<div className="ds-stat">
			                            <span className="ds-stat-name">Porcentaje de uso</span>
			                            <h3 className="ds-stat-number">20.347<span className="ds-stat-percent"><i className="fas fa-caret-up"></i>24%</span></h3>
			                            <div className="progress" style={{height: '3px'}}>
			                                <div className="progress-bar bg-info" role="progressbar" style={{width: '24%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
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

export default General;