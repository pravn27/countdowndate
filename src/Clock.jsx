import React, {Component} from 'react';

export default class Clock extends Component{
  constructor(props){
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount(){
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount(){
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  getTimeUntil(deadline){
    const timeDiff = Date.parse(deadline) - Date.parse(new Date());
    const days = Math.floor(timeDiff/(1000*60*60*24));
    const hours = Math.floor(timeDiff/(1000*60*60) % 24);
    const minutes = Math.floor((timeDiff/1000/60) % 60);
    const seconds = Math.floor((timeDiff/1000) % 60);
    this.setState({ days, hours, minutes, seconds });
  }

  leadingZeroNum(number){
    return number < 10 ? "0"+number : number;
  }

  render(){
    return(
      <div className="clockContainer">
        <div className="Clock-days">{this.leadingZeroNum(this.state.days)} <span>days</span></div>
        <div className="Clock-hours">{this.leadingZeroNum(this.state.hours)} <span>hours</span></div>
        <div className="Clock-minutes">{this.leadingZeroNum(this.state.minutes)} <span>minutes</span></div>
        <div className="Clock-seconds">{this.leadingZeroNum(this.state.seconds)} <span>seconds</span></div>
      </div>
    )
  }
}