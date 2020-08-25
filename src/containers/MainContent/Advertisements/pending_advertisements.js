import React , {Component } from 'react';
import Tinycharts from '../../Chartstypes/Tinycharts';
import AUX from '../../../hoc/Aux_';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';

import firebase from '.../../../src/firebase';

class pending_advertisements extends Component{
  render(){
        return(
            <AUX>
                <div className="row">
                            <div className="col-sm-12">
                                <div className="page-title-box">
                                <h4 className="page-title">Pending Adv Requests</h4>
                                    
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="javascript:void(0);">Mirai Vizon</a></li>
                                        <li class="breadcrumb-item active">Pending Adv</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row">
                         
                            <div class="col-lg-5">
                                <div class="card m-b-20">
                                    <div class="card-body">
        
                                        <h4 class="mt-0 header-title">Advertisement Name</h4>
                                        <p class="text-muted m-b-30">
                                            <ul class="mt-0 header-title">
                                                <li>Screen No <span class="badge badge-danger float-right">3</span></li>
                                                <li >Total Amount Paid <span class="badge badge-primary float-right">$50</span></li>
                                                <li>Company Name <span class="badge badge-primary float-right">Amazon Corp</span></li>
                                        </ul>
                                                  
                                        </p>

                                        <a class="image-popup-no-margins" href="assets/images/small/img-5.jpg">
                                            <img className="card-img-top img-fluid m-b-30" src="assets/images/small/img-5.jpg" alt="Card image cap"/></a>
        
                                        <p>
                                           
                                            <button class="btn btn-outline-primary mo-mb-2 waves-effect waves-light" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                Show More
                                            </button>
                                            
                                            <button type="button" class="btn btn-outline-success waves-effect waves-light float-right">Approve</button>
                                            <button type="button" id="sa-warning" class="btn btn-outline-danger waves-effect waves-light float-right mr-1">Decline</button>
                                        </p>
                                        <div class="collapse" id="collapseExample">
                                            <div class="card card-body">
                                                <ul class="mt-0 header-title">
                                                    <li>City <span class="badge badge-danger float-right">Noida</span></li>
                                                    <li>Start Date <span class="badge badge-success float-right">20-12-2020</span> End Date <span class="badge badge-info float-right">22-12-2020</span>  </li>
                                                     <li>Start Time <span class="badge badge-success float-right">5:00</span>  End Time <span class="badge badge-info float-right">7:00</span> </li>
                                                    <li>Age Range: <span class="badge badge-warning float-right">18-24</span></li>
                                                    <li>Time-wise Distribution <span class="badge badge-danger float-right">9AM-11AM</span></li>
                                                    <li>Gender Ratio <span class="badge badge-dark float-right"> 57%</span> </li>
                                                </ul>
                                            </div>
                                        </div>
        
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="card m-b-20">
                                    <div class="card-body">
           
                                    
                                        <ul class="nav nav-tabs" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link active" data-toggle="tab" href="#home" role="tab">Home</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" data-toggle="tab" href="#profile" role="tab">Profile</a>
                                            </li>
                                           
                                        </ul>
        
                                        <div class="tab-content">
                                            <div class="tab-pane active p-3" id="home" role="tabpanel">
                                                <p class="mb-0">
                                                      <h4 class="mt-0 header-title">Advertisement Name</h4>
                                                <p class="text-muted m-b-30">
                                                        <ul class="mt-0 header-title"><li >Total Amount Paid: <span class="badge badge-primary">$50</span></li>
                                                        <li>Company Name: <span class="badge badge-primary">Amazon Corp</span></li></ul>
                                                  
                                                </p>
                                        <a class="image-popup-vertical-fit" href="assets/images/small/img-5.jpg" title="Caption. Can be aligned it to any side and contain any HTML.">
                                            <img className="card-img-top img-fluid m-b-30" src="assets/images/small/img-5.jpg" alt="Card image cap"/></a>
        
                                        <p>
                                            
                                            <button class="btn btn-outline-primary mo-mb-2 waves-effect waves-light" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                                                Show More
                                            </button>
                                            
                                            <button type="button" class="btn btn-outline-success waves-effect waves-light float-right">Approve</button>
                                            <button type="button" class="btn btn-outline-danger waves-effect waves-light float-right mr-1" id="ajax-alert" >Decline</button>
                                            
                                        </p>
                                        <div class="collapse" id="collapseExample2">
                                            <div class="card card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                            </div>
                                        </div>
                                                </p>
                                            </div>
                                            <div class="tab-pane p-3" id="profile" role="tabpanel">
                                                <p class="mb-0">
                                                    <ul class="mt-0 header-title">
                                                     <li>Range: <span class="badge badge-primary">$50</span></li>
                                                    <li>Screen No: <span class="badge badge-danger">3</span></li>
                                                    <li>City: <span class="badge badge-danger">Noida</span></li>
                                                    <li>Start Date: <span class="badge badge-success">20-12-2020</span> to End Date: <span class="badge badge-info">22-12-2020</span> </li>
                                                     <li>Start Time: <span class="badge badge-success">5:00</span> to End Time: <span class="badge badge-info">7:00</span> </li>
                                                    <li>Age Range: <span class="badge badge-warning">18-24</span></li>
                                                    <li>Time-wise Distribution: <span class="badge badge-danger">9AM-11AM</span></li>
                                                    <li>Gender Ratio: <span class="badge badge-dark"> 57%</span> Male/ Female Ratio</li>
                                                        <li></li>
                                                        <li></li>
                                                        <li></li>
                                                        <li></li>
                                                        <li></li>
                                                        <li></li>
                                                        <li></li>
                                                        <li></li>
                                                        <li></li>
                                                        <li></li>
                                                        <li></li>
                                                        </ul>
                                                </p>
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