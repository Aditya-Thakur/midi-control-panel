
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/action';
import AUX from '../../hoc/Aux_';


class NotificationDropdownList extends Component {

    state={
        notify:this.props.notification_list
    }

    render(){
        return(
            <AUX>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg">
                                
                                <h6 className="dropdown-item-text">
                                    Notifications ({this.props.notification_count})
                                </h6>
                                <div className="slimscroll notification-item-list">
                                    {this.state.notify.map((item)=>console.log(item))}
                                    <button  className="btn btn-link dropdown-item notify-item active">
                                        <div className="notify-icon bg-success"><i className="mdi mdi-cart-outline"></i></div>
                                        <p className="notify-details">Your order is placed<span className="text-muted">Dummy text of the printing and typesetting industry.</span></p>
                                    </button>
                                    
                                    <button  className="btn btn-link dropdown-item notify-item">
                                        <div className="notify-icon bg-warning"><i className="mdi mdi-message"></i></div>
                                        <p className="notify-details">New Message received<span className="text-muted">You have 87 unread messages</span></p>
                                    </button>
                                    
                                    <button  className="btn btn-link dropdown-item notify-item">
                                        <div className="notify-icon bg-info"><i className="mdi mdi-martini"></i></div>
                                        <p className="notify-details">Your item is shipped<span className="text-muted">It is a long established fact that a reader will</span></p>
                                    </button>
                                    
                                    <button  className="btn btn-link dropdown-item notify-item">
                                        <div className="notify-icon bg-danger"><i className="mdi mdi-message"></i></div>
                                        <p className="notify-details">New Message received<span className="text-muted">You have 87 unread messages</span></p>
                                    </button>
                                </div>
                            
                                <button  className="btn btn-link dropdown-item text-center text-primary">
                                    View all <i className="fi-arrow-right"></i>
                                </button>
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

export default connect(mapStateToProps,mapDispatchtoProps)(NotificationDropdownList);