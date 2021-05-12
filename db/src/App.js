//import responsiveObserve from 'antd/lib/_util/responsiveObserve';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Mypage from './Mypage';
import Home from './Home';
import JoinForm from './joinForm';
import Changepasswd from './changepasswd';
import ReadInfo from './ReadInfo';
import Enroll from './enroll';
import Viewfriend from './viewfriend';
import Notice from './notice';
import ViewGrade from './ViewGrade';

const axios = require('axios');

class App extends Component {
  constructor(props){
    super(props);
    this.state={     
      username: null,
      password: null,      
      friendname: null,
      sel_course: null,
      SID: '',
   
    }
    this.SIDChange = this.SIDChange.bind(this)  
    this.pwChange = this.pwChange.bind(this)  
    this.courseChange = this.courseChange.bind(this)  
  }

  SIDChange = (sid) => {
    this.setState({
      SID : sid
    })
  }
  

  pwChange = (e) => {
    this.setState({
      password : e.target.value
    })
  }

  courseChange = (course) => {
    this.setState({
      sel_course : course
    })
  }
  
  render(){
          return( 
        <Router>  
            <Route path="/" exact render={() => <Home SIDChange={this.SIDChange} />}/>
            <Route path="/newacc"  component={JoinForm}/>
            <Route path="/Mypage"  render={() => <Mypage SID={this.state.SID} courseChange ={this.courseChange} />} />
            <Route path="/viewGrade"  render={() => <ViewGrade SID={this.state.SID} />} />
            <Route path="/enroll"  render={() => <Enroll SID={this.state.SID} />} />
            <Route path="/watch"  render={() => <Viewfriend SID={this.state.SID} />} />
            <Route path="/changepw" render={() => <Changepasswd SID={this.state.SID} />} />
            <Route path="/seemine"  render={() => <ReadInfo SID={this.state.SID} />} />
            <Route path="/notice" render={() => <Notice C_name={this.state.sel_course} />} />
            
      </Router> 
          
      );
   
  }
}
export default App;
