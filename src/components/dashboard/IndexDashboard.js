import React, {useEffect} from 'react'
import Chart from 'chart.js'
import {default as ApexChart} from 'react-apexcharts'
import MapContainer from '../layouts/MapContainer'

function IndexDashboard() {
    useEffect( () => {
        var ctx = document.querySelector('.myChart').getContext('2d');
        var myChart = new Chart(ctx, {
        "type": "doughnut",
        "data": {
            "labels": ["Policia","Ambulancia","Bomberos"],
            "datasets": [{
                "label": "Total",
                "data": [327,82,145],
                "backgroundColor": ["#fe073a","#ffc107","#007bff"]
            }]
        },
        options: {
            legend: {
                display: false
            }
        }
    });
    }, [])

            const options = {
            chart: {
                height: 350,
                type: 'bar',
                
    toolbar: {
      show: false
    }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '65%',
                    endingShape: 'rounded'  
                },
            },
        
        colors:['#fc0d2a', '#007bff', '#18e04c'],

            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            series: [{
                name: 'Emergencias',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 63, 60, 60]
            }, {
                name: 'Reportes ciudadanos',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 89, 95, 95]
            }, {
                name: 'Bienestar familiar',
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 39, 46, 46]
            }],
            xaxis: {
                categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            },
            fill: {
                opacity: 1

            },
            
        }
         var options2 = {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            series: [{
                name: "Eventos",
                data: [10, 41, 35, 51, 49, 62, 69]
            }],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: 'Eventos en la semana',
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
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            series: [{
                data: [1400, 1330, 1008, 870, 740, 680, 590, 400, 300]
            }],
            xaxis: {
                categories: ['Barranquilla', 'Medellin', 'Bogota', 'Cali', 'Monteria', 'Malambo', 'Maicao', 'Sincelejo', 'Cucuta'],
            }
        }
    return (
        <div>
<div className="row">
    <div className="col-12">
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="ds-stat">
                            <span className="ds-stat-name">Desfibriladores</span>
                            <h3 className="ds-stat-number">67.856<span className="ds-stat-percent"><i className="fas fa-caret-up"></i>23%</span></h3>
                            <div className="progress" style={{height: '3px'}}>
                                <div className="progress-bar bg-info" role="progressbar" style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="ds-stat">
                            <span className="ds-stat-name">Voluntarios médicos</span>
                            <h3 className="ds-stat-number">104.679<span className="ds-stat-percent"><i className="fas fa-caret-down"></i>7%</span></h3>
                            <div className="progress" style={{height: '3px'}}>
                                <div className="progress-bar bg-info" role="progressbar" style = {{width: '34%'}} aria-valuenow="34" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="ds-stat">
                            <span className="ds-stat-name">Reportes ciudadanos</span>
                            <h3 className="ds-stat-number">457<span className="ds-stat-percent"><i className="fas fa-caret-up"></i>31%</span></h3>
                            <div className="progress" style={{height: '3px'}}>
                                <div className="progress-bar bg-info" role="progressbar" style={{width: '45%'}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="ds-stat">
                            <span className="ds-stat-name">Eventos de la emergencia</span>
                            <h3 className="ds-stat-number">53.980<span className="ds-stat-percent"><i className="fas fa-caret-up"></i>16%</span></h3>
                            <div className="progress" style={{height: '3px'}}>
                                <div className="progress-bar bg-info" role="progressbar" style={{width: '57%'}} aria-valuenow="57" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className = "row">
	<div className = "col-md-8" >
	<div className = "card" style = {{height : '81vh'}}>
		<MapContainer />
	</div>
		
	</div>
	<div className = "col-md-4">
		<div className = "row">
			<div className = "col-md-12">
				<div className="card">
				      <h6 className="mb-1 ml-2 pt-2 text-muted">Ciudades</h6>
				      <div className="list-group px-2" style={{height: '25vh',overflowY: 'auto'}}>
				         <p  className="list-group-item list-group-item-action p-2 bg-transparent text-nowrap">
				            <strong className="text-success">267</strong> - Soledad
				          </p>
				          <p className="list-group-item list-group-item-action p-2 bg-transparent active text-nowrap">
				            <strong className="text-success">267</strong> - Barranquilla
				          </p>
				          <p className="list-group-item list-group-item-action p-2 bg-transparent text-nowrap">
				            <strong className="text-success">267</strong> - Santa marta
				          </p>
				          <p  className="list-group-item list-group-item-action p-2 bg-transparent text-nowrap">
				            <strong className="text-success">267</strong> - Cartagena
				          </p>
				          <p  className="list-group-item list-group-item-action p-2 bg-transparent text-nowrap">
				            <strong className="text-success">267</strong> - Valledupar
				          </p>
				          <p  className="list-group-item list-group-item-action p-2 bg-transparent text-nowrap">
				            <strong className="text-success">267</strong> - Monteria
				          </p>
				          <p  className="list-group-item list-group-item-action p-2 bg-transparent text-nowrap">
				            <strong className="text-success">267</strong> - Sincelejo
				          </p>
				        </div>
				    </div>		
			</div>
			<div className = "col-md-12">
				<div style = {{maxHeight : '50vh'}} className = "card">
                      <h6 className="mb-1 ml-3 pt-2 text-muted">Eventos de la ciudad</h6>
				<div className = "px-5 py-2 d-flex justify-content-center flex-column">

                    <canvas className="myChart" width="4" height="2"></canvas>
					<div class="popular-product-list">
                      <ul class="list-unstyled">
                          <li id="popular-product1">
                              <span>Policias</span>
                              <span class="product-color bg-danger">709</span>
                          </li>
                          <li id="popular-product2">
                              <span>Ambulancias</span>
                              <span class="product-color bg-warning">432</span>
                          </li>
                          <li id="popular-product3 text-white">
                              <span>Bomberos</span>
                              <span class="product-color bg-info">329</span>
                          </li>
                      </ul>
                  </div>
				</div>
				</div>
			</div>

		</div>
	</div>
</div>
<div className = "row">
	<div className = "col-md-12">
		<div className = "card">
        <div className = "card-body">
         <h6 className="mb-1 ml-3 pt-2 text-muted">Estadisticas de eventos</h6>
			<ApexChart options={options}
              series= {options.series}
              type="bar"
              height ="350"></ApexChart>
            
        </div>
		</div>
	</div>
</div>

<div className = "row">
    <div className = "col-md-6">
        <div className = "card">

        <div className = " card-body">
            <ApexChart options={options2}
              series= {options2.series}
              type="line"
              height ="350"></ApexChart>
        </div>
        </div>
    </div>
    <div className = "col-md-6">
        <div className = "card">
        <div className = "card-body">
            <ApexChart options={options3}
              series= {options3.series}
              type="bar"
              height ="350"></ApexChart>
        </div>
        </div>
    </div>
</div>
			
</div>
    )
}

export default IndexDashboard