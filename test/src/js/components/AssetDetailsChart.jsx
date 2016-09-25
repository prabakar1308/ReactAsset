import React from 'react';
import rd3 from 'react-d3';

var BarChart = rd3.BarChart;
var LineChart = rd3.LineChart;
var PieChart = rd3.PieChart;
var AreaChart = rd3.AreaChart;
var Treemap = rd3.Treemap;
var ScatterChart = rd3.ScatterChart;
var CandleStickChart = rd3.CandleStickChart;


export default class AssetDetailsChart extends React.Component{
    
    constructor(){
        super();
        this.state = {
            barData : [
      {
        "name": "Asset",
        "values": [
          { "x": 'Laptop' , "y":  5},
          { "x": 'Data Card' , "y": 2},
        ]
      }
    ],
        };
    }
    
    render(){
        return(
        <BarChart
                  data={this.state.barData}
                  width={500}
                  height={250}
                  fill={'#3182bd'}
                  title='Asset Details'
            yAxisLabel='Count'
            xAxisLabel='Assets'/>
        );
    }
}