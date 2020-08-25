import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Tinycharts from '../../Chartstypes/Tinycharts';
import { Link } from 'react-router-dom';


class FormElements extends Component{
    render(){
        return(
            <AUX>

                <div className="row">
                            <div className="col-sm-12">
                                <div className="page-title-box">
                                <h4 className="page-title">Form Elements</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="javascript:void(0);">Lexa</Link></li>
                                        <li className="breadcrumb-item"><Link to="javascript:void(0);">Forms</Link></li>
                                        <li className="breadcrumb-item active">Form Elements</li>
                                    </ol>
                                    <Tinycharts />
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-12">
                                <div className="card m-b-20">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Textual inputs</h4>

                                        <p className="text-muted m-b-30 font-14">Here are examples of <code
                                                className="highlighter-rouge">.form-control</code> applied to each
                                            textual HTML5 <code className="highlighter-rouge">&lt;input&gt;</code> <code
                                                    className="highlighter-rouge">type</code>.</p>
        
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Text</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" type="text" value="Artisanal kale" id="example-text-input"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-search-input" className="col-sm-2 col-form-label">Search</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" type="search" value="How do I shoot web" id="example-search-input"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-email-input" className="col-sm-2 col-form-label">Email</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" type="email" value="bootstrap@example.com" id="example-email-input"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-url-input" className="col-sm-2 col-form-label">URL</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" type="url" value="https://getbootstrap.com" id="example-url-input"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-tel-input" className="col-sm-2 col-form-label">Telephone</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" type="tel" value="1-(555)-555-5555" id="example-tel-input"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-password-input" className="col-sm-2 col-form-label">Password</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" type="password" value="hunter2" id="example-password-input"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-number-input" className="col-sm-2 col-form-label">Number</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" type="number" value="42" id="example-number-input"/>
                                            </div>
                                        </div>
                                      
                                        <div className="form-group row">
                                            <label for="example-color-input" className="col-sm-2 col-form-label">Color</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" type="color" value="#67a8e4" id="example-color-input"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Select</label>
                                            <div className="col-sm-10">
                                                <select className="form-control">
                                                    <option>Select</option>
                                                    <option>Large select</option>
                                                    <option>Small select</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Custom Select</label>
                                            <div className="col-sm-10">
                                                <select className="custom-select">
                                                    <option selected>Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input-lg" className="col-sm-2 col-form-label">Large</label>
                                            <div className="col-sm-10">
                                                <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" id="example-text-input-lg"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input-sm" className="col-sm-2 col-form-label">Small</label>
                                            <div className="col-sm-10">
                                                <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" id="example-text-input-sm"/>
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

export default FormElements;