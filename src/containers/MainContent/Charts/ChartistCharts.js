import React , {Component } from 'react';
import Tinycharts from '../../Chartstypes/Tinycharts';
import Overlapbar from '../../Chartstypes/Overlapbar';
import Stackedbar from '../../Chartstypes/Stackedbar';
import DynamicDoghunt from '../../Chartstypes/DynamicDoghunt';
import SimplePie from '../../Chartstypes/SimplePiechart';
import Linecharts from '../../Chartstypes/Linecharts';
import {ScatterplotChart,AreaChart} from 'react-easy-chart';


class ChartistCharts extends Component{
    render(){
        //const {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;
        const data = [
            { type: 'One', x: 1, y: 5 },
            {  type: 'Two', x: 3, y: 1 },
            {  type: 'Three',x: 0, y: 6 },
            {  type: 'Four', x: 5, y: 2 },
            {  type: 'Five', x: 4, y: 4},
            { type: 'Six', x: 5,  y: 9  },
            { type: 'Seven', x: 9,y: 1 },
            { type: 'Eight', x: 5,  y: 6 },
            { type: 'Nine', x: 3, y: 9 },
            { type: 'Ten', x: 7, y: 9 },
            { type: 'Eleven', x: 10, y: 3 },
            { type: 'Twelve', x: 11, y: 3 },
            { type: 'Thirteen', x: 12, y: 6 },
            { type: 'Fourteen', x: 13, y: 8 },
            { type: 'Fifteen', x: 14, y: 2 },
            { type: 'Sixteen', x: 15, y: 6 },
            { type: 'Seventeen', x:16, y: 9 },
          ];

        return(
            
            <div>

                        <div className="row">
                            <div className="col-sm-12">
                                <div className="page-title-box">
                                    <h4 className="page-title">Chartist Chart</h4>
                                    <ol className="breadcrumb">
                                    <li className="breadcrumb-item">Lexa</li>
                                        <li className="breadcrumb-item">Charts</li>
                                        <li className="breadcrumb-item">Chartist Chart</li>
                                    </ol>
                                    <Tinycharts />
                                </div>
                            </div>
                        </div>
                       

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card m-b-20">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Overlapping bars on mobile</h4>
        
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
        
                                        <div id="overlapping-bars" className="1ct-chart ct-golden-section"></div>
                                                <Overlapbar />
                                        </div>
                                </div>
                            </div>
        
                            <div className="col-lg-6">
                                <div className="card m-b-20">
                                    <div className="card-body">
                                        <h4 className="mt-0 header-title">Stacked bar chart</h4>
                                        <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">5241</h5>
                                                <p className="text-muted">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">65411</h5>
                                                <p className="text-muted">Pending</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">51654</h5>
                                                <p className="text-muted">Deactivated</p>
                                            </li>
                                        </ul>
        
                                        <div id="stacked-bar-chart" className="1ct-chart ct-golden-section"></div>
                                            <Stackedbar />
                                        </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card m-b-20">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Animating a Donut with Svg.animate</h4>
        
                                        <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">748949</h5>
                                                <p className="text-muted">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">5181</h5>
                                                <p className="text-muted">Pending</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">101025</h5>
                                                <p className="text-muted">Deactivated</p>
                                            </li>
                                        </ul>
        
                                        <div id="animating-donut" className="1ct-chart ct-golden-section"></div>
                                             <DynamicDoghunt />
                                        </div>
                                </div>
                            </div>
        
                            <div className="col-lg-6">
                                <div className="card m-b-20">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Simple pie chart</h4>
        
                                        <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">48484</h5>
                                                <p className="text-muted">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">48652</h5>
                                                <p className="text-muted">Pending</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">85412</h5>
                                                <p className="text-muted">Deactivated</p>
                                            </li>
                                        </ul>
        
                                        <div id="simple-pie" className="1ct-chart ct-golden-section simple-pie-chart-chartist"></div>
                                              <SimplePie />
                                        </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card m-b-20">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Advanced Smil Animations</h4>
        
                                        <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">45410</h5>
                                                <p className="text-muted">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">4442</h5>
                                                <p className="text-muted">Pending</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">3201</h5>
                                                <p className="text-muted">Deactivated</p>
                                            </li>
                                        </ul>
        
                                        <div id="smil-animations" className="1ct-chart ct-golden-section"></div>
                                             <Linecharts />
                                        </div>
                                </div>
                            </div>
        
                            <div className="col-lg-6">
                                <div className="card m-b-20">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Simple line chart</h4>
        
                                        <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">44242</h5>
                                                <p className="text-muted">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">75221</h5>
                                                <p className="text-muted">Pending</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">65212</h5>
                                                <p className="text-muted">Deactivated</p>
                                            </li>
                                        </ul>
        
                                        <div id="simple-line-chart" className="1ct-chart ct-golden-section"></div>
                                             <Linecharts />
                                        </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card m-b-20">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Line Scatter Diagram</h4>
        
                                        <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">5677</h5>
                                                <p className="text-muted">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">5542</h5>
                                                <p className="text-muted">Pending</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">12422</h5>
                                                <p className="text-muted">Deactivated</p>
                                            </li>
                                        </ul>
        
                                        <div id="scatter-diagram" className="ct-chart ct-golden-section">
                                        <ScatterplotChart  data={data}  width={600} height={270}/>
                                        
                                        </div>
        
                                    </div>
                                </div>
                            </div>
        
                            <div className="col-lg-6">
                                <div className="card m-b-20">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Line chart with area</h4>
        
                                        <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">4234</h5>
                                                <p className="text-muted">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">64521</h5>
                                                <p className="text-muted">Pending</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">94521</h5>
                                                <p className="text-muted">Deactivated</p>
                                            </li>
                                        </ul>
        
                                        <div id="chart-with-area" className="ct-chart ct-golden-section">
                                        <AreaChart
                                        xType={'text'}
                                        axes
                                        width={700}
                                        height={270}
                                        interpolate={'cardinal'}
                                        data={[
                                        [
                                            { x: 'Mon', y: 35 },
                                            { x: 'Tue', y: 25 },
                                            { x: 'Wed', y: 33 },
                                            { x: 'Thu', y: 45 },
                                            { x: 'Fri', y: 45 },
                                            { x: 'Sat', y: 25 },
                                            { x: 'Sun', y: 45 },

                                        ]
                                        ]}
                                    />
                                        </div>
        
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                

        );
    }
}

export default ChartistCharts;   