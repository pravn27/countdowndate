import React, {Component} from 'react';
import Clock from './Clock';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      deadline: "December 25, 2020",
      newDeadline: "",
      errorDisplay: false
    }
  }

  changeDeadline(){
    // Date validation
    if(Date.parse(this.state.newDeadline) > Date.parse(new Date())){
      this.setState({
        deadline: this.state.newDeadline, newDeadline: ""
      })
    } else {
      this.setState({errorDisplay: true});
    }
  }

  render(){
    return(
      <div className="App">
        <h2><span>Countdown to</span> {this.state.deadline}</h2>
        <div className="resultContainer">
          <Clock deadline={this.state.deadline}/>
        </div>
        <div className="formContainer">
          <input autoFocus type="text" value={this.state.newDeadline} placeholder="April 27, 2019" onChange={(e) => this.setState({newDeadline: e.target.value, errorDisplay: false})}/>
          <button onClick={() => this.changeDeadline()}>Countdown Start</button>
        </div>
        {
          this.state.errorDisplay ? <span className="errorMessage">Error: Enter date in "April 27, 2019" format & should be greater than Today's date</span> : false
        }
      </div>
    )
  }
}