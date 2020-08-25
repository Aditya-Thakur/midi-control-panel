import React , {Component } from 'react';
import { connect } from 'react-redux';
import {Doughnut} from 'react-chartjs-2';

const data = {
	labels: [
		'one',
		'two',
		'three'
	],
	datasets: [{
		data: [300, 500 , 200],
		backgroundColor: [
			'#7a6fbe',
			'#29bbe3',
			'#f4c63d'
		],
		hoverBackgroundColor: [
			'#7a6fbe',
			'#29bbe3',
			'#f4c63d'
		]
	}]
};
          
  class Donut extends Component{
			
			render() {
				return (
				  <div>
					<Doughnut height={265} data={data} />
				  </div>
				);
			  }
			}

const mapStatetoProps = state =>{
    return {
        tiny_data :state.tiny_red.tinydata
    };
  }
 
  
    export default connect(mapStatetoProps,null)(Donut);