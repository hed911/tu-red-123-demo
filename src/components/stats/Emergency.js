import React from 'react'
import { default as ApexChart } from 'react-apexcharts'


function Emergency() {
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
                text: 'Emergencias por categoría',
                align: 'left'
            },
        dataLabels: {
            enabled: false
        },
        series: [{
            data: [1400, 1000, 1200, 570, 740, 980, 1300]
        }],
        xaxis: {
            categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
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
                text: 'Emergencias por subcategoría',
                align: 'left'
        },
        dataLabels: {
            enabled: false
        },
        series: [{
            data: [1000, 900, 1200, 570, 680, 980, 700]
        }],
        xaxis: {
            categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
        }
    }
    return (
        <div className = "pt-5">
			<div className = "row">
				<div className = "col-md-12">
					<div className = "card">
						<h2 className = "pl-5 pt-4 font-weight-bold">Emergencias</h2>
						<div className = "row p-5 pt-2">
							<div className = "col-md-6">
								<label htmlFor="">Categoría</label>
								<select name="" className = "form-control" id="">
									<option value="">Enfermedad</option>
								</select>
							</div>
							<div className = "col-md-6">
								<label htmlFor="">Subcategoría</label>
								<select name="" className = "form-control" id="">
									<option value="">Covid-19</option>
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
			                            <span className="ds-stat-name">Porcentaje de emergencias por categoría</span>
			                            <h3 className="ds-stat-number">30<span className="ds-stat-percent"><i className="fas fa-caret-up"></i>30%</span></h3>
			                            <div className="progress" style={{height: '3px'}}>
			                                <div className="progress-bar bg-success" role="progressbar" style={{width: '30%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
			                            </div>
			                        </div>
								</div>
								<div className = "col-md-6">
									<div className="ds-stat">
			                            <span className="ds-stat-name">Porcentaje de emergencias por subcategoría</span>
			                            <h3 className="ds-stat-number">25<span className="ds-stat-percent"><i className="fas fa-caret-up"></i>60%</span></h3>
			                            <div className="progress" style={{height: '3px'}}>
			                                <div className="progress-bar bg-success" role="progressbar" style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
			                            </div>
			                        </div>
								</div>
								<div className = "col-md-6 mt-5">
									<ApexChart options={options2}
                                          series= {options2.series}
                                          type="bar"
                                          height ="350"></ApexChart>
								</div>
								<div className = "col-md-6 mt-5">
									<ApexChart options={options3}
                                          series= {options3.series}
                                          type="bar"
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

export default Emergency