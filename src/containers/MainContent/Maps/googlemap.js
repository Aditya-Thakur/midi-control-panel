import React , { Component } from 'react';
import GoogleMap from '../../MapsTypes/Googlemap/Mapcontainer';
import Tinycharts from '../../Chartstypes/Tinycharts';



class googlemap extends Component{

    render(){

        const style={
            color:'red'
        };
        return(
                    <div>

                        <div className="row">
                            <div className="col-sm-12">
                                <div className="page-title-box">
                                    <h4 className="page-title">Google Map</h4>
                                    <ol className="breadcrumb">
                                    <li className="breadcrumb-item">Lexa</li>
                                    <li className="breadcrumb-item">Maps</li>
                                        <li className="breadcrumb-item active">Google Map</li>
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
                                        <p className="text-muted m-b-30">Example of google maps.</p>
        
                                        <div id="gmaps-markers" className="gmaps">
                                        <GoogleMap />
                                        </div>
                                    </div>
                                </div>
                            </div> 
        
                            <div className="col-lg-6">
                                <div className="card m-b-20">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Overlays</h4>
                                        <p className="text-muted m-b-30">Example of google maps.</p>
        
                                        <div id="gmaps-overlay" className="gmaps">
                                            <GoogleMap />
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
                                        <p className="text-muted m-b-30">Example of google maps.</p>
        
                                        <div id="panorama" className="gmaps-panaroma" style={style}>
                                             <GoogleMap />
                                        </div>
                                    </div>
                                </div>
                            </div> 
        
                            <div className="col-lg-6">
                                <div className="card m-b-20">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Map Types</h4>
                                        <p className="text-muted m-b-30">Example of google maps.</p>
        
                                        <div id="gmaps-types" className="gmaps">
                                            <GoogleMap />
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div> 

                    </div> 

        );
    }

}

export default googlemap;