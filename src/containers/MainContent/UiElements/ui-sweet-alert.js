import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Tinycharts from '../../Chartstypes/Tinycharts';
import SweetAlert  from 'react-bootstrap-sweetalert';
import { Link } from 'react-router-dom';

class ui_sweet_alert extends Component{

   constructor(props) {
    super(props);

    this.state = {   alert: null,nextalert:null,successAlert:null,cancelAlert:null,successAjax:null,aname:null,my_ip:null,timeralert:null,
                     step1:null,step2:null,step3:null,Alert1:null,Alert2:null,Alert3:null,AlertFinal:null }; 
    this.handleAnameChange = this.handleAnameChange.bind(this);  // Using for AJAX request for binding
    this.handlestepChange = this.handlestepChange.bind(this);  // Using for AJAX request for binding
 } 

 componentDidMount() {  
    this.setState({my_ip: "103.240.79.61"}); 
  }

    handleAnameChange(e) {  this.setState({ aname: e.target.value });  } // Using for AJAX request
    handlestepChange(e){ this.setState({ [e.target.name]: e.target.value });   } // Plot Step1 value 
    

  sbasic() {   const getAlert = () => ( 
               <SweetAlert  title="Title!" onConfirm={() => this.hideAlert()}></SweetAlert> );
               this.setState({   alert: getAlert()  });  }  // Basic SweetAlert

  stext() {   const BasicText = () => ( 
              <SweetAlert  title="Title With Text!" onConfirm={() => this.hideAlert()}>Hello World!.. </SweetAlert> );
              this.setState({   alert: BasicText()  });    }  // Basic With Text SweetAlert

   ssuccess() {  const SuccessText = () => (
                 <SweetAlert  success title="Success!" onConfirm={() => this.hideAlert()}>Hello World!..</SweetAlert> );
                 this.setState({   alert: SuccessText()  });    }   // Success SweetAlert

   swarning() {  const WarningText = () => ( 
                <SweetAlert  warning showCancel confirmBtnText="Yes, delete it!" confirmBtnBsStyle="success" cancelBtnBsStyle="danger" title="Are you sure to delete?" 
                onCancel={() => this.hideAlert()} onConfirm={() => this.hideAlert()}>Hello World!..</SweetAlert> );
                this.setState({   alert: WarningText()  });    }

   spassing() {  const PassingText = () => ( 
                 <SweetAlert  warning showCancel confirmBtnText="Yes, delete it!" confirmBtnBsStyle="danger" cancelBtnBsStyle="default" title="Are you sure to delete?" 
                 onCancel={() => this.OpenCancel()} onConfirm={() => this.OpenSuccess()}>Are you sure to Delte?</SweetAlert> );
                 this.setState({   alert: PassingText()  });    }

    simage() {  const ImageText = () => ( 
               <SweetAlert custom showCancel confirmBtnText="Yes" cancelBtnText="No" confirmBtnBsStyle="primary" cancelBtnBsStyle="default" 
               customIcon="assets/images/default.png" title="Do you like thumbs?" onCancel={() => this.hideAlert()} onConfirm={() => this.hideAlert()}>Hello World!..</SweetAlert> );
               this.setState({   alert: ImageText()  });    }

    stimer() {  
        const getTimer = () => ( 
        <SweetAlert title={ <span>HTML <small>AutoClose Timer</small>!</span>} onConfirm={() => this.hideTimeAlert()} > <span>
        Timer Will Expire after 3 Seconds.</span></SweetAlert> );
        this.setState({    timeralert: getTimer() });  
        setTimeout(function() {  this.setState({timeralert: null});  }.bind(this),3000);
    }
     
    shtml() {  const getHtml = () => ( 
               <SweetAlert title={<span>HTML <small>Title</small>!</span>} onConfirm={() => this.hideAlert()} > <span>
               A custom <span style={{color:'#F8BB86'}}>html</span><b> Strong</b> message.</span></SweetAlert> );
               this.setState({   alert: getHtml()  });   }

    scustom() {  const getCustom = () => ( 
                 <SweetAlert onConfirm={() => this.hideAlert()} > <span> <span style={{color:'green',backgroundColor:'#ebebeb',padding:'1em',margin:'1em',borderRadius:"20px"}}>
                 A custom html message.</span></span></SweetAlert> );
                 this.setState({   alert: getCustom()  });   }  

    sajax() {  const getajax = () => ( 
               <SweetAlert  info confirmBtnText="Submit" cancelBtnText="Cancel"  onConfirm={() => this.ShowSuccessAjax()} onCancel={() => this.hideAlert()}> <span>
               <b>Submit Name to run ajax request</b><br></br>
               <input type="email" name="aname" onChange={ this.handleAnameChange } placeholder="Enter Email" className="form-control" /></span>
               </SweetAlert> );
               this.setState({   alert: getajax()  });   } 


    squeue() {   const getqueue = () => ( 
                <SweetAlert  title="Your public IP"  onConfirm={() => this.ShowQueueAjax()}></SweetAlert> );
                this.setState({   alert: getqueue()  });  }   //dynamic queue example

  hideAlert() { this.setState({   alert: null  }); }
  hidenextAlert() { this.setState({   nextalert: null  }); }
  hideCancelAlert(){ this.setState({   cancelAlert: null  }); }
  hideSuccessAlert(){ this.setState({   successAlert: null  }); }
  hideSuccessAjax(){ this.setState({   successAjax: null  }); }
  hidequeue(){ this.setState({   successQueue: null  }); }
  hideTimeAlert() {   this.setState({   timeralert: null  }); }

  
  shownext() {   this.setState({   alert: null  });   const nextmsg = () => ( 
                 <SweetAlert  onConfirm={() => this.hidenextAlert()}> <span> Success Response</span></SweetAlert> );
                 this.setState({   nextalert: nextmsg()  });   }
                
 showIpAlert() {   this.setState({   alert: null  });   const nextmsg = () => ( 
                   <SweetAlert  onConfirm={() => this.hidenextAlert()}> <span> Success Response</span></SweetAlert> );
                   this.setState({   nextalert: nextmsg()  });   }          

  OpenCancel() {   this.setState({   alert: null  });   const cancelmsg = () => ( 
                   <SweetAlert danger onConfirm={() => this.hideCancelAlert()}> <span> Cancel Response</span></SweetAlert> );
                    this.setState({   cancelAlert: cancelmsg()  });   }

 OpenSuccess() {   this.setState({   alert: null  });   const sucmsg = () => ( 
                   <SweetAlert success onConfirm={() => this.hideSuccessAlert()}> <span> Success Response</span></SweetAlert> );
                   this.setState({   successAlert: sucmsg()  });   }

 ShowSuccessAjax(){   this.setState({   alert: null  });   const suajax = () => ( 
                      <SweetAlert success onConfirm={() => this.hideSuccessAjax()}> <span> Success Response.<br></br>Submitted Name : <b>{this.state.aname}</b></span></SweetAlert> );
                      this.setState({   successAjax: suajax()  });   }

 ShowQueueAjax(){  this.setState({   alert: null  });   const suip = () => ( 
                      <SweetAlert  onConfirm={() => this.hidequeue()}> <span> Your IP Address<br></br> <b>{this.state.my_ip}</b></span></SweetAlert> );
                      this.setState({   successQueue: suip()  });   }


 // Chaining Sweet Alert with three step            
schain() {  const getstep1 = () => (
            <SweetAlert  showCancel confirmBtnText="Next 1" confirmBtnBsStyle="success" cancelBtnBsStyle="danger" title="Question 1" 
             onCancel={() => this.hidestep1()} onConfirm={() => this.openstep2()}>What is your favourite food?<br></br>
            <input type="text" name="step1" onChange={ this.handlestepChange } placeholder="Enter Answare" className="form-control" />
            </SweetAlert> );
            this.setState({   Alert1: getstep1()  });   } 
                
hidestep1(){  this.setState({   Alert1: null  });   } //Hide Chain 1 alert
                   
openstep2(){ this.setState({   Alert1: null  });  const getstep2 = () => (
             <SweetAlert  showCancel confirmBtnText="Next 2" confirmBtnBsStyle="success" cancelBtnBsStyle="danger" title="Question 2" 
             onCancel={() => this.hidestep2()} onConfirm={() => this.openstep3()}>What is your favourite Actor?<br></br>
             <input type="text" name="step2" onChange={ this.handlestepChange } placeholder="Enter Answare" className="form-control" />
             </SweetAlert> );
             this.setState({   Alert2: getstep2()  });   } 

hidestep2(){  this.setState({   Alert2: null  });   } //Hide Chain 2 alert

openstep3(){ this.setState({   Alert2: null  });  const getstep3 = () => (
    <SweetAlert  showCancel confirmBtnText="Next 3" confirmBtnBsStyle="success" cancelBtnBsStyle="danger" title="Question 3" 
    onCancel={() => this.hidestep3()} onConfirm={() => this.openstep4()}>What is your favourite Color?<br></br>
    <input type="text" name="step3" onChange={ this.handlestepChange } placeholder="Enter Answare" className="form-control" />
    </SweetAlert> );
    this.setState({   Alert3: getstep3()  });   } 

hidestep3(){  this.setState({   Alert3: null  });   } //Hide Chain 3 alert

openstep4(){ this.setState({   Alert3: null  });  const getstep4 = () => (
    <SweetAlert    confirmBtnText="Done" title="All Dones !" 
    onConfirm={() => this.hidestep4()} >Your answers : <br></br>
    <b>Food : </b>{this.state.step1} <br></br> <b>Actor : </b>{this.state.step2} <br></br> <b>Color : </b>{this.state.step3} <br></br> 
    </SweetAlert> );
    this.setState({   AlertFinal: getstep4()  });   } 

hidestep4(){  this.setState({   AlertFinal: null  });   } //Hide Final alert


    render(){
        return(
            <AUX>

                                                 {this.state.alert}
                                                 {this.state.successAlert}
                                                {this.state.cancelAlert}
                                                {this.state.successAjax}
                                                {this.state.successQueue}
                                                {this.state.timeralert}
                                                {this.state.nextalert}
                                                {this.state.Alert1}
                                                {this.state.Alert2}
                                                {this.state.Alert3}
                                                {this.state.AlertFinal}

                <div className="row">
                            <div className="col-sm-12">
                                <div className="page-title-box">
                                <h4 className="page-title">Sweet-Alert</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="">Lexa</Link></li>
                                        <li className="breadcrumb-item"><Link to="">UI Elements</Link></li>
                                        <li className="breadcrumb-item active">Sweet-Alert</li>
                                    </ol>
                                    <Tinycharts />
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-12">
                                <div className="card m-b-20">
                                    <div className="card-body">
                                        <h4 className="mt-0 header-title">Examples</h4>
                                        <p className="text-muted m-b-30 font-14">A beautiful, responsive, customizable
                                            and accessible (WAI-ARIA) replacement for JavaScripts popup boxes. Zero
                                            dependencies.</p>
        
                                        <div className="row text-center">
                                            <div className="col-lg-3 col-md-6 m-b-30">
                                                <p className="text-muted">A basic message</p>

                                                <button type="button" onClick={() => this.sbasic()} className="btn btn-primary waves-effect waves-light" id="sa-basic">Click me</button>
                                                
                                            </div>
                                            <div className="col-lg-3 col-md-6 m-b-30">
                                                <p className="text-muted">A title with a text under</p>
                                                <button onClick={() => this.stext()} type="button" className="btn btn-primary waves-effect waves-light" id="sa-title">Click me</button>
                                            </div>
                                            <div className="col-lg-3 col-md-6 m-b-30">
                                                <p className="text-muted">A success message!</p>
                                                <button onClick={() => this.ssuccess()} type="button" className="btn btn-primary waves-effect waves-light" id="sa-success">Click me</button>
                                            </div>
                                            <div className="col-lg-3 col-md-6 m-b-30">
                                                <p className="text-muted">A warning message, with a function attached to the "Confirm"-button...</p>
                                                <button  onClick={() => this.swarning()}  type="button" className="btn btn-primary waves-effect waves-light" id="sa-warning">Click me</button>
                                            </div>
        
                                            <div className="col-lg-3 col-md-6 m-b-30">
                                                <p className="text-muted">By passing a parameter, you can execute something else for "Cancel".</p>
                                                <button onClick={() => this.spassing()} type="button" className="btn btn-primary waves-effect waves-light" id="sa-params">Click me</button>
                                            </div>
                                       
                                            
                                            <div className="col-lg-3 col-md-6 m-b-30">
                                                <p className="text-muted">A message with custom Image Header</p>
                                                <button onClick={() => this.simage()}   type="button" className="btn btn-primary waves-effect waves-light" id="sa-image">Click me</button>
                                            </div>
                                            <div className="col-lg-3 col-md-6 m-b-30">
                                                <p className="text-muted">A message with auto close timer</p>
                                                <button type="button" onClick={() => this.stimer()}  className="btn btn-primary waves-effect waves-light" id="sa-close">Click me</button>
                                            </div>
                                            <div className="col-lg-3 col-md-6 m-b-30">
                                                <p className="text-muted">Custom HTML description and buttons</p>
                                                <button type="button"  onClick={() => this.shtml()}  className="btn btn-primary waves-effect waves-light" id="custom-html-alert">Click me</button>
                                            </div>
                                    
                                            <div className="col-lg-3 col-md-6 m-b-30">
                                                <p className="text-muted">A message with custom width, padding and background</p>
                                                <button type="button"  onClick={() => this.scustom()}  className="btn btn-primary waves-effect waves-light" id="custom-padding-width-alert">Click me</button>
                                            </div>
                                            <div className="col-lg-3 col-md-6 m-b-30">
                                                <p className="text-muted">Ajax request example</p>
                                                <button type="button" onClick={() => this.sajax()}  className="btn btn-primary waves-effect waves-light" id="ajax-alert">Click me</button>
                                            </div>
                                            
                                            <div className="col-lg-3 col-md-6 m-b-30">
                                                <p className="text-muted">Chaining modals (queue) example</p>
                                                <button type="button"  onClick={() => this.schain()}  className="btn btn-primary waves-effect waves-light" id="chaining-alert">Click me</button>
                                            </div>
                                            <div className="col-lg-3 col-md-6 m-b-30">
                                                <p className="text-muted">Dynamic queue example</p>
                                                <button type="button" onClick={() => this.squeue()} className="btn btn-primary waves-effect waves-light" id="dynamic-alert">Click me</button>
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

export default ui_sweet_alert;