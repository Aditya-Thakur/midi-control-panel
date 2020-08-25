import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Tinycharts from '../../Chartstypes/Tinycharts';
import BarChart  from '../../Chartstypes/Chartist/BarChart';
import PieChart  from '../../Chartstypes/Chartist/PieChart';
import DonutChart  from '../../Chartstypes/Chartist/DonutChart';
import ScatterChart  from '../../Chartstypes/Chartist/ScatterChart';
import LineAreaChart  from '../../Chartstypes/Chartist/LineAreaChart';
import LineChart  from '../../Chartstypes/Morris/LineCharts';


class CanvasCharts extends Component{
    render(){
     
        return(
            
            <AUX>
            <div>

            <div className="row">
                            <div className="col-sm-12">
                                <div className="page-title-box">
                                    <h4 className="page-title">Canvas Chart</h4>
                                    <ol className="breadcrumb">
                                    <li className="breadcrumb-item">Lexa</li>
                                        <li className="breadcrumb-item">Charts</li>
                                        <li className="breadcrumb-item">Canvas Chart</li>
                                    </ol>
                                    <Tinycharts />
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
                                       <p className="text-muted ">Activated</p>
                                   </li>
                                   <li className="list-inline-item">
                                       <h5 className="mb-0">5181</h5>
                                       <p className="text-muted ">Pending</p>
                                   </li>
                                   <li className="list-inline-item">
                                       <h5 className="mb-0">101025</h5>
                                       <p className="text-muted ">Deactivated</p>
                                   </li>
                               </ul>

                               <DonutChart />

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
                                       <p className="text-muted ">Activated</p>
                                   </li>
                                   <li className="list-inline-item">
                                       <h5 className="mb-0">48652</h5>
                                       <p className="text-muted ">Pending</p>
                                   </li>
                                   <li className="list-inline-item">
                                       <h5 className="mb-0">85412</h5>
                                       <p className="text-muted ">Deactivated</p>
                                   </li>
                               </ul>

                               <PieChart />

                           </div>
                       </div>
                   </div> 
               </div> 

               <div className="row">
                   <div className="col-lg-6">
                       <div className="card m-b-20">
                           <div className="card-body">

                               <h4 className="mt-0 header-title">Stacked bar chart</h4>

                               <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                   <li className="list-inline-item">
                                       <h5 className="mb-0">45410</h5>
                                       <p className="text-muted ">Activated</p>
                                   </li>
                                   <li className="list-inline-item">
                                       <h5 className="mb-0">4442</h5>
                                       <p className="text-muted ">Pending</p>
                                   </li>
                                   <li className="list-inline-item">
                                       <h5 className="mb-0">3201</h5>
                                       <p className="text-muted ">Deactivated</p>
                                   </li>
                               </ul>

                               <BarChart />

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
                                       <p className="text-muted ">Activated</p>
                                   </li>
                                   <li className="list-inline-item">
                                       <h5 className="mb-0">75221</h5>
                                       <p className="text-muted ">Pending</p>
                                   </li>
                                   <li className="list-inline-item">
                                       <h5 className="mb-0">65212</h5>
                                       <p className="text-muted ">Deactivated</p>
                                   </li>
                               </ul>

                               <LineChart />

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
                                       <p className="text-muted ">Activated</p>
                                   </li>
                                   <li className="list-inline-item">
                                       <h5 className="mb-0">5542</h5>
                                       <p className="text-muted ">Pending</p>
                                   </li>
                                   <li className="list-inline-item">
                                       <h5 className="mb-0">12422</h5>
                                       <p className="text-muted ">Deactivated</p>
                                   </li>
                               </ul>

                               <ScatterChart />

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
                                       <p className="text-muted ">Activated</p>
                                   </li>
                                   <li className="list-inline-item">
                                       <h5 className="mb-0">64521</h5>
                                       <p className="text-muted ">Pending</p>
                                   </li>
                                   <li className="list-inline-item">
                                       <h5 className="mb-0">94521</h5>
                                       <p className="text-muted ">Deactivated</p>
                                   </li>
                               </ul>

                               <LineAreaChart />

                           </div>
                       </div>
                   </div> 
               </div>

           </div>
           </AUX>
                

        );
    }
}

export default CanvasCharts;   