import React, { Component } from 'react';
import AUX from '../../../../hoc/Aux_';
import ReviewCard from './ReviewCard'

class ReviewCards extends Component {


    render(){
        // console.log(this.props.reviewPendingAdvList);

        return<div className="row">
            {this.props.reviewPendingAdvList.map(item => item.screens.length?
            <ReviewCard advId={item.advId} advScreens={item.screens} key={item.advId} advData={item.advData} />:<div></div>)}
            </div>
    }

};
export default ReviewCards;
