import React, { Component } from 'react';
import Tinycharts from '../../Chartstypes/Tinycharts';
import AUX from '../../../hoc/Aux_';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';

import firebase from '.../../../src/firebase';

class approved_advertisements extends Component {

    constructor(props) {
        super(props);
        this.usersDataRef = firebase.database().ref('UsersData');
        this.state = {
            approvedAdvList: [],

        }
    }

    componentDidMount() {
        this.usersDataRef.on('value', (snapshot) => {
            let rows = [];
            snapshot.forEach(userSnapshot => {
                let data = userSnapshot.val();
                if (data.userAdvertisementDetails != null) {
                    Object.values(data.userAdvertisementDetails.singleAdvertisementDetails).forEach(adv => {
                        // rows.push(
                        //     adv
                        // );
                        Object.values(adv.screens).forEach(screen => {
                            if (screen.screenApprovedStatus == 1) {
                                rows.push(screen)
                            }
                        })
                    })
                }
            });
            this.setState({
                approvedAdvList: rows
            });
        });
    }
    render() {
        console.log(this.state.approvedAdvList)
        return (
            <AUX>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-title-box">
                            <h4 className="page-title">Approved Advertisements</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="javascript:void(0);">Mirai Vizion</Link></li>
                                <li className="breadcrumb-item"><Link to="javascript:void(0);">Advertisements</Link></li>
                                <li className="breadcrumb-item active">Pending Advertisements</li>
                            </ol>
                            <Tinycharts />
                        </div>
                    </div>
                </div>
                <div class="row">

                    <div class="col-lg-4">
                        <div class="card m-b-20">
                            <div class="card-body">

                                <h4 class="mt-0 header-title">Screen Location Name   |   Screen No <span class="badge badge-danger">3</span></h4>
                                <p class="text-muted m-b-30">
                                    <ul class="mt-0 header-title">
                                        <li>Company Name <span class="badge badge-primary float-right">Amazon Corp</span></li>
                                    </ul>

                                </p>

                                <a class="image-popup-no-margins" href="assets/images/small/img-5.jpg">
                                    <img className="card-img-top img-fluid m-b-30" src="assets/images/small/img-5.jpg" alt="Card image cap" /></a>

                                <p>

                                    <button class="btn btn-outline-primary mo-mb-2 waves-effect waves-light " type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                        More Details
                                            </button>


                                </p>
                                <div class="collapse" id="collapseExample">
                                    <div class="card card-body">
                                        <ul class="mt-0 header-title">
                                            <li>City <span class="badge badge-danger float-right">Noida</span></li>
                                            <li>Start Date <span class="badge badge-success float-right">20-12-2020</span> End Date <span class="badge badge-info float-right">22-12-2020</span> </li>
                                            <li>Start Time <span class="badge badge-success float-right">5:00</span>  End Time <span class="badge badge-info float-right">7:00</span> </li>
                                            <li >Total Amount Paid <span class="badge badge-primary float-right">$50</span></li>
                                            <li>Age Range: <span class="badge badge-warning float-right">18-24</span></li>
                                            <li>Time-wise Distribution <span class="badge badge-danger float-right">9AM-11AM</span></li>
                                            <li>Gender Ratio <span class="badge badge-dark float-right"> 57%</span> </li>
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
export default approved_advertisements;