import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import './App.css';
import { Route,Switch } from 'react-router-dom';
import mainbuilder from './containers/mainbuilder/mainbuilder';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import firebase from './firebase/firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import login from './containers/Auth/Login';
import * as actionTypes from './store/action';

class App extends Component {

  constructor(props){
    super (props)
    this.state={
      notificationCount:0,
      notifications:{},
      isAuth:false
    }
  }


  componentDidMount(){
    const messaging=firebase.messaging()
    messaging.requestPermission().then(()=>{
      return messaging.getToken()
    }).then(token=>{
      console.log('Token: ',token)
      // const subscribeToken={
      //   token:token,
      //   topic:"admin"
      // }
      // axios.post(`https://nodejs-fcm-server.herokuapp.com/notify/unsubscribe`, subscribeToken)
      //   .then(res => {
      //     console.log(res);
      //   }).catch((e)=>{
      //     console.log(e)
      //   })
    }).catch((e)=>{
      console.log(e)
    });
    messaging.onMessage((payload)=>{
      console.log(payload);
      this.setState({
        notificationCount:this.state.notificationCount+1
      });
      toast(payload.notification.title, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      
    });

  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged((user)=>{
      if (user) {
        console.log(user.uid)
        this.props.UpdateUser(user.uid)
      } else {
      }
      console.log("user updated")
    });
    if(localStorage.getItem("loggedIn")==="true"){
      this.setState({
        isAuth:true
      })
    }

  }

  componentWillReceiveProps(newProps){
    if(newProps.loginpage!==this.props.loginpage){
      if(newProps.loginpage==true){
        console.log("prop chnage",newProps.loginpage)
      }
      else{
        window.location.reload()
      }
    }
  }

  logout(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      this.props.history.push('/login');
    }).catch(function(error) {
      // An error happened.
    });
  }



  render() {
    let layout = null;
      layout = (
        <Layout topbar={this.props.topbar} sidebar = {this.props.sidebar}  footer = {this.props.footer} notificationCount={this.state.notificationCount} isloginpage={!this.state.isAuth}>
          <ToastContainer />
          <Switch>  
          {!this.state.isAuth?
          <Route path="/" component={login} />:
          <Route path="/" component={mainbuilder} />}
          </Switch>
        </Layout>);
    
    return (
      <div className="App">
        {layout}
      </div>
    );
  }
}
const mapStatetoProps = state =>{
  return {
      topbar: state.ui_red.top_bar,
      sidebar:state.ui_red.side_bar,
      loginpage:state.ui_red.loginpage,
      footer:state.ui_red.footer
  };
}
const mapDispatchtoProps = dispatch => {
  return {
      UpdateUser: (uid) => dispatch({ type: actionTypes.USER_ID,value:uid }),
  };
}

export default withRouter(connect(mapStatetoProps, mapDispatchtoProps)(App))  ;
