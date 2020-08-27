import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Tinycharts from '../../Chartstypes/Tinycharts';
import { Link } from 'react-router-dom';
import firebase from '.../../../src/firebase';

class add_screen extends Component {

  constructor(props) {
    super(props);
    this.screensDataRef = firebase.database().ref('AvailableLocations');
    this.state = {
      switch: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.changeswitch = this.changeswitch.bind(this);
  }
  changeswitch() { this.setState({ switch: !this.state.switch }); }

  onSubmit(e) {
    e.preventDefault();
    let localScreenData = {}
    if (this.state.switch == false) {
      localScreenData.screenStatus = "0";
    }
    else {
      localScreenData.screenStatus = "1";
    }
    localScreenData.screenId="SCRN02XBF"
    localScreenData.screenCity = this.screenCity.value;
    localScreenData.screenImpressions = this.impression.value;
    localScreenData.screenPrice = this.price.value;
    localScreenData.screenGenderRatio = this.gender_ratio.value;
    this.screensDataRef.child(localScreenData.screenCity + "/screenData/" + localScreenData.screenId)
      .set(localScreenData)
      .then(_ => {
        alert("Screen Added.")
      });
  }
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
                  <div className="col-6">
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
                  <div className="col-6">
                    <label>Screen Status</label><br></br>
                    <input type="checkbox" id="screenStatus" switch="bool" checked={this.state.switch ? "checked" : ""} onChange={this.changeswitch} />
                    <label for="screenStatus" data-on-label="On" data-off-label="Off"></label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label className="col-form-label">City</label>
                      <input className="form-control" defaultValue="" type="text" name='screenCity' ref={(c) => this.screenCity = c} />
                    </div>

                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label className="col-form-label">Pin Code</label>
                      <input className="form-control" defaultValue="" type="text" name="pin_code" ref={(c) => this.pin_code = c} />
                    </div>

                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label className="col-form-label">Impressions Per Day</label>
                      <input className="form-control" type="number" defaultValue="" name="impression" ref={(c) => this.impression = c} />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label className="col-form-label">Gender Ratio</label>
                      <input className="form-control" type="number" defaultValue="" name="gender_ratio" ref={(c) => this.gender_ratio = c} />
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
                  <div className="col-12">
                    <div className="form-group">
                      <label className="col-form-label">Price</label>
                      <input className="form-control" type="number" defaultValue="" name="price" ref={(c) => this.price = c} />
                    </div>
                  </div>
                </div>
                <div className="form-group button-items">
                  <button className="btn btn-primary waves-effect waves-light" type="submit" onClick={this.onSubmit}>Submit</button>
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