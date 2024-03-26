import React from 'react'
import { default as ApexChart } from 'react-apexcharts'

function Notifications(){
	const options2 = {
        chart: {
            height: 350,
            type: 'bar',
        },
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
        title: {
                text: 'Eventos este mes',
                align: 'left'
            },
        dataLabels: {
            enabled: false
        },
        series: [{
            data: [1400, 1000, 1200, 570, 740]
        }],
        xaxis: {
            categories: ['Protestas', 'Bloqueo de vía', 'Corte de luz', 'Huelga', 'Covid'],
        }
    }
    const options3 = {
        chart: {
            height: 350,
            type: 'bar',
        },
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
        title: {
                text: 'Alertas este mes',
                align: 'left'
        },
        dataLabels: {
            enabled: false
        },
        series: [{
            data: [1000, 900, 1200]
        }],
        xaxis: {
            categories: ['Seguridad ciudadana', 'Seguridad víal', 'Trancón',],
        }
    }
     const options4 = {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            series: [{
                name: "Reportes de covid",
                data: [10, 41, 35, 51, 49]
            }],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: 'Reportes de COVID',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
            }
        }
    return (
        <div className = "pt-5">
			<div className = "row">
				<div className = "col-md-12">
					<div className = "card">
						<h2 className = "pl-5 pt-4 font-weight-bold">Notificaciones</h2>
						<div className = "row p-5 pt-2">
							<div className = "col-md-12">
								<label htmlFor="">Filtrar por :</label>
								<select name="" className = "form-control" id="">
									<option value="">Día</option>
									<option value="">Semana</option>
									<option value="">Mes</option>
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
					<div className = "col-md-6 mt-4">
					<div className = "card">
						<div className = "card-body">
							<div className="ds-stat">
				                            <span className="ds-stat-name">Total de eventos notificados</span>
				                            <h3 className="ds-stat-number">30</h3>
				                            <div className="progress" style={{height: '3px'}}>
				                                <div className="progress-bar bg-success" role="progressbar" style={{width: '30%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
				                            </div>
				            </div>
				            <div className = "mt-5">
				            	<ApexChart options={options2}
                                          series= {options2.series}
                                          type="bar"
                                          height ="350"></ApexChart>
				            </div>
						</div>
					</div>
					</div>
					<div className = "col-md-6 mt-4">
					<div className = "card">
						<div className = "card-body">
							<div className="ds-stat">
				                            <span className="ds-stat-name">Total de alertas notificados</span>
				                            <h3 className="ds-stat-number">20</h3>
				                            <div className="progress" style={{height: '3px'}}>
				                                <div className="progress-bar bg-success" role="progressbar" style={{width: '20%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
				                            </div>
				            </div>
				            <div className = "mt-5">
				            	<ApexChart options={options3}
                                          series= {options3.series}
                                          type="bar"
                                          height ="350"></ApexChart>
				            </div>
						</div>
					</div>
					</div>
					<div className = "col-md-12 mt-4">
					<div className = "card">
						<div className = "card-body">
							<div className="ds-stat">
				                            <span className="ds-stat-name">Total de reportes de coronavirus</span>
				                            <h3 className="ds-stat-number">20</h3>
				                            <div className="progress" style={{height: '3px'}}>
				                                <div className="progress-bar bg-success" role="progressbar" style={{width: '20%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
				                            </div>
				            </div>
				            <div className = "mt-5">
				            	<ApexChart options={options4}
						              series= {options4.series}
						              type="line"
						              height ="350"></ApexChart>
				            </div>
						</div>
					</div>
					</div>
				</div>
		</div>
    )
}

export default Notifications;