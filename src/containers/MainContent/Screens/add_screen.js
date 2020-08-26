import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Tinycharts from '../../Chartstypes/Tinycharts';
import { Link } from 'react-router-dom';
import firebase from '.../../../src/firebase';

class add_screen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      switch3: true
    };

    //CSS Switch 
    this.changeswitch3 = this.changeswitch3.bind(this);
  }
  changeswitch3() { this.setState({ switch3: !this.state.switch3 }); }

  render() {
    return (
      <AUX>

        <div className="row">
          <div className="col-sm-12">
            <div className="page-title-box">
              <h4 className="page-title">Add Screen</h4>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="javascript:void(0);">Mirai Vision</Link></li>
                <li className="breadcrumb-item"><Link to="javascript:void(0);">Add Screen</Link></li>
                <li className="breadcrumb-item active">Screen Details</li>
              </ol>
              <Tinycharts />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card m-b-20">
              <div className="card-body">

                <h4 className="mt-0 header-title">Location</h4>

                <p className="text-muted m-b-30 font-14">Mobile App Notifications allow you to keep in touch with your users in a non-intrusive way by providing timely messages and helpful and relevant information like rewards descriptions and special offers. They also provide a great way of getting users to engage in new promotions or features...</p>

                <div className="row">
                  <div className="col-4">
                    <div className="form-group">
                      <label className="control-label">Select Location</label>
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
                      </select></div>
                  </div>
                  <div className="col-4">
                    <label>Screen Status</label><br></br>
                    <input type="checkbox" id="switch3" switch="bool" checked={this.state.switch3 ? "checked" : ""} onChange={this.changeswitch3} />
                    <label for="switch3" data-on-label="On" data-off-label="Off"></label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <div className="form-group">
                      <label for="screen-city" className="col-form-label">City</label>
                      <input className="form-control" type="text" id="screen-city" />
                    </div>

                  </div>
                  <div className="col-4">
                    <div className="form-group">
                      <label for="screen-city-pincode" className="col-form-label">Pin Code</label>
                      <input className="form-control" type="text" id="screen-city-pincode" />
                    </div>

                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <div className="form-group">
                      <label for="screen-impressions" className="col-form-label">Impressions Per Day</label>
                      <input className="form-control" type="number" value="42" id="screen-impressions" />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="form-group">
                      <label for="screen-impressions" className="col-form-label">Gender Ratio</label>
                      <input className="form-control" type="number" value="42" id="screen-impressions" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* <div className="col-4">
                    <div className="form-group">
                      <label for="screen-impressions" className="col-form-label">Time Wise Distribution</label>
                      <input className="form-control" type="number" value="42" id="screen-impressions" />
                    </div>
                  </div> */}
                  <div className="col-8">
                    <div className="form-group">
                      <label for="screen-impressions" className="col-form-label">Price</label>
                      <input className="form-control" type="number" value="42" id="screen-impressions" />
                    </div>
                  </div>
                </div>
                <div className="form-group button-items">
                  <button className="btn btn-primary waves-effect waves-light" type="submit">Submit</button>
                  <button className="btn btn-secondary waves-effect waves-light" type="submit">Cancel</button>
                </div>


                
              </div>
            </div>
          </div>
        </div>

      </AUX>
    );
  }
};
export default add_screen;