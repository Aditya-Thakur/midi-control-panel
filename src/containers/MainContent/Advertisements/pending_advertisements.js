import React, { Component } from 'react';
import Tinycharts from '../../Chartstypes/Tinycharts';
import AUX from '../../../hoc/Aux_';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';

import firebase from '.../../../src/firebase';

class pending_advertisements extends Component {
    render() {
        return (
            <AUX>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-title-box">
                            <h4 className="page-title">Pending Advertisements</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="javascript:void(0);">Mirai Vizion</Link></li>
                                <li className="breadcrumb-item"><Link to="javascript:void(0);">Advertisements</Link></li>
                                <li className="breadcrumb-item active">Pending Advertisements</li>
                            </ol>
                            <Tinycharts />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="card m-b-20">
                            <div className="card-body">
                                <h4 className="mt-0 header-title">Advertisement Name</h4>
                                <p className="text-muted m-b-30">
                                    <ul className="mt-0 header-title">
                                        <li>Screen No <span className="badge badge-danger float-right">3</span></li>
                                        <li >Total Amount Paid <span className="badge badge-primary float-right">$50</span></li>
                                        <li>Company Name <span className="badge badge-primary float-right">Amazon Corp</span></li>
                                    </ul>

                                </p>

                                <a className="image-popup-no-margins" href="assets/images/small/img-5.jpg">
                                    <img className="card-img-top img-fluid m-b-30" src="assets/images/small/img-5.jpg" alt="Card image cap" /></a>

                                <p>

                                    <button className="btn btn-outline-primary mo-mb-2 waves-effect waves-light" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                        Show More
                                            </button>

                                    <button type="button" className="btn btn-outline-success waves-effect waves-light float-right">Approve</button>
                                    <button type="button" id="sa-warning" className="btn btn-outline-danger waves-effect waves-light float-right mr-1">Decline</button>
                                </p>
                                <div className="collapse" id="collapseExample">
                                    <div className="card card-body">
                                        <ul className="mt-0 header-title">
                                            <li>City <span className="badge badge-danger float-right">Noida</span></li>
                                            <li>Start Date <span className="badge badge-success float-right">20-12-2020</span> End Date <span className="badge badge-info float-right">22-12-2020</span>  </li>
                                            <li>Start Time <span className="badge badge-success float-right">5:00</span>  End Time <span className="badge badge-info float-right">7:00</span> </li>
                                            <li>Age Range: <span className="badge badge-warning float-right">18-24</span></li>
                                            <li>Time-wise Distribution <span className="badge badge-danger float-right">9AM-11AM</span></li>
                                            <li>Gender Ratio <span className="badge badge-dark float-right"> 57%</span> </li>
                                        </ul>
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
export default pending_advertisements;