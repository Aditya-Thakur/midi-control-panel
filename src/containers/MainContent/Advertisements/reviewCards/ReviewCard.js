import React, { Component } from 'react';
import AUX from '../../../../hoc/Aux_';
import ScreenListItem from './ScreenListItem/ScreenListItem';

class ReviewCard extends Component {

    state = {loaded: false};
  
    showImage = () => {
        this.setState({loaded: true});
    }


    getDateFromTimestamp(timestamp,format){
        if(format=="T"){
            return new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(timestamp);
        }
        if(format=="D"){
            return new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(timestamp);
        }
        else return "Bad Timestamp Found!"
        
    }

    render(){
        console.log(this.props.advData)
        return <AUX>
            <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">#{this.props.advData.advId} <span className="badge badge-primary float-right">Rs.{this.props.advData.advCost}</span></h4>
                                <h6 className="card-subtitle font-14 text-muted">From <cite title="Source Title">{this.props.advData.advBrandName}</cite></h6>
                            </div>
                            <img src="assets/images/small/img-4.jpg" alt="Card cap" className="img-fluid card-img-top" style={ this.state.loaded ? {display: "none"} : {}}></img>
                            <img src={this.props.advData.advBannerUrl} alt="Card cap" className="img-fluid card-img-top" onLoad={this.showImage} style={ this.state.loaded ? {} : {display: "none"}}></img>
                            <div className="card-body" data-toggle="collapse" data-target={"#"+this.props.advId+"collapse_screen"} aria-expanded="true" aria-controls={this.props.advId+"collapse_screen"} >
                                <div className="row">
                                    <div className="col-md-7">
                                        <h6 className="blockquote-footer card-subtitle font-14 text-muted">Screen List</h6>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="card-subtitle float-right"><i className="ti-angle-down"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse show" id={this.props.advId+"collapse_screen"}>
                                <ul className="list-group list-group-flush">
                                {this.props.advScreens.map(item => <ScreenListItem key={item.screenId} screenDetails={item} />)}
                                </ul>
                            </div>
                            <div className="card-body" data-toggle="collapse" data-target={"#"+this.props.advId+"collapse_user_data"} aria-expanded="false" aria-controls={this.props.advId+"collapse_user_data"}>
                                <div className="row">
                                    <div className="col-md-7">
                                        <h6 className="blockquote-footer card-subtitle font-14 text-muted">User Details</h6>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="card-subtitle float-right" ><i className="ti-angle-down"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse" id={this.props.advId+"collapse_user_data"}>
                                <div className="card card-body">
                                    <ul className="mt-0 header-title">
                                        <li>City <span className="badge badge-danger float-right">{this.props.advData.city}</span></li>
                                        <li>Start Date <span className="badge badge-success float-right">{this.getDateFromTimestamp(this.props.advData.startFrom,"D")}</span> End Date <span className="badge badge-info float-right">{this.getDateFromTimestamp(this.props.advData.endOn,"D")}</span>  </li>
                                        <li>Start Time <span className="badge badge-success float-right">{this.getDateFromTimestamp(this.props.advData.startFrom,"T")}</span>  End Time <span className="badge badge-info float-right">{this.getDateFromTimestamp(this.props.advData.endOn,"T")}</span> </li>
                                        <li>Age Range: <span className="badge badge-warning float-right">{this.props.advData.advAgePref}</span></li>
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
