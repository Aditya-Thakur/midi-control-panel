import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Tinycharts from '../../Chartstypes/Tinycharts';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import { Link } from 'react-router-dom';

class ui_rangeslider extends Component{

    constructor(props, context) {
        super(props, context)
        this.state = { default: 15,default1: 35,default4: 35,min:5,max:100,step:10  }
      }
      
      defaultrange = (value) => { this.setState({  default: value })  }
      minmaxrange = (value) => { this.setState({  default1: value })  }
      steprange = (value) => { this.setState({  default4: value })  }

    render(){
        return(
            <AUX>
                
                <div className="row">
                            <div className="col-sm-12">
                                <div className="page-title-box">
                                <h4 className="page-title">Range Slider</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="javascript:void(0);">Lexa</Link></li>
                                        <li className="breadcrumb-item"><Link to="javascript:void(0);">UI Elements</Link></li>
                                        <li className="breadcrumb-item active">Range Slider</li>
                                    </ol>
                                    <Tinycharts />
                                </div>
                            </div>
                        </div>
                       
                        <div className="row">
                            <div className="col-12">
                                <div className="card m-b-20">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">ION Range slider</h4>
                                        <p className="text-muted m-b-30 font-14">Cool, comfortable, responsive and easily customizable range slider</p>
        
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="p-3">
                                                    <h5 className="font-16 m-b-20 mt-0">Default</h5>

                                                    <Slider  value={this.state.default}  orientation="horizontal"   onChange={this.defaultrange}  />

                                                </div>
                                            </div>
        
                                            <div className="col-md-6">
                                                <div className="p-3">
                                                    <h5 className="font-16 m-b-20 mt-0">Min-Max</h5>
                                                    <input type="text" id="range_02"/>
                                                

                                                </div>
                                            </div>
                                        </div>
        
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="p-3">
                                                    <h5 className="font-16 m-b-20 mt-0">Prefix</h5>
                                                    <input type="text" id="range_03"/>
                                                </div>
                                            </div>
        
                                            <div className="col-md-6">
                                                <div className="p-3">
                                                    <h5 className="font-16 m-b-20 mt-0">Range</h5>
                                                    <input type="text" id="range_04"/>
                                                </div>
                                            </div>
                                        </div>
        
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="p-3">
                                                    <h5 className="font-16 m-b-20 mt-0">Step</h5>
                                                    <input type="text" id="range_05"/>
                                                </div>
                                            </div>
        
                                            <div className="col-md-6">
                                                <div className="p-3">
                                                    <h5 className="font-16 m-b-20 mt-0">Custom Values</h5>
                                                    <input type="text" id="range_06"/>
                                                </div>
                                            </div>
                                        </div>
        
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="p-3">
                                                    <h5 className="font-16 m-b-20 mt-0">Prettify Numbers</h5>
                                                    <input type="text" id="range_07"/>
                                                </div>
                                            </div>
        
                                            <div className="col-md-6">
                                                <div className="p-3">
                                                    <h5 className="font-16 m-b-20 mt-0">Disabled</h5>
                                                    <input type="text" id="range_08"/>
                                                </div>
                                            </div>
                                        </div>
        
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="p-3">
                                                    <h5 className="font-16 m-b-20 mt-0">Extra Example</h5>
                                                    <input type="text" id="range_09"/>
                                                </div>
                                            </div>
        
                                            <div className="col-md-6">
                                                <div className="p-3">
                                                    <h5 className="font-16 m-b-20 mt-0">Use decorate_both option</h5>
                                                    <input type="text" id="range_10"/>
                                                </div>
                                            </div>
                                        </div>
        
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="p-3">
                                                    <h5 className="font-16 m-b-20 mt-0">Postfixes</h5>
                                                    <input type="text" id="range_11"/>
                                                </div>
                                            </div>
        
                                            <div className="col-md-6">
                                                <div className="p-3">
                                                    <h5 className="font-16 m-b-20 mt-0">Hide</h5>
                                                    <input type="text" id="range_12"/>
                                                </div>
                                            </div>
                                        </div>
        
                                    </div>
                                </div>
                            </div>
                        </div>
            </AUX>
        );
    }
}

export default ui_rangeslider;