import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import './App.css';
import { Route,Switch } from 'react-router-dom';
import mainbuilder from './containers/mainbuilder/mainbuilder';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import firebase from './firebase'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

class App extends Component {

  constructor(props){
    super (props)
    this.state={

    }
  }


  componentDidMount(){
    const messaging=firebase.messaging()
    messaging.requestPermission().then(()=>{
      return messaging.getToken()
    }).then(token=>{
      console.log('Token: ',token)
      const subscribeToken={
        token:token,
        topic:"admin"
      }
      axios.post(`https://nodejs-fcm-server.herokuapp.com/notify/subscribe`, subscribeToken)
        .then(res => {
          console.log(res);
        }).catch((e)=>{
          console.log(e)
        })
    }).catch((e)=>{
      console.log(e)
    });
    messaging.onMessage((payload)=>{
      console.log(payload);
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



  render() {
    let layout = null;
      layout = (
        <Layout topbar={this.props.topbar} sidebar = {this.props.sidebar}  footer = {this.props.footer} isloginpage={this.props.loginpage}>
          <ToastContainer />
          <Switch>  
          <Route path="/" component={mainbuilder} />
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

export default withRouter(connect(mapStatetoProps)(App))  ;
