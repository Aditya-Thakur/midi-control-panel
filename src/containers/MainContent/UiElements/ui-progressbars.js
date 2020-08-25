import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Tinycharts from '../../Chartstypes/Tinycharts';
import { ProgressBar  } from 'react-bootstrap';
import { Progress } from 'reactstrap';
import { Link } from 'react-router-dom';

class ui_progressbars extends Component{

    render(){
    const now = 60;
        return(
            <AUX>
                <div className="row">
                            <div className="col-sm-12">
                                <div className="page-title-box">
                                <h4 className="page-title">Progress Bars</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="javascript:void(0);">Lexa</Link></li>
                                        <li className="breadcrumb-item"><Link to="javascript:void(0);">UI Elements</Link></li>
                                        <li className="breadcrumb-item active">Progress Bars</li>
                                    </ol>
            
                                    <Tinycharts />
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card m-b-30">
                                    <div className="card-body">
                                        <h4 className="mt-0 header-title">Default Examples</h4>
                                        <p className="text-muted m-b-30 font-14">Progress components are built with two
                                            HTML elements, some CSS to set the width, and a few attributes.</p>
                                            <div> 
                                            <div>
                                                <Progress  value={25} /><br></br>
                                                <Progress  value={50} /><br></br>
                                                <Progress  value={75} /><br></br>
                                                <Progress  value={100} /><br></br>
                                                </div>
                                                </div>
                                                <br></br>
                                    </div>
                                </div>
                            </div>
        
                            <div className="col-lg-6">
                                <div className="card m-b-30">
                                    <div className="card-body">
                                        <h4 className="mt-0 header-title">Backgrounds</h4>
                                        <p className="text-muted m-b-30 font-14">Use background utility classes to change the appearance of individual progress bars.</p>
                                        <div> 
                                        
                                            <div>
      <Progress color="success" value={25} /><br></br>
      <Progress color="info" value={50} /><br></br>
      <Progress color="warning" value={75} /><br></br>
      <Progress color="danger" value={100} /><br></br>
    </div>
                                                </div>
                                                <br></br>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card m-b-30">
                                    <div className="card-body">
                                        <h4 className="mt-0 header-title">Labels Example</h4>
                                        <p className="text-muted m-b-30 font-14">Add labels to your progress bars by placing text within the <code className="highlighter-rouge">.progress-bar</code>.</p>
                                          <ProgressBar now={now} label={`${now}%`} /> 
                                    </div>
                                </div>
                            </div>
        
                            <div className="col-lg-6">
                                <div className="card m-b-30">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Multiple bars</h4>
                                        <p className="text-muted m-b-30 font-14">Include multiple progress bars in a progress component if you need.</p>

                                      <div>
                                        <Progress multi>
                                            <Progress bar color="success" value="30"></Progress>
                                            <Progress bar color="info" value="25"></Progress>
                                            <Progress bar color="warning" value="20"></Progress>
                                            <Progress bar color="danger" value="5"></Progress>
                                        </Progress>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card m-b-30">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Height</h4>
                                        <p className="text-muted m-b-30 font-14">We only set a <code
                                                className="highlighter-rouge">height</code> value on the <code
                                                className="highlighter-rouge">.progress-bar</code>, so if you change
                                            that value the outer <code className="highlighter-rouge">.progress</code>
                                            will automatically resize accordingly.</p>
                                            <div style={{height:'24px'}}>
                                             <ProgressBar active now={45}   />
                                             </div>
                                    </div>
                                </div>
                            </div>
        
                            <div className="col-lg-6">
                                <div className="card m-b-30">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Animated stripes</h4>
                                        <p className="text-muted m-b-30 font-14">The striped gradient can also be
                                            animated. Add <code
                                                    className="highlighter-rouge">.progress-bar-animated</code> to <code
                                                    className="highlighter-rouge">.progress-bar</code> to animate the
                                            stripes right to left via CSS3 animations.</p>

                                            <ProgressBar active now={45} />
                                    </div>
                                </div>
                            </div>
                        </div>
        
        
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card m-b-30">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Striped</h4>
                                        <p className="text-muted m-b-30 font-14">Add <code className="highlighter-rouge">.progress-bar-striped</code>
                                            to any <code className="highlighter-rouge">.progress-bar</code> to apply a
                                            stripe via CSS gradient over the progress bar’s background color.</p>
                                            <div>
                                <Progress striped  color="success" value={25} /><br></br>
                                <Progress  striped  color="info" value={50} /><br></br>
                                <Progress  striped color="warning" value={75} /><br></br>
                                <Progress  striped  color="danger" value={100} /><br></br>
                                </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </AUX>
        );
    }
}

export default ui_progressbars;