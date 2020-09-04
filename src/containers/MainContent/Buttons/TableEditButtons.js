import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import firebase from '.../../../src/firebase';
import cloneDeep from 'lodash/cloneDeep';


class TableEditButtons extends Component {
    constructor(props) {
        super(props);
        let checked = true;
        this.screensDataRef = firebase.database().ref('AvailableLocations');
        if (props.screenData.screenStatus === "1") {
            checked = true
        }
        else {
            checked = false
        };
        this.state = {
            switch: checked,
            modal: false,
            ageGroupPref: {}
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.changeswitch = this.changeswitch.bind(this);
        this.handleAgeGroupChange = this.handleAgeGroupChange.bind(this);

    }

    onSubmit(e) {
        e.preventDefault();
        let localScreenData = cloneDeep(this.props.screenData);
        localScreenData.action = null;
        localScreenData.screen_status = null;
        if (!this.state.switch == false) {
            localScreenData.screenStatus = "0";
        }
        else {
            localScreenData.screenStatus = "1";
        }
        localScreenData.screenCity = this.screenCity.value;
        localScreenData.screenLocation = this.screenLocation.value;
        localScreenData.screenImpressions = this.impression.value;
        localScreenData.screenPrice = this.price.value;
        localScreenData.screenGenderRatio = this.gender_ratio.value;
        localScreenData.screenPincode=this.screenPincode.value;
        localScreenData.screenAgeGroupPref = this.state.ageGroupPref;
        this.screensDataRef.child(this.props.screenData.screenCity + "/screenData/" + this.props.screenData.screenId)
            .set(localScreenData)
            .then(_ => {
                this.toggle()
            });
    }
    changeswitch() { this.setState({ switch: !this.state.switch }); }


    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    removeScreen = () => {
        this.screensDataRef.child(this.props.screenData.screenCity + "/screenData/" + this.props.screenData.screenId)
            .set(null)
            .then(_ => {
                alert("deleted.")
            });
    }
    handleAgeGroupChange(event) {
        const target = event.target;
        this.state.ageGroupPref[target.name] = target.value;
    }

    render() {
        return (
            <MDBContainer>
                {/* BUTTON */}
                {/* <MDBBtn color="info" onClick={this.toggle}>Click</MDBBtn> */}

                <div className="form-group button-items">
                    <button className="btn btn-secondary waves-effect waves-light" type="submit" onClick={this.toggle}>Edit</button>
                    <button className="btn btn-danger waves-effect waves-light" type="submit" onClick={this.removeScreen}>Delete</button>
                </div>
                {/* MODAL */}
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}    >
                    <MDBModalHeader toggle={this.toggle}>{this.props.screenData.screenId}</MDBModalHeader>
                    <MDBModalBody>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label className="control-label">Select City</label>
                                    <select className="form-control select2" ref={(c) => this.screenCity = c} value={this.props.screenData.screenCity}>
                                        <option>Select</option>
                                        <optgroup label="Available Cities">
                                            <option value="Delhi">Delhi</option>
                                            <option value="Greater Noida">Greater Noida</option>
                                        </optgroup>
                                    </select></div>
                            </div>
                            <div className="col-6">
                                <label>Screen Status</label><br></br>
                                <input type="checkbox" id={this.props.screenData.screenId + "m"} switch="bool" checked={this.state.switch ? "checked" : ""} onChange={this.changeswitch} />
                                <label htmlFor={this.props.screenData.screenId + "m"} data-on-label="On" data-off-label="Off"></label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label className="col-form-label">Location</label>
                                    <input className="form-control" defaultValue={this.props.screenData.screenLocation} type="text" name='screenLocation' ref={(c) => this.screenLocation = c} />
                                </div>

                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label className="col-form-label">Pin Code</label>
                                    <input className="form-control" defaultValue={this.props.screenData.screenPincode} type="text" name="screenPincode" ref={(c) => this.screenPincode = c} />
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label className="col-form-label">Impressions Per Day</label>
                                    <input className="form-control" type="number" defaultValue={this.props.screenData.screenImpressions} name="impression" ref={(c) => this.impression = c} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label className="col-form-label">Gender Ratio</label>
                                    <input className="form-control" type="number" defaultValue={this.props.screenData.screenGenderRatio} name="gender_ratio" ref={(c) => this.gender_ratio = c} />
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
                                    <input className="form-control" type="number" defaultValue={this.props.screenData.screenPrice} name="price" ref={(c) => this.price = c} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div class="form-group">
                                    <label>Age Group Pref:</label><br />
                                    <div className="row">
                                        <div className="col-3">
                                            <div className="form-group">
                                                <label className="col-form-label">Generation Z</label>
                                                <input className="form-control" type="number" defaultValue={this.props.screenData.screenAgeGroupPref.generationZ} name="generationZ" onChange={this.handleAgeGroupChange} />
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="form-group">
                                                <label className="col-form-label">Generation Y</label>
                                                <input className="form-control" type="number" defaultValue={this.props.screenData.screenAgeGroupPref.generationY} name="generationY" onChange={this.handleAgeGroupChange} />
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="form-group">
                                                <label className="col-form-label">Generation X</label>
                                                <input className="form-control" type="number" defaultValue={this.props.screenData.screenAgeGroupPref.generationX} name="generationX" onChange={this.handleAgeGroupChange} />
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="form-group">
                                                <label className="col-form-label">Baby Boomers</label>
                                                <input className="form-control" type="number" defaultValue={this.props.screenData.screenAgeGroupPref.babyBoomers} name="babyBoomers" onChange={this.handleAgeGroupChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                        <MDBBtn color="primary" onClick={this.onSubmit}>Save changes</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}
export default TableEditButtons;