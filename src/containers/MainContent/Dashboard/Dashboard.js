import React, { Component } from 'react';
import Tinycharts from '../../../containers/Chartstypes/Tinycharts';
import Doughnut from '../../../containers/Chartstypes/Donut';
// import Linechart  from '../../../containers//Chartstypes/Linecharts';
import Simpleline from '../../../containers/Chartstypes/Simpleline';

import AreaDashboard from '../../../containers/Chartstypes/AreaDashboard';

import firebase from '../../../firebase/firebase';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'
//import Doughnut from '../../../containers/Chartstypes/Donut';
class Dashboard extends Component {
    state = {
        height: 300,
        width: 450,
        usersData: [],
        availableLocationsData: {},
        availableLocationsCount: 0,
        user_id: null,
        revenue: 0,
        rejectedAdv: 0,
        submittedAdv: 0,
        pendingAdv: 0,
        visible: false

    }

    componentWillReceiveProps(newProps) {
        console.log(newProps)
        this.setState({
            user_id: newProps.user_id
        })
    }
    componentDidMount() {
        console.log(this.props.user_id)
        const usersDataRef = firebase.database().ref('UsersData');
        usersDataRef.on('value', (snapshot) => {
            let newState = [];
            let transactionSum = 0
            let totalAdv = 0
            let pendingAdvCount = 0
            let rejectedAdvCount = 0
            snapshot.forEach(userSnapshot => {
                let data = userSnapshot.val();
                transactionSum += data.userWalletDetails.transactionsDetails ? this.getTotalInvestment(data.userWalletDetails.transactionsDetails) : 0
                rejectedAdvCount += data.userAdvertisementDetails ? this.countRejectedAds(data.userAdvertisementDetails.singleAdvertisementDetails) : 0
                pendingAdvCount += data.userAdvertisementDetails ? this.countPendingAds(data.userAdvertisementDetails.singleAdvertisementDetails) : 0
                totalAdv += data.userAdvertisementDetails ? this.countTotalAds(data.userAdvertisementDetails.singleAdvertisementDetails) : 0
                newState.push({
                    userData: data
                });
            });
            console.log(transactionSum)

            this.setState({
                usersData: newState,
                revenue: transactionSum,
                rejectedAdv: rejectedAdvCount,
                pendingAdv: pendingAdvCount,
                submittedAdv: totalAdv
            });
        });
        const availableLocationsDataRef = firebase.database().ref('AvailableLocations');
        availableLocationsDataRef.on('value', (snapshot) => {
            let newAvailableLocationState = [];
            snapshot.forEach(userSnapshot => {
                let data = userSnapshot.val();
                newAvailableLocationState.push({
                    availableLocation: data
                });
            });
            this.setState({
                availableLocationsData: newAvailableLocationState,
                availableLocationsCount: newAvailableLocationState.length,
                visible: true
            });
        })
    }

    countPendingAds(singleAdvertisementDetails) {
        let sum = 0
        singleAdvertisementDetails.forEach(advDetails => {
            advDetails.screens.forEach(screenDetails => {
                if (screenDetails.screenApprovedStatus === "") {
                    sum += 1
                }
            })

        })
        return sum;
    };
    countRejectedAds(singleAdvertisementDetails) {
        let sum = 0
        singleAdvertisementDetails.forEach(advDetails => {
            advDetails.screens.forEach(screenDetails => {
                if (screenDetails.screenApprovedStatus !== "" && screenDetails.screenApprovedStatus !== "1") {
                    sum += 1
                }
            })
        })
        return sum;
    };
    countTotalAds(singleAdvertisementDetails) {
        let sum = 0
        singleAdvertisementDetails.forEach(advDetails => {
            advDetails.screens.forEach(screenDetails => {
                sum += 1
            })
        })
        return sum;
    };
    getTotalInvestment(transactionsDetails) {
        let sum = 0
        transactionsDetails.forEach(transaction => {
            if (transaction.transactionStatus === "2") {
                sum += -(Number(transaction.transactionAmount))
            }
        });
        return sum
    }



    render() {
        //const {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;
        // return (

        // );
        const mystyle = {
            
            width: "100px",
            height: "100px",
            position: "absolute",
            top:"0",
            bottom: "0",
            left: "15%",
            right: "0",
            margin: "auto"
          };
        if (this.state.visible === true) {
            return (
                <div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="page-title-box">
                                <h4 className="page-title">Dashboard</h4>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item active">
                                        Welcome to Mirai Vizion Dashboard
                                        </li>
                                </ol>
                                {/* <Tinycharts /> */}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-4 col-md-6">
                            <div className="card mini-stat bg-primary">
                                <div className="card-body mini-stat-img">
                                    <div className="mini-stat-icon">
                                        <i className="mdi mdi-account-multiple float-right"></i>
                                    </div>
                                    <div className="text-white">
                                        <h6 className="text-uppercase mb-3">NO. OF USER</h6>
                                        <h4 className="mb-4">{this.state.usersData.length}</h4>
                                        {/* <span className="badge badge-info"> +11% </span> <span className="ml-2">From previous period</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="card mini-stat bg-primary">
                                <div className="card-body mini-stat-img">
                                    <div className="mini-stat-icon">
                                        <i className="mdi mdi-google-maps float-right"></i>
                                    </div>
                                    <div className="text-white">
                                        <h6 className="text-uppercase mb-3">ACTIVE LOCATIONS</h6>
                                        <h4 className="mb-4">{this.state.availableLocationsCount}</h4>
                                        {/* <span className="badge badge-danger"> -29% </span> <span className="ml-2">From previous period</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="card mini-stat bg-primary">
                                <div className="card-body mini-stat-img">
                                    <div className="mini-stat-icon">
                                        <i className="ion-arrow-graph-up-right float-right"></i>
                                    </div>
                                    <div className="text-white">
                                        <h6 className="text-uppercase mb-3">Revenue</h6>
                                        <h4 className="mb-4"> ₹{this.state.revenue}</h4>
                                        {/* <span className="badge badge-info"> +89% </span> <span className="ml-2">From previous period</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="card mini-stat bg-primary">
                                <div className="card-body mini-stat-img">
                                    <div className="mini-stat-icon">
                                        <i className="ion-ios7-monitor float-right"></i>
                                    </div>
                                    <div className="text-white">
                                        <h6 className="text-uppercase mb-3">Total Screen Adv Submitted</h6>
                                        <h4 className="mb-4">{this.state.submittedAdv}</h4>
                                        {/* <span className="badge badge-warning"> 0% </span> <span className="ml-2">From previous period</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="card mini-stat bg-primary">
                                <div className="card-body mini-stat-img">
                                    <div className="mini-stat-icon">
                                        <i className="ion-ios7-monitor-outline float-right"></i>
                                    </div>
                                    <div className="text-white">
                                        <h6 className="text-uppercase mb-3">Total Screen Adv Rejected</h6>
                                        <h4 className="mb-4">{this.state.rejectedAdv}</h4>
                                        {/* <span className="badge badge-info"> +89% </span> <span className="ml-2">From previous period</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="card mini-stat bg-primary">
                                <div className="card-body mini-stat-img">
                                    <div className="mini-stat-icon">
                                        <i className="mdi mdi-human-greeting float-right"></i>
                                    </div>
                                    <div className="text-white">
                                        <h6 className="text-uppercase mb-3">Total Screen Adv Pending For Review</h6>
                                        <h4 className="mb-4">{this.state.pendingAdv}</h4>
                                        {/* <span className="badge badge-info"> +89% </span> <span className="ml-2">From previous period</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    {/*             
                            <div className="row">
            
                                <div className="col-xl-3">
                                    <div className="card m-b-20">
                                        <div className="card-body">
                                            <h4 className="mt-0 header-title">Location Wise Earnings</h4>
            
                                            <div className="row text-center m-t-20">
                                                <div className="col-6">
                                                    <h5 className="">$56241</h5>
                                                    <p className="text-muted">Marketplace</p>
                                                </div>
                                                <div className="col-6">
                                                    <h5 className="">$23651</h5>
                                                    <p className="text-muted">Total Income</p>
                                                </div>
                                            </div>
            
                                            <div id="morris-donut-example" className="">
                                          
                                           <Doughnut />
                                            </div>
                                        </div>
                                    </div>
                                </div>
            
                                <div className="col-xl-6">
                                    <div className="card m-b-20">
                                        <div className="card-body">
                                            <h4 className="mt-0 header-title">Email Sent</h4>
            
                                            <div className="row text-center m-t-20">
                                                <div className="col-4">
                                                    <h5 className="">$ 89425</h5>
                                                    <p className="text-muted">Marketplace</p>
                                                </div>
                                                <div className="col-4">
                                                    <h5 className="">$ 56210</h5>
                                                    <p className="text-muted">Total Income</p>
                                                </div>
                                                <div className="col-4">
                                                    <h5 className="">$ 8974</h5>
                                                    <p className="text-muted">Last Month</p>
                                                </div>
                                            </div>
                
                                            <div id="morris-area-example" className="dashboard-charts morris-charts">
                                            <AreaDashboard />
                                            </div>
                                        </div>
                                    </div>
                                </div>
            
                                <div className="col-xl-3">
                                    <div className="card m-b-20">
                                        <div className="card-body">
                                            <h4 className="mt-0 header-title">Monthly Earnings</h4>
            
                                            <div className="row text-center m-t-20">
                                                <div className="col-6">
                                                    <h5 className="">$ 2548</h5>
                                                    <p className="text-muted">Marketplace</p>
                                                </div>
                                                <div className="col-6">
                                                    <h5 className="">$ 6985</h5>
                                                    <p className="text-muted">Total Income</p>
                                                </div>
                                            </div>
            
                                            <div id="morris-bar-stacked" className="dashboard-charts morris-charts">
                                            <Simpleline side="small" />
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
            
                            </div> */}


                    {/* <div className="row">
                                
                                <div className="col-xl-4 col-lg-6">
                                    <div className="card m-b-20">
                                        <div className="card-body">
                                            <h4 className="mt-0 header-title mb-3">Inbox</h4>
                                            <div className="inbox-wid">

                                             
                                                    <div className="inbox-item">
                                                        <div className="inbox-item-img float-left mr-3"><img src="assets/images/users/user-2.jpg" className="thumb-md rounded-circle" alt="" /></div>
                                                        <h6 className="inbox-item-author mt-0 mb-1">Misty</h6>
                                                        <p className="inbox-item-text text-muted mb-0">I've finished it! See you so...</p>
                                                        <p className="inbox-item-date text-muted">13:34 PM</p>
                                                    </div>
                                              
                                                    <div className="inbox-item">
                                                        <div className="inbox-item-img float-left mr-3"><img src="assets/images/users/user-2.jpg" className="thumb-md rounded-circle" alt="" /></div>
                                                        <h6 className="inbox-item-author mt-0 mb-1">Melissa</h6>
                                                        <p className="inbox-item-text text-muted mb-0">I've finished it! See you so...</p>
                                                        <p className="inbox-item-date text-muted">13:34 PM</p>
                                                    </div>
                                                    <div className="inbox-item">
                                                        <div className="inbox-item-img float-left mr-3"><img src="assets/images/users/user-3.jpg" className="thumb-md rounded-circle" alt="" /></div>
                                                        <h6 className="inbox-item-author mt-0 mb-1">Dwayne</h6>
                                                        <p className="inbox-item-text text-muted mb-0">This theme is awesome!</p>
                                                        <p className="inbox-item-date text-muted">13:17 PM</p>
                                                    </div>
                                                    <div className="inbox-item">
                                                        <div className="inbox-item-img float-left mr-3"><img src="assets/images/users/user-4.jpg" className="thumb-md rounded-circle" alt="" /></div>
                                                        <h6 className="inbox-item-author mt-0 mb-1">Martin</h6>
                                                        <p className="inbox-item-text text-muted mb-0">Nice to meet you</p>
                                                        <p className="inbox-item-date text-muted">12:20 PM</p>
                                                    </div>
                                                    <div className="inbox-item">
                                                        <div className="inbox-item-img float-left mr-3"><img src="assets/images/users/user-5.jpg" className="thumb-md rounded-circle" alt="" /></div>
                                                        <h6 className="inbox-item-author mt-0 mb-1">Vincent</h6>
                                                        <p className="inbox-item-text text-muted mb-0">Hey! there I'm available...</p>
                                                        <p className="inbox-item-date text-muted">11:47 AM</p>
                                                    </div>
            
                                                    <div className="inbox-item">
                                                        <div className="inbox-item-img float-left mr-3"><img src="assets/images/users/user-6.jpg" className="thumb-md rounded-circle" alt="" /></div>
                                                        <h6 className="inbox-item-author mt-0 mb-1">Robert Chappa</h6>
                                                        <p className="inbox-item-text text-muted mb-0">Hey! there I'm available...</p>
                                                        <p className="inbox-item-date text-muted">10:12 AM</p>
                                                    </div>
                                                    
                                            </div>  
                                        </div>
                                    </div>
            
                                </div>
                                <div className="col-xl-4 col-lg-6">
                                    <div className="card m-b-20">
                                        <div className="card-body">
                                            <h4 className="mt-0 header-title mb-4">Recent Activity Feed</h4>
            
                                            <ol className="activity-feed mb-0">
                                                <li className="feed-item">
                                                    <div className="feed-item-list">
                                                        <span className="date">Jun 25</span>
                                                        <span className="activity-text">Responded to need “Volunteer Activities”</span>
                                                    </div>
                                                </li>
                                                <li className="feed-item">
                                                    <div className="feed-item-list">
                                                        <span className="date">Jun 24</span>
                                                        <span className="activity-text">Added an interest “Volunteer Activities”</span>
                                                    </div>
                                                </li>
                                                <li className="feed-item">
                                                    <div className="feed-item-list">
                                                        <span className="date">Jun 23</span>
                                                        <span className="activity-text">Joined the group “Boardsmanship Forum”</span>
                                                    </div>
                                                </li>
                                                <li className="feed-item">
                                                    <div className="feed-item-list">
                                                        <span className="date">Jun 21</span>
                                                        <span className="activity-text">Responded to need “In-Kind Opportunity”</span>
                                                    </div>
                                                </li>
                                            </ol>
            
                                            <div className="text-center">
                                                <button className="btn btn-link btn btn-sm btn-primary">Load More</button>
                                            </div>
                                        </div>
                                    </div>
            
                                </div>
                                <div className="col-xl-4">
                                    <div className="card widget-user m-b-20">
                                        <div className="widget-user-desc p-4 text-center bg-primary position-relative">
                                            <i className="fas fa-quote-left h3 text-white-50"></i>
                                            <p className="text-white mb-0">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe the same vocabulary. The languages only in their grammar.</p>
                                        </div>
                                        <div className="p-4">
                                            <div className="float-left mt-2 mr-3">
                                                <img src="assets/images/users/user-2.jpg" alt="" className="rounded-circle thumb-md" />
                                            </div>
                                            <h6 className="mb-1">Marie Minnick</h6>
                                            <p className="text-muted mb-0">Marketing Manager</p>
                                        </div>
                                    </div>
                                    <div className="card m-b-20">
                                        <div className="card-body">
                                            <h4 className="mt-0 header-title">Yearly Sales</h4>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div>
                                                        <h4>52,345</h4>
                                                        <p className="text-muted">The languages only differ grammar</p>
                                                        <button className="btn btn-link text-primary">Learn more <i className="mdi mdi-chevron-double-right"></i></button>
                                                    </div>
                                                </div>
                                                <div className="col-md-8 text-right">
                                                    <div id="sparkline"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            
                                </div>
                            </div> */}
                    {/*                            
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="card m-b-20">
                                        <div className="card-body">
                                            <h4 className="mt-0 m-b-30 header-title">Latest Transactions</h4>
            
                                            <div className="table-responsive">
                                                <table className="table table-vertical">
            
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <img src="assets/images/users/user-2.jpg" alt="user" className="thumb-sm rounded-circle mr-2" /> /
                                                            Herbert C. Patton
                                                        </td>
                                                        <td><i className="mdi mdi-checkbox-blank-circle text-success"></i> Confirm</td>
                                                        <td>
                                                            $14,584
                                                            <p className="m-0 text-muted font-14">Amount</p>
                                                        </td>
                                                        <td>
                                                            5/12/2016
                                                            <p className="m-0 text-muted font-14">Date</p>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                        </td>
                                                    </tr>
            
                                                    <tr>
                                                        <td>
                                                            <img src="assets/images/users/user-3.jpg" alt="user" className="thumb-sm rounded-circle mr-2"/> /
                                                            Mathias N. Klausen
                                                        </td>
                                                        <td><i className="mdi mdi-checkbox-blank-circle text-warning"></i> Waiting payment</td>
                                                        <td>
                                                            $8,541
                                                            <p className="m-0 text-muted font-14">Amount</p>
                                                        </td>
                                                        <td>
                                                            10/11/2016
                                                            <p className="m-0 text-muted font-14">Date</p>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                        </td>
                                                    </tr>
            
                                                    <tr>
                                                        <td>
                                                            <img src="assets/images/users/user-4.jpg" alt="user" className="thumb-sm rounded-circle mr-2"/> /
                                                            Nikolaj S. Henriksen
                                                        </td>
                                                        <td><i className="mdi mdi-checkbox-blank-circle text-success"></i> Confirm</td>
                                                        <td>
                                                            $954
                                                            <p className="m-0 text-muted font-14">Amount</p>
                                                        </td>
                                                        <td>
                                                            8/11/2016
                                                            <p className="m-0 text-muted font-14">Date</p>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                        </td>
                                                    </tr>
            
                                                    <tr>
                                                        <td>
                                                            <img src="assets/images/users/user-5.jpg" alt="user" className="thumb-sm rounded-circle mr-2"/> /
                                                            Lasse C. Overgaard
                                                        </td>
                                                        <td><i className="mdi mdi-checkbox-blank-circle text-danger"></i> Payment expired</td>
                                                        <td>
                                                            $44,584
                                                            <p className="m-0 text-muted font-14">Amount</p>
                                                        </td>
                                                        <td>
                                                            7/11/2016
                                                            <p className="m-0 text-muted font-14">Date</p>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                        </td>
                                                    </tr>
            
                                                    <tr>
                                                        <td>
                                                            <img src="assets/images/users/user-6.jpg" alt="user" className="thumb-sm rounded-circle mr-2"/> /
                                                            Kasper S. Jessen
                                                        </td>
                                                        <td><i className="mdi mdi-checkbox-blank-circle text-success"></i> Confirm</td>
                                                        <td>
                                                            $8,844
                                                            <p className="m-0 text-muted font-14">Amount</p>
                                                        </td>
                                                        <td>
                                                            1/11/2016
                                                            <p className="m-0 text-muted font-14">Date</p>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                        </td>
                                                    </tr>
            
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
            
                                <div className="col-xl-6">
                                    <div className="card m-b-20">
                                        <div className="card-body">
                                            <h4 className="mt-0 m-b-30 header-title">Latest Orders</h4>
            
                                            <div className="table-responsive">
                                                <table className="table table-vertical mb-1">
            
                                                    <tbody>
                                                    <tr>
                                                        <td>#12354781</td>
                                                        <td>
                                                            <img src="assets/images/users/user-1.jpg" alt="user" className="thumb-sm mr-2 rounded-circle"/>
                                                            Riverston Glass Chair
                                                        </td>
                                                        <td><span className="badge badge-pill badge-success">Delivered</span></td>
                                                        <td>
                                                            $185
                                                        </td>
                                                        <td>
                                                            5/12/2016
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                        </td>
                                                    </tr>
            
                                                    <tr>
                                                        <td>#52140300</td>
                                                        <td>
                                                            <img src="assets/images/users/user-2.jpg" alt="user" className="thumb-sm mr-2 rounded-circle"/>
                                                            Shine Company Catalina
                                                        </td>
                                                        <td><span className="badge badge-pill badge-success">Delivered</span></td>
                                                        <td>
                                                            $1,024
                                                        </td>
                                                        <td>
                                                            5/12/2016
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                        </td>
                                                    </tr>
            
                                                    <tr>
                                                        <td>#96254137</td>
                                                        <td>
                                                            <img src="assets/images/users/user-3.jpg" alt="user" className="thumb-sm mr-2 rounded-circle"/>
                                                            Trex Outdoor Furniture Cape
                                                        </td>
                                                        <td><span className="badge badge-pill badge-danger">Cancel</span></td>
                                                        <td>
                                                            $657
                                                        </td>
                                                        <td>
                                                            5/12/2016
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                        </td>
                                                    </tr>
            
                                                    <tr>
                                                        <td>#12365474</td>
                                                        <td>
                                                            <img src="assets/images/users/user-4.jpg" alt="user" className="thumb-sm mr-2 rounded-circle"/>
                                                            Oasis Bathroom Teak Corner
                                                        </td>
                                                        <td><span className="badge badge-pill badge-warning">Shipped</span></td>
                                                        <td>
                                                            $8451
                                                        </td>
                                                        <td>
                                                            5/12/2016
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                        </td>
                                                    </tr>
            
                                                    <tr>
                                                        <td>#85214796</td>
                                                        <td>
                                                            <img src="assets/images/users/user-5.jpg" alt="user" className="thumb-sm mr-2 rounded-circle"/>
                                                            BeoPlay Speaker
                                                        </td>
                                                        <td><span className="badge badge-pill badge-success">Delivered</span></td>
                                                        <td>
                                                            $584
                                                        </td>
                                                        <td>
                                                            5/12/2016
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>#12354781</td>
                                                        <td>
                                                            <img src="assets/images/users/user-6.jpg" alt="user" className="thumb-sm mr-2 rounded-circle"/>
                                                            Riverston Glass Chair
                                                        </td>
                                                        <td><span className="badge badge-pill badge-success">Delivered</span></td>
                                                        <td>
                                                            $185
                                                        </td>
                                                        <td>
                                                            5/12/2016
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                        </td>
                                                    </tr>
            
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                </div>
            )
        }
        else {
            return (
                <div style={mystyle}>
                    <Loader
                        type="BallTriangle"
                        color="#7a6fbe "
                        height={100}
                        width={100}

                    />
                </div>
            )
        }
    }
}

const mapStatetoProps = state => {
    return {
        user_id: state.ui_red.user_id
    };
}

export default connect(mapStatetoProps)(Dashboard);