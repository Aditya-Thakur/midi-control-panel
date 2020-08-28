import React, { Component } from 'react';
import AUX from '../../../../hoc/Aux_';
import ScreenListItem from './ScreenListItem/ScreenListItem';

class ReviewCard extends Component {


    render(){
        // console.log(this.props.advScreens)
        return <AUX>
            <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Card title <span className="badge badge-primary float-right">$50</span></h4>
                                <h6 className="card-subtitle font-14 text-muted">Total 3 screens</h6>
                            </div>
                            <img src="assets/images/small/img-4.jpg" alt="Card cap" className="img-fluid card-img-top"></img>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-7">
                                        <h6 className="blockquote-footer card-subtitle font-14 text-muted">Screen List</h6>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="card-subtitle float-right" data-toggle="collapse" data-target={"#"+this.props.advId+"collapse_screen"} aria-expanded="true" aria-controls={this.props.advId+"collapse_screen"}><i className="ti-angle-down"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse show" id={this.props.advId+"collapse_screen"}>
                                <ul className="list-group list-group-flush">
                                {this.props.advScreens.map(item => <ScreenListItem key={item.screenId} screenDetails={item} />)}
                                </ul>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-7">
                                        <h6 className="blockquote-footer card-subtitle font-14 text-muted">User Details</h6>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="card-subtitle float-right" data-toggle="collapse" data-target={"#"+this.props.advId+"collapse_user_data"} aria-expanded="false" aria-controls={this.props.advId+"collapse_user_data"}><i className="ti-angle-down"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse" id={this.props.advId+"collapse_user_data"}>
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
        </AUX>
    }

};
export default ReviewCard;
