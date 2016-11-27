import React from 'react';
import rd3 from 'react-d3';

var BarChart = rd3.BarChart;
var LineChart = rd3.LineChart;
var PieChart = rd3.PieChart;
var AreaChart = rd3.AreaChart;
var Treemap = rd3.Treemap;
var ScatterChart = rd3.ScatterChart;
var CandleStickChart = rd3.CandleStickChart;
import TeamDetailStore from '../stores/TeamDetailStore.jsx';


export default class AssetDetailsChart extends React.Component{
    
    constructor(){
        super();
        this.state = {
            barData : [
      {
        "name": "Asset",
        "values": [
          { "x": 'Laptop' , "y":  0},
          { "x": 'Data Card' , "y": 0},
        ]
      }
    ],
            data :[],
        };
        
          TeamDetailStore.getAssetCount().then(function (res) {
              console.log(res);
             this.setState({
               data : res.data    });
           
              var asset = this.state.data;
        var bar = [];
        for (var i = 0; i < asset.length; i++) {
            var single = {};
            single['x'] = asset[i]._id;
            single['y'] = asset[i].y;
            bar.push(single);
        }
        console.log('bar');
        console.log(bar);
        this.setState({
               barData :[
      {
        "name": "Asset",
        "values": bar
      }
    ]
        });
              
  }.bind(this));
        
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