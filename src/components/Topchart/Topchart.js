
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/action';
import AUX from '../../hoc/Aux_';
import NotificationDropdownList from './NotificationDropdownList'


class topchart extends Component {

    render(){
        return(
            <AUX>
                <div className="topbar">
                <div className="topbar-left">
                    <Link to="/" className="logo">
                        <span>
                            <img src="assets/images/mv_heading.png" alt="" height="30" />
                        </span>
                        <i>
                            <img src="assets/images/mv.png" alt="" height="28" width="28" />
                        </i>
                    </Link>
                </div>
                <nav className="navbar-custom">
                    <ul className="navbar-right d-flex list-inline float-right mb-0">
                        {/* <li className="dropdown notification-list d-none d-sm-block">
                            <form role="search" className="app-search">
                                <div className="form-group mb-0"> 
                                    <input type="text" className="form-control" placeholder="Search.." />
                                    <button type="submit"><i className="fa fa-search"></i></button>
                                </div>
                            </form> 
                        </li> */}

                        <li className="dropdown notification-list">
                            <div className=" btn btn-link nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown"   aria-haspopup="false" aria-expanded="false">
                                <i className="ti-bell noti-icon"></i>
                    <span className="badge badge-pill badge-danger noti-icon-badge">{this.props.notification_count}</span>
                            </div>
                            {/* <NotificationDropdownList/> */}
                            </li>
                        <li className="dropdown notification-list">
                            <div className="dropdown notification-list nav-pro-img">
                                <button className="btn btn-link dropdown-toggle nav-link arrow-none waves-effect nav-user" data-toggle="dropdown"   aria-haspopup="false" aria-expanded="false">
                                    <img src="assets/images/users/user-4.jpg" alt="user" className="rounded-circle" />
                                </button>
                                <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                                    
                                    {/* <button className="btn btn-link dropdown-item" ><i className="mdi mdi-account-circle m-r-5"></i> Profile</button>
                                    <button className="btn btn-link dropdown-item" ><i className="mdi mdi-wallet m-r-5"></i> My Wallet</button>
                                    <button className="btn btn-link dropdown-item d-block" ><span className="badge badge-success float-right">11</span><i className="mdi mdi-settings m-r-5"></i> Settings</button>
                                    <button className="btn btn-link dropdown-item" ><i className="mdi mdi-lock-open-outline m-r-5"></i> Lock screen</button> */}
                                    <div className="dropdown-divider"></div>
                                    <Link to="/login" className="btn btn-link dropdown-item text-danger" ><i className="mdi mdi-power text-danger"></i> Logout</Link>
                                </div>                                                                    
                            </div>
                        </li>

                    </ul>

                    <ul className="list-inline menu-left mb-0">
                        <li className="float-left">
                            <button className="button-menu-mobile open-left waves-effect">
                                <i className="mdi mdi-menu"></i>
                            </button>
                        </li>
                        <li className="d-none d-sm-block">
                            <div className="dropdown pt-3 d-inline-block">
                                {/* <button className="btn btn-link btn btn-light dropdown-toggle"   id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Create
                                </button> */}
                                
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <button className="dropdown-item" >Action</button>
                                    <button className="dropdown-item" >Another action</button>
                                    <button className="dropdown-item" >Something else here</button>
                                    <div className="dropdown-divider"></div>
                                    <button className="dropdown-item" >Separated link</button>
                                </div>
                            </div>
                        </li>
                    </ul>

                </nav>

            </div>
            </AUX>
        )
    }
    
}

const mapStateToProps = state => ({
    notification_count:state.ui_red.notification_count,
    notification_list:state.ui_red.notification_list
})
const mapDispatchtoProps = dispatch => {
    return {
        UpdateNotificationCount:(count)=>dispatch({ type: actionTypes.NOTIFICATION_COUNT,value:count }),
        UpdateNotificationList:(notifyList)=>dispatch({ type: actionTypes.NOTIFICATION_LIST,value:notifyList })
    };
}

export default connect(mapStateToProps,mapDispatchtoProps)(topchart);
