import React , {Component } from 'react';
import Tinycharts from '../../Chartstypes/Tinycharts';
import Linecharts from '../../Chartstypes/Linecharts';
import BarCharts from '../../Chartstypes/Barcharts';
import Areacharts from '../../Chartstypes/Areacharts';
import AreaCharts1 from '../../Chartstypes/AreaCharts1';
import Simpleline from '../../Chartstypes/Simpleline';

import Donut from '../../Chartstypes/Donut';


class MorrisChart extends Component{
    state={
        height:400,
        width:400
    }
    render(){
        //const {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;

        return(
            
            <div>

            <div className="row">
                <div className="col-sm-12">
                    <div className="page-title-box">
                        <h4 className="page-title">Morris Chart</h4>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">Lexa</li>
                            <li className="breadcrumb-item">Charts</li>
                            <li className="breadcrumb-item active">Morris Chart</li>
                        </ol>
                        <Tinycharts />
                    </div>
                </div>
            </div>
            

            <div className="row">
                <div className="col-lg-6">
                    <div className="card m-b-30">
                        <div className="card-body">

                            <h4 className="mt-0 header-title">Line Chart</h4>

                            <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                <li className="list-inline-item">
                                    <h5 className="mb-0">25610</h5>
                                    <p className="text-muted">Activated</p>
                                </li>
                                <li className="list-inline-item">
                                    <h5 className="mb-0">56210</h5>
                                    <p className="text-muted">Pending</p>
                                </li>
                                <li className="list-inline-item">
                                    <h5 className="mb-0">12485</h5>
                                    <p className="text-muted">Deactivated</p>
                                </li>
                            </ul>

                            <div id="morris-line-example" className=""></div>
                            <Linecharts />
                        </div>
                    </div>
                </div> 

                <div className="col-lg-6">
                    <div className="card m-b-30">
                        <div className="card-body">

                            <h4 className="mt-0 header-title">Bar Chart</h4>

                            <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                <li className="list-inline-item">
                                    <h5 className="mb-0">6,95,412</h5>
                                    <p className="text-muted">Activated</p>
                                </li>
                                <li className="list-inline-item">
                                    <h5 className="mb-0">1,63,542</h5>
                                    <p className="text-muted">Pending</p>
                                </li>
                            </ul>

                            <div id="morris-bar-example" className=""></div>
                             
                            <BarCharts /> 
                        </div>
                    </div>
                </div> 
            </div> 


            <div className="row">
                <div className="col-lg-6">
                    <div className="card m-b-30">
                        <div className="card-body">

                            <h4 className="mt-0 header-title">Area Chart</h4>

                            <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                <li className="list-inline-item">
                                    <h5 className="mb-0">86541</h5>
                                    <p className="text-muted">Activated</p>
                                </li>
                                <li className="list-inline-item">
                                    <h5 className="mb-0">2541</h5>
                                    <p className="text-muted">Pending</p>
                                </li>
                                <li className="list-inline-item">
                                    <h5 className="mb-0">102030</h5>
                                    <p className="text-muted">Deactivated</p>
                                </li>
                            </ul>

                            <div id="morris-area-example" className=""></div>
                            <AreaCharts1 />

            
                        </div>
                    </div> 
                </div> 

                <div className="col-lg-6">
                    <div className="card m-b-30">
                        <div className="card-body">
                            <h4 className="mt-0 header-title">Donut Chart</h4>
                            <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                <li className="list-inline-item">
                                    <h5 className="mb-0">3201</h5>
                                    <p className="text-muted">Activated</p>
                                </li>
                                <li className="list-inline-item">
                                    <h5 className="mb-0">85120</h5>
                                    <p className="text-muted">Pending</p>
                                </li>
                                <li className="list-inline-item">
                                    <h5 className="mb-0">65214</h5>
                                    <p className="text-muted">Deactivated</p>
                                </li>
                            </ul>
                            <div id="morris-donut-example" className=""></div>
                                <Donut />
                        </div>
                    </div>
                </div> 
            </div> 


            <div className="row">
                <div className="col-12">
                    <div className="card m-b-30">
                        <div className="card-body">
                            <h4 className="mt-0 header-title">Area Chart</h4>
                            <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                <li className="list-inline-item">
                                    <h5 className="mb-0">86541</h5>
                                    <p className="text-muted">Activated</p>
                                </li>
                                <li className="list-inline-item">
                                    <h5 className="mb-0">2541</h5>
                                    <p className="text-muted">Pending</p>
                                </li>
                                <li className="list-inline-item">
                                    <h5 className="mb-0">102030</h5>
                                    <p className="text-muted">Deactivated</p>
                                </li>
                            </ul>

                            <div id="morris-bar-stacked" className=""></div>
                            <BarCharts side="single" />           
                        </div>
                    </div>
                </div> 

            </div> 

        </div> 

                

        );
    }
}

export default MorrisChart;   