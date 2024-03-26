import React from 'react'
import { default as ApexChart } from 'react-apexcharts'

function Comercial() {
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
                text: 'Lotes por día',
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
                text: 'Lotes activos',
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
                            <div className = "card-body">
                                <div className = "row">
                                    <div className = "col-md-6">
                                        <div className="ds-stat">
                                            <span className="ds-stat-name">Lotes producidos</span>
                                            <h3 className="ds-stat-number">67.856<span className="ds-stat-percent"><i className="fas fa-caret-up"></i>48%</span></h3>
                                            <div className="progress" style={{height: '3px'}}>
                                                <div className="progress-bar bg-success" role="progressbar" style={{width: '48%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className = "col-md-6">
                                        <div className="ds-stat">
                                            <span className="ds-stat-name">Lotes activos</span>
                                            <h3 className="ds-stat-number">20.347<span className="ds-stat-percent"><i className="fas fa-caret-up"></i>24%</span></h3>
                                            <div className="progress" style={{height: '3px'}}>
                                                <div className="progress-bar bg-info" role="progressbar" style={{width: '24%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
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

export default Comercial