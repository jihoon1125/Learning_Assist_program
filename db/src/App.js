//import responsiveObserve from 'antd/lib/_util/responsiveObserve';
import React, { Component } from 'react';
import './App.css';
import Mypage from './Mypage';
import JoinForm from './joinForm';
const axios = require('axios');

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginRs: null,
      username: null,
      password: null,
      success: 0,
      SID: '',
   
    }
    this.idChange = this.idChange.bind(this)
    this.pwChange = this.pwChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  
  idChange = (e) => {
    this.setState({
      username : e.target.value
    })
  }

  pwChange = (e) => {
    this.setState({
      password : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/isLogin", {username: this.state.username, password: this.state.password}
      ).then(function(response){
        console.log(response.data.rs);
        this.setState({
          success: response.data.rs
        });

        if(this.state.success===0)
        alert("학번이 존재하지 않거나 비밀번호가 틀렸습니다");
      }.bind(this));

      
  }


  handleJoin = (e) => {
     e.preventDefault();
    this.setState({success: 2});
  }

  
  render(){
    console.log('success');
    console.log(this.state.success); 
    
    if(this.state.success === 0){     

      return( 
          
          <div style={{display:'flex', flexDirection: 'column'}} 
             onSubmit={this.handleSubmit} className="loginForm">
            <h1>로그인</h1>
            <br/>
            <div class="idForm">
              <input type="text" className="id" placeholder="학번"
               onChange={this.idChange} name = "username"></input>
            </div>
            <div class="passForm">
              <input type="password" className="pw" placeholder="비밀번호"
                onChange={this.pwChange} name="password"></input>
            </div>
            <h1>
              <button type="submit" className="btn" onClick={this.handleSubmit}>로그인</button>
            </h1>
            아직 회원이 아니신가요?
            <br/> 
            <div>
              <button type="submit" className="btn" onClick={this.handleJoin}>회원가입</button>
            </div>
          </div>

          
      );
    }
    else if(this.state.success === 1){
      return(
        <div>
          <Mypage SID={this.state.username}>
          </Mypage>
        </div>
      );
    }

    else{
      return(
        <div>
          <JoinForm>
          </JoinForm>
        </div>
      );
    }
  }
}
export default App;