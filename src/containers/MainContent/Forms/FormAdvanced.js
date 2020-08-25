import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Tinycharts from '../../Chartstypes/Tinycharts';
import { SketchPicker } from 'react-color';
import { Link } from 'react-router-dom';


class FormAdvanced extends Component {y

    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),  bgSimple: '#fff', bgRGB: '#fff', color1: false, color2: false, colorcmp: false,threshholdcount:0,
            textcount:0, optioncount:0,placementcount:0,advanceclass : "badgecount",disbadge : false,disthresh:false,placementbadge:false,
            switch1 : true,switch2 : true,switch3 : true,switch4 : true,switch5 : true,switch6 : true,switch7 : true,switch8 : true,switch9 : true,
            numdata : 40,numpost : 50.10,numpre : 80,numinit: 0, 
        };

        //Color Picker
        this.handleChange = this.handleChange.bind(this);
        this.handleSimple = this.handleSimple.bind(this);
        this.handleRGB = this.handleRGB.bind(this);
        this.handlecmp = this.handlecmp.bind(this);

        // Bootsrap Maxlength
        this.threshholdchange =  this.threshholdchange.bind(this);  
        this.optionchange =  this.optionchange.bind(this);
        this.placementchange =  this.placementchange.bind(this);  
        this.textareachange =  this.textareachange.bind(this);   

        //CSS Switch
        this.changeswitch1 = this.changeswitch1.bind(this);   
        this.changeswitch2 = this.changeswitch2.bind(this);   
        this.changeswitch3 = this.changeswitch3.bind(this);   
        this.changeswitch4 = this.changeswitch4.bind(this);   
        this.changeswitch5 = this.changeswitch5.bind(this);   
        this.changeswitch6 = this.changeswitch6.bind(this);   
        this.changeswitch7= this.changeswitch7.bind(this);   
        this.changeswitch8 = this.changeswitch8.bind(this);   
        this.changeswitch9 = this.changeswitch9.bind(this); 
        
        // Bootstrap TouchSpin
        this.changedataminus = this.changedataminus.bind(this); 
        this.changedataplus = this.changedataplus.bind(this); 
        this.changepostplus = this.changepostplus.bind(this); 
        this.changepostminus = this.changepostminus.bind(this); 
        this.changepreplus = this.changepreplus.bind(this); 
        this.changepreminus = this.changepreminus.bind(this); 
        this.changeinitplus = this.changeinitplus.bind(this); 
        this.changeinitminus = this.changeinitminus.bind(this);    
    }

    //datePicker
    handleChange(date) {  this.setState({  startDate: date   });  }

    // ColorPicker
    ChangeSimple = (color) => {   this.setState({ bgSimple: color.hex });  };
    ChangeRGB = (color) => {   this.setState({ bgRGB: color.hex });  };
    Changecmp = (color) => {   this.setState({ bgcmp: color.hex });  };

    handleSimple() {  this.setState({ color1: !this.state.color1 });  }
    handleRGB() {  this.setState({ color2: !this.state.color2 });  }
    handlecmp() {  this.setState({ colorcmp: !this.state.colorcmp });  }

    //CSS Switch
    changeswitch1() { this.setState({ switch1: !this.state.switch1 });  }
    changeswitch2() { this.setState({ switch2: !this.state.switch2 });  }
    changeswitch3() { this.setState({ switch3: !this.state.switch3 });  }
    changeswitch4() { this.setState({ switch4: !this.state.switch4 });  }
    changeswitch5() { this.setState({ switch5: !this.state.switch5 }); }
    changeswitch6() { this.setState({ switch6: !this.state.switch6 }); }
    changeswitch7() { this.setState({ switch7: !this.state.switch7 }); }
    changeswitch8() { this.setState({ switch8: !this.state.switch8 });  }
    changeswitch9() { this.setState({ switch9: !this.state.switch9 });  }

    //Bootstrap TouchSpin
    changedataminus() { this.state.numdata--;  this.setState({ numdata: this.state.numdata });  }
    changedataplus() {  this.state.numdata++;  this.setState({ numdata: this.state.numdata });  }

    changepostminus() { this.state.numpost =  this.state.numpost - 0.10;  this.setState({ numpost: this.state.numpost });  }
    changepostplus() {   this.state.numpost =  this.state.numpost + 0.10;  this.setState({ numpost: this.state.numpost });  }

    changepreminus() { this.state.numpre--;  this.setState({ numpre: this.state.numpre });  }
    changepreplus() {  this.state.numpre++;  this.setState({ numpre: this.state.numpre });  }

    changeinitminus() { this.state.numinit--;  this.setState({ numinit: this.state.numinit });  }
    changeinitplus() {  this.state.numinit++;  this.setState({ numinit: this.state.numinit });  }

    //Bootstrap Maxlength   
      threshholdchange(event) 
      {
          var count = event.target.value.length;
          if(count > 0) {  this.setState({disthresh:true});   } else { this.setState({disthresh:false}); }
          this.setState({threshholdcount: event.target.value.length});
      }

      optionchange(event) 
      {
          var count = event.target.value.length;
          if(count > 0) {  this.setState({disbadge:true});   } else { this.setState({disbadge:false}); }
          if(count > 25)  {  this.setState({advanceclass: "badgecountextra"});   }
          else   {  this.setState({advanceclass: "badgecount"});   }
          this.setState({optioncount: event.target.value.length});
      }

      placementchange(event) 
      {
          var count = event.target.value.length;
          if(count > 0) {  this.setState({placementbadge:true});   } else { this.setState({placementbadge:false}); }
          this.setState({placementcount: event.target.value.length});
      }

      textareachange(event) 
      {
          var count = event.target.value.length;
          if(count > 0) {  this.setState({textareabadge:true});   } else { this.setState({textareabadge:false}); }
          this.setState({textcount: event.target.value.length});
      }

    render() {
        return (
            <AUX>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-title-box">
                            <h4 className="page-title">Form Advanced</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="javascript:void(0);">Lexa</Link></li>
                                <li className="breadcrumb-item"><Link to="javascript:void(0);">Forms</Link></li>
                                <li className="breadcrumb-item active">Form Advanced</li>
                            </ol>
                            <Tinycharts />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Colorpicker</h4>
                                <p className="text-muted m-b-30 font-14">Fancy and customizable colorpicker
                                            plugin for Twitter Bootstrap.</p>

                                <form action="#">
                                    <div className="form-group">
                                        <label>Simple input field</label>
                                        <input type="text" className="colorpicker-default form-control" onClick={ this.handleSimple } value={ this.state.bgSimple  } />
                                        { this.state.color1 ? <SketchPicker  color={ this.state.bgSimple } onChangeComplete={ this.ChangeSimple } /> : null } 
                                        
                                    </div>
                                    <div className="form-group">
                                        <label>With custom options - RGBA</label>
                                        <input type="text" className="colorpicker-default form-control" onClick={ this.handleRGB} value={ this.state.bgRGB  } />
                                        { this.state.color2 ? <SketchPicker  color={ this.state.bgRGB } onChangeComplete={ this.ChangeRGB } /> : null } 
                                         </div>
                                    <div className="form-group m-b-0">
                                        <label>As a component</label>
                                        <div data-color-format="rgb" data-color="rgb(255, 146, 180)" className="colorpicker-default input-group">
                                            <input type="text" value={this.state.colorcmp} readonly="readonly" value={ this.state.bgcmp  } className="form-control" />
                                            <span className="input-group-append add-on" onClick={ this.handlecmp}>
                                                <button className="btn btn-white" type="button" >
                                                    <i style={{ backgroundColor: '#ccc', marginTop: '2' }}></i>
                                                </button>
                                            </span>
                                        </div>
                                        { this.state.colorcmp ? <SketchPicker  color={ this.state.bgcmp } onChangeComplete={ this.Changecmp } /> : null } 
                                        
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Bootstrap MaxLength</h4>
                                <p className="text-muted m-b-30 font-14">This plugin integrates by default with
                                    Twitter bootstrap using badges to display the maximum lenght of the
                                            field where the user is inserting text. </p>

                                <label className="text-muted">Default usage</label>
                                <p className="text-muted m-b-15 font-14">
                                    The badge will show up by default when the remaining chars are 10 or less:
                                        </p>
                                <input type="text" className="form-control" maxlength="25" name="defaultconfig" id="defaultconfig" />

                                <div className="m-t-20">
                                    <label className="text-muted">Threshold value</label>
                                    <p className="text-muted m-b-15 font-14">
                                        Do you want the badge to show up when there are 20 chars or less? Use the <code>threshold</code> option:
                                            </p>
                                    <input type="text" maxlength="25" name="thresholdconfig" onChange={this.threshholdchange}  className="form-control" id="thresholdconfig" />       
                                    { this.state.disthresh ?   <span className="badgecount">{this.state.threshholdcount} / 25 </span> : null } 
                                </div>

                                <div className="m-t-20">
                                    <label className="text-muted">All the options</label>
                                    <p className="text-muted m-b-15 font-14">
                                        Please note: if the <code>alwaysShow</code> option is enabled, the <code>threshold</code> option is ignored.
                                            </p>
                                    <input type="text" className="form-control" maxlength="26"  onChange={this.optionchange}   name="alloptions" id="alloptions" />
                                    { this.state.disbadge ?  <span className={this.state.advanceclass}>You Types {this.state.optioncount} out of 25 chars available</span> : null } 
                                </div>

                                <div className="m-t-20">
                                    <label className="text-muted">Position</label>
                                    <p className="text-muted m-b-15 font-14">
                                        All you need to do is specify the <code>placement</code> option, with one of those strings. If none
                                        is specified, the positioning will be defauted to 'bottom'. </p>
                                    <input type="text" className="form-control" maxlength="25"   onChange={this.placementchange} name="placement" id="placement" />
                                    { this.state.placementbadge ?  <span className="badgecountright">{this.state.placementcount} / 25 </span> : null } 
                                </div>

                                <div className="m-t-20">
                                    <label className="text-muted">textareas</label>
                                    <p className="text-muted m-b-15 font-14">
                                        Bootstrap maxlength supports textarea as well as inputs. Even on old IE.
                                            </p>
                                    <textarea id="textarea" className="form-control" onChange={this.textareachange} maxlength="225" rows="3" placeholder="This textarea has a limit of 225 chars."></textarea>
                                    { this.state.textareabadge ?  <span className="textcenterbadge">{this.state.textcount} / 225 </span> : null }                               
                                </div>
                            </div>
                        </div>

                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Css Switch</h4>
                                <p className="text-muted m-b-30 font-14">Here are a few types of switches. </p>

                                <div>
                                    <input type="checkbox" id="switch1" checked={this.state.switch1 ? "checked"  :  "" } switch="none" onChange={this.changeswitch1} />
                                    <label for="switch1" data-on-label="Yes"  data-off-label="No"></label>

                                    <input type="checkbox" id="switch2" switch="info" checked={this.state.switch2 ? "checked"  :  "" }  onChange={this.changeswitch2} />
                                    <label for="switch2" data-on-label="Yes" data-off-label="No"></label>

                                    <input type="checkbox" id="switch3" switch="bool" checked={this.state.switch3 ? "checked"  :  ""}  onChange={this.changeswitch3} />
                                    <label for="switch3" data-on-label="Yes" data-off-label="No"></label>

                                    <input type="checkbox" id="switch6" switch="primary" checked={this.state.switch4 ? "checked"  : "" }  onChange={this.changeswitch4} />
                                    <label for="switch6" data-on-label="Yes" data-off-label="No"></label>

                                    <input type="checkbox" id="switch4" switch="success" checked={this.state.switch5 ? "checked"  :  "" }  onChange={this.changeswitch5} />
                                    <label for="switch4" data-on-label="Yes"  data-off-label="No"></label>

                                    <input type="checkbox" id="switch7" switch="info" checked={this.state.switch6 ? "checked"  :"" }  onChange={this.changeswitch6} />
                                    <label for="switch7" data-on-label="Yes"  data-off-label="No"></label>

                                    <input type="checkbox" id="switch5" switch="warning" checked={this.state.switch7 ? "checked"  : ""}  onChange={this.changeswitch7} />
                                    <label for="switch5" data-on-label="Yes" data-off-label="No"></label>

                                    <input type="checkbox" id="switch8" switch="danger" checked={this.state.switch8 ? "checked"  : "" }  onChange={this.changeswitch8} />
                                    <label for="switch8" data-on-label="Yes"   data-off-label="No"></label>

                                    <input type="checkbox" id="switch9" switch="dark" checked={this.state.switch9 ? "checked"  :  ""}  onChange={this.changeswitch9} />
                                    <label for="switch9" data-on-label="Yes"  data-off-label="No"></label>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Bootstrap TouchSpin</h4>
                                <p className="text-muted m-b-30 font-14">A mobile and touch friendly input spinner component for Bootstrap</p>

                                <form>

                                <div>
                                <label className="control-label">Using data attributes</label>
                                    <div className="input-group">
                                    <div className="input-group-append" >
                                            <span onClick={this.changedataminus} className="input-group-text"><i className="mdi mdi-minus"></i></span>
                                        </div>
                                      <input type="number" value={this.state.numdata}  className="form-control" placeholder="number" />
                                        <div className="input-group-append">
                                            <span onClick={this.changedataplus} className="input-group-text"><i className="mdi mdi-plus"></i></span>
                                        </div>
                                    </div>
                                  </div>

                                  <br></br>
                                  <div>
                                <label className="control-label">Example with postfix (large)</label>
                                    <div className="input-group">
                                    <div className="input-group-append" >
                                            <span onClick={this.changepostminus} className="input-group-text"><i className="mdi mdi-minus"></i></span>
                                        </div>
                                      <input type="number" value={this.state.numpost}  className="form-control" placeholder="number" />
                                      <div className="input-group-append"> <span className="input-group-text btn-info">%</span></div>
                                        <div className="input-group-append ">
                                            <span onClick={this.changepostplus} className="input-group-text"><i className="mdi mdi-plus"></i></span>
                                        </div>
                                    </div>
                                  </div>


                                  <br></br>
                                  <div>
                                <label className="control-label">Example with prefix (large)</label>
                                    <div className="input-group">
                                    <div className="input-group-append" >
                                            <span onClick={this.changepreminus} className="input-group-text"><i className="mdi mdi-minus"></i></span>
                                        </div>
                                        <div className="input-group-append"> <span className="input-group-text btn-info">$</span></div>
                                      <input type="number" value={this.state.numpre}  className="form-control" placeholder="number" />
                                        <div className="input-group-append ">
                                            <span onClick={this.changepreplus} className="input-group-text"><i className="mdi mdi-plus"></i></span>
                                        </div>
                                    </div>
                                  </div>

                                  <br></br>
                                  <div>
                                <label className="control-label">Init with empty value:</label>
                                    <div className="input-group">
                                    <div className="input-group-append" >
                                            <span onClick={this.changeinitminus} className="input-group-text"><i className="mdi mdi-minus"></i></span>
                                        </div>
                                      <input type="number" value={this.state.numinit}  className="form-control" placeholder="number" />
                                        <div className="input-group-append ">
                                            <span onClick={this.changeinitplus} className="input-group-text"><i className="mdi mdi-plus"></i></span>
                                        </div>
                                    </div>
                                  </div>


                                    {/* <div className="form-group">
                                        <label className="control-label">Using data attributes</label>
                                        <input id="demo0" type="text" value="55" name="demo0" data-bts-min="0" data-bts-max="100" data-bts-init-val="" data-bts-step="1" data-bts-decimal="0" data-bts-step-interval="100" data-bts-force-step-divisibility="round" data-bts-step-interval-delay="500" data-bts-prefix="" data-bts-postfix="" data-bts-prefix-extra-className="" data-bts-postfix-extra-className="" data-bts-booster="true" data-bts-boostat="10" data-bts-max-boosted-step="false" data-bts-mousewheel="true" data-bts-button-down-className="btn btn-default" data-bts-button-up-className="btn btn-default" />
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label">Example with postfix (large)</label>
                                        <input id="demo1" type="text" value="55" name="demo1" />
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">With prefix </label>
                                        <input id="demo2" type="text" value="0" name="demo2" className=" form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label">Init with empty value:</label>
                                        <input id="demo3" type="text" value="" name="demo3" />
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">Value attribute is not set (applying settings.initval)</label>
                                        <input id="demo3_21" type="text" value="" name="demo3_21" />
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">Value is set explicitly to 33 (skipping settings.initval) </label>
                                        <input id="demo3_22" type="text" value="33" name="demo3_22" />
                                    </div> */}

                                </form>

                            </div>
                        </div>


                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Select2</h4>
                                <p className="text-muted m-b-30 font-14">A mobile and touch friendly input spinner component for Bootstrap</p>

                                <form>
                                    <div className="form-group">
                                        <label className="control-label">Single Select</label>
                                        <select className="form-control select2">
                                            <option>Select</option>
                                            <optgroup label="Alaskan/Hawaiian Time Zone">
                                                <option value="AK">Alaska</option>
                                                <option value="HI">Hawaii</option>
                                            </optgroup>
                                            <optgroup label="Pacific Time Zone">
                                                <option value="CA">California</option>
                                                <option value="NV">Nevada</option>
                                                <option value="OR">Oregon</option>
                                                <option value="WA">Washington</option>
                                            </optgroup>
                                            <optgroup label="Mountain Time Zone">
                                                <option value="AZ">Arizona</option>
                                                <option value="CO">Colorado</option>
                                                <option value="ID">Idaho</option>
                                                <option value="MT">Montana</option>
                                                <option value="NE">Nebraska</option>
                                                <option value="NM">New Mexico</option>
                                                <option value="ND">North Dakota</option>
                                                <option value="UT">Utah</option>
                                                <option value="WY">Wyoming</option>
                                            </optgroup>
                                            <optgroup label="Central Time Zone">
                                                <option value="AL">Alabama</option>
                                                <option value="AR">Arkansas</option>
                                                <option value="IL">Illinois</option>
                                                <option value="IA">Iowa</option>
                                                <option value="KS">Kansas</option>
                                                <option value="KY">Kentucky</option>
                                                <option value="LA">Louisiana</option>
                                                <option value="MN">Minnesota</option>
                                                <option value="MS">Mississippi</option>
                                                <option value="MO">Missouri</option>
                                                <option value="OK">Oklahoma</option>
                                                <option value="SD">South Dakota</option>
                                                <option value="TX">Texas</option>
                                                <option value="TN">Tennessee</option>
                                                <option value="WI">Wisconsin</option>
                                            </optgroup>
                                            <optgroup label="Eastern Time Zone">
                                                <option value="CT">Connecticut</option>
                                                <option value="DE">Delaware</option>
                                                <option value="FL">Florida</option>
                                                <option value="GA">Georgia</option>
                                                <option value="IN">Indiana</option>
                                                <option value="ME">Maine</option>
                                                <option value="MD">Maryland</option>
                                                <option value="MA">Massachusetts</option>
                                                <option value="MI">Michigan</option>
                                                <option value="NH">New Hampshire</option>
                                                <option value="NJ">New Jersey</option>
                                                <option value="NY">New York</option>
                                                <option value="NC">North Carolina</option>
                                                <option value="OH">Ohio</option>
                                                <option value="PA">Pennsylvania</option>
                                                <option value="RI">Rhode Island</option>
                                                <option value="SC">South Carolina</option>
                                                <option value="VT">Vermont</option>
                                                <option value="VA">Virginia</option>
                                                <option value="WV">West Virginia</option>
                                            </optgroup>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">Multiple Select</label>

                                        <select className="select2 form-control select2-multiple" multiple="multiple" multiple data-placeholder="Choose ...">
                                            <optgroup label="Alaskan/Hawaiian Time Zone">
                                                <option value="AK">Alaska</option>
                                                <option value="HI">Hawaii</option>
                                            </optgroup>
                                            <optgroup label="Pacific Time Zone">
                                                <option value="CA">California</option>
                                                <option value="NV">Nevada</option>
                                                <option value="OR">Oregon</option>
                                                <option value="WA">Washington</option>
                                            </optgroup>
                                            <optgroup label="Mountain Time Zone">
                                                <option value="AZ">Arizona</option>
                                                <option value="CO">Colorado</option>
                                                <option value="ID">Idaho</option>
                                                <option value="MT">Montana</option>
                                                <option value="NE">Nebraska</option>
                                                <option value="NM">New Mexico</option>
                                                <option value="ND">North Dakota</option>
                                                <option value="UT">Utah</option>
                                                <option value="WY">Wyoming</option>
                                            </optgroup>
                                            <optgroup label="Central Time Zone">
                                                <option value="AL">Alabama</option>
                                                <option value="AR">Arkansas</option>
                                                <option value="IL">Illinois</option>
                                                <option value="IA">Iowa</option>
                                                <option value="KS">Kansas</option>
                                                <option value="KY">Kentucky</option>
                                                <option value="LA">Louisiana</option>
                                                <option value="MN">Minnesota</option>
                                                <option value="MS">Mississippi</option>
                                                <option value="MO">Missouri</option>
                                                <option value="OK">Oklahoma</option>
                                                <option value="SD">South Dakota</option>
                                                <option value="TX">Texas</option>
                                                <option value="TN">Tennessee</option>
                                                <option value="WI">Wisconsin</option>
                                            </optgroup>
                                            <optgroup label="Eastern Time Zone">
                                                <option value="CT">Connecticut</option>
                                                <option value="DE">Delaware</option>
                                                <option value="FL">Florida</option>
                                                <option value="GA">Georgia</option>
                                                <option value="IN">Indiana</option>
                                                <option value="ME">Maine</option>
                                                <option value="MD">Maryland</option>
                                                <option value="MA">Massachusetts</option>
                                                <option value="MI">Michigan</option>
                                                <option value="NH">New Hampshire</option>
                                                <option value="NJ">New Jersey</option>
                                                <option value="NY">New York</option>
                                                <option value="NC">North Carolina</option>
                                                <option value="OH">Ohio</option>
                                                <option value="PA">Pennsylvania</option>
                                                <option value="RI">Rhode Island</option>
                                                <option value="SC">South Carolina</option>
                                                <option value="VT">Vermont</option>
                                                <option value="VA">Virginia</option>
                                                <option value="WV">West Virginia</option>
                                            </optgroup>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="card m-b-20">
                            <div className="card-body">
                                <h4 className="mt-0 header-title">Bootstrap FileStyle</h4>
                                <p className="text-muted m-b-30 font-14">Examples of bootstrap fileStyle.</p>
                                <form action="#">
                                <div className="input-group">
                                    <div className="custom-file">
                                        <input
                                        type="file"
                                        className="custom-file-input"
                                        id="inputGroupFile01"
                                        aria-describedby="inputGroupFileAddon01" />
                                        <label className="custom-file-label" htmlFor="inputGroupFile01">
                                        Choose file
                                        </label>
                                    </div>
                                    </div>
                                    <br></br>

                                    <div className="input-group">
                                    <div className="custom-file">
                                        <input
                                        multiple="multiple"
                                        type="file"
                                        className="custom-file-input"
                                        id="inputGroupFile01"
                                        aria-describedby="inputGroupFileAddon01" />
                                        <label className="custom-file-label" htmlFor="inputGroupFile01">
                                        Choose multiple file
                                        </label>
                                    </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </AUX>
        );
    }
}

export default FormAdvanced;