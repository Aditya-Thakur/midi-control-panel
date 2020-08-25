import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Tinycharts from '../../Chartstypes/Tinycharts';
import { Link } from 'react-router-dom';

class ui_badge extends Component{
    render(){
        return(
            <AUX>
                <div className="row">
                            <div className="col-sm-12">
                                <div className="page-title-box">
                                <h4 className="page-title">Badge</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="javascript:void(0);">Lexa</Link></li>
                                        <li className="breadcrumb-item"><Link to="javascript:void(0);">UI Elements</Link></li>
                                        <li className="breadcrumb-item active">Badge</li>
                                    </ol>
            
                                    <Tinycharts />
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card m-b-20">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Example</h4>
                                        <p className="text-muted m-b-30 font-14">Badges scale to match the size of the
                                            immediate parent element by using relative font sizing and <code
                                                    className="highlighter-rouge">em</code> units.</p>
        
                                        <div className="">
                                            <h1>Example heading <span className="badge badge-light">New</span></h1>
                                            <h2>Example heading <span className="badge badge-light">New</span></h2>
                                            <h3>Example heading <span className="badge badge-light">New</span></h3>
                                            <h4>Example heading <span className="badge badge-light">New</span></h4>
                                            <h5>Example heading <span className="badge badge-light">New</span></h5>
                                            <h6>Example heading <span className="badge badge-light">New</span></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <div className="col-lg-6">
                                <div className="card m-b-20">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Variations</h4>
                                        <p className="text-muted m-b-30 font-14">Add any of the below mentioned modifier
                                            classes to change the appearance of a badge.</p>
        
                                        <div>
                                            <span className="badge badge-light">Light</span>
                                            <span className="badge badge-primary">Primary</span>
                                            <span className="badge badge-success">Success</span>
                                            <span className="badge badge-info">Info</span>
                                            <span className="badge badge-warning">Warning</span>
                                            <span className="badge badge-danger">Danger</span>
                                            <span className="badge badge-dark">Dark</span>
                                        </div>
        
                                        <p className="text-muted m-b-30 font-14 m-t-40">Use the <code
                                                className="highlighter-rouge">.badge-pill</code> modifier class to make
                                            badges more rounded (with a larger <code className="highlighter-rouge">border-radius</code>
                                            and additional horizontal <code className="highlighter-rouge">padding</code>).
                                            Useful if you miss the badges from v3.</p>
        
                                        <div>
                                            <span className="badge badge-pill badge-light">Light</span>
                                            <span className="badge badge-pill badge-primary">Primary</span>
                                            <span className="badge badge-pill badge-success">Success</span>
                                            <span className="badge badge-pill badge-info">Info</span>
                                            <span className="badge badge-pill badge-warning">Warning</span>
                                            <span className="badge badge-pill badge-danger">Danger</span>
                                            <span className="badge badge-pill badge-dark">Dark</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       
            </AUX>
        );
    }
}

export default ui_badge;