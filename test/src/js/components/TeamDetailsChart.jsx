import React from 'react';
import rd3 from 'react-d3';
import TeamDetailStore from '../stores/TeamDetailStore.jsx';

var BarChart = rd3.BarChart;
var LineChart = rd3.LineChart;
var PieChart = rd3.PieChart;
var AreaChart = rd3.AreaChart;
var Treemap = rd3.Treemap;
var ScatterChart = rd3.ScatterChart;
var CandleStickChart = rd3.CandleStickChart;


export default class TeamDetailsChart extends React.Component{
    
    constructor(){
        super();
        this.state = {
            pieData : [],
        };
        console.log('Chart Constructor');
        TeamDetailStore.getTeamCountByTrackWise().then(function (res) {
             this.setState({
               pieData : res.data,
           });
  }.bind(this));
    }
    
    render(){
        return(
        <PieChart
  data={this.state.pieData}
  width={500}
  height={250}
  radius={80}
  innerRadius={20}
  sectorBorderColor="white"
  title="Team Details"
/>
        );
    }
}