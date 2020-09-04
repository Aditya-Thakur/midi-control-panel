import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import axios from 'axios';

class Notification extends Component{


    constructor(props){
        super(props);
        this.state = {
            notification:{}
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        const newData = { ...this.state.notification, [e.target.name]:e.target.value} ;
        this.setState({ notification : newData });
    };
    

    onSubmit = (e) => {
        e.preventDefault();
        const notify = {
            topic: "com.tragicbytes.midi",
            notifyTitle:this.state.notification.notifyTitle,
            notifyBody:this.state.notification.notifyBody
          };
      
          axios.post(`https://nodejs-fcm-server.herokuapp.com/notify`, notify )
            .then(res => {
              console.log(res);
              console.log(res.data);
            })
        console.log(this.state.notification)
    
    }

 render(){
        return(
            <AUX>
                <div className="row">
                            <div className="col-sm-12">
                                <div className="page-title-box">
                                <h4 className="page-title">Add Notification</h4>
                                    
                                    
                                </div>
                            </div>
                        </div>
                        
                         <div class="card m-b-20">
                                    <div class="card-body">
        
                                        <h4 class="mt-0 header-title">Mirai Vizion Application</h4>
                                        <p class="text-muted m-b-30 ">Mobile App Notifications allow you to keep in touch with your users in a non-intrusive way by providing timely messages and helpful and relevant information like rewards descriptions and special offers. They also provide a great way of getting users to engage in new promotions or features..</p>
        
                                        <form class="" action="sendMessage()">
                                            <div class="form-group">
                                                <label>Title</label>
                                                <input type="text" class="form-control" required placeholder="Type something" name="notifyTitle" onChange={this.handleChange}/>
                                            </div>
        
                                          
                                          
                                            <div class="form-group">
                                                <label>Message</label>
                                                <div>
                                                    <textarea required class="form-control" rows="5" name="notifyBody" onChange={this.handleChange}></textarea>
                                                </div>
                                            </div>
                                              
                                        
                                            <div class="form-group">
                                                <label>URL (Optional)</label>
                                                <div>
                                                    <input parsley-type="url" type="url" class="form-control"
                                                             placeholder="URL"/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div>
                                                    <button type="submit" class="btn btn-primary waves-effect waves-light" onClick={this.onSubmit}>
                                                        Submit
                                                    </button>
                                                    <button type="reset" class="btn btn-secondary waves-effect m-l-5">
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
        
                                    </div>
                                </div>
                            
        
        
            </AUX>
        );
    }
}
export default Notification;