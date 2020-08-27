import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Tinycharts from '../../Chartstypes/Tinycharts';
import { Link } from 'react-router-dom';

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
                        <optgroup label="Available Locations">
                          <option value="Delhi">Delhi</option>
                          <option value="Greater Noida">Greater Noida</option>
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