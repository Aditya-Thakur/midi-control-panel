import React , { Component } from 'react';
import Tinycharts from '../../Chartstypes/Tinycharts';

import Vector from "../../MapsTypes/VectorMaps/vectormap";
class Vectormap extends Component{

    render(){

        const style={
            color:'red'
        };
        return(
                    <div>

                        <div className="row">
                            <div className="col-sm-12">
                                <div className="page-title-box">
                                    <h4 className="page-title">Vector Map</h4>
                                    <ol className="breadcrumb">
                                    <li className="breadcrumb-item">Lexa</li>
                                    <li className="breadcrumb-item">Maps</li>
                                        <li className="breadcrumb-item active">Vector Map</li>
                                    </ol>
            
                                    <Tinycharts />
                                </div>
                            </div>
                        </div>
                        

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card m-b-20">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Markers</h4>
                                        <p className="text-muted m-b-30">Example of Vector maps.</p>
        
                                        <div id="gmaps-markers" className="gmaps">
                                        <Vector value="world_mill" />
                                        </div>
                                    </div>
                                </div>
                            </div> 
        
                            <div className="col-lg-6">
                                <div className="card m-b-20">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Overlays</h4>
                                        <p className="text-muted m-b-30">Example of Vector maps.</p>
        
                                        <div id="gmaps-overlay" className="gmaps">
                                        <Vector value="us_aea" />
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div> 
        
        
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card m-b-20">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Street View Panoramas</h4>
                                        <p className="text-muted m-b-30">Example of Vector maps.</p>
        
                                        <div id="panorama" className="gmaps-panaroma" style={style}>
                                        <Vector value="ch_mill" />
                                        </div>
                                    </div>
                                </div>
                            </div> 
        
                            <div className="col-lg-6">
                                <div className="card m-b-20">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Map Types</h4>
                                        <p className="text-muted m-b-30">Example of Vector maps.</p>
        
                                        <div id="gmaps-types" className="gmaps">
                                        <Vector value="continents_mill" />
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div> 

                    </div> 

        );
    }

}

export default Vectormap;