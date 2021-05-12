import React, { Component } from 'react';
import './App.css';
import { withRouter } from "react-router-dom";

const axios = require('axios');

class Home extends Component {
    constructor(props){
      super(props);
      this.state={       
          username:'',
          password:''             
      }
     
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

  
    handleSubmit = (e) => {              
        axios.post("/isLogin", {username: this.state.username, password: this.state.password}
         ).then(function(response){
          console.log(response.data.rs);         
          var success= response.data.rs;          
  
          if(success===0)
          alert("학번이 존재하지 않거나 비밀번호가 틀렸습니다");
          else
          {
              console.log("right");
              this.props.SIDChange(this.state.username);              
              this.props.history.push("/Mypage");
          }
        }.bind(this));
    }
  
    handleChange = (e) => {       
        this.setState({
          [e.target.name]: e.target.value
        });              
      }
    
    render(){
    
        return( 
          
            <div style={{display:'flex', flexDirection: 'column'}} className="loginForm">
              
              <h1>로그인</h1>
              <br/>
              <div class="idForm">
                <input type="text" className="id" placeholder="학번" value = {this.state.username}
                 onChange={this.handleChange} name = "username"></input>
              </div>
              <div class="passForm">
                <input type="password" className="pw" placeholder="비밀번호" value = {this.state.password}
                  onChange={this.handleChange} name="password"></input>
              </div>
              <h1>
                <button type="submit" className="btn" onClick={this.handleSubmit}>로그인</button>
              </h1>
              아직 회원이 아니신가요?
              <br/> 
              
              <div>               
                <button type="submit" className="btn" onClick={()=>{this.props.history.push('/newacc')}}>회원가입</button>
              </div>  
            </div> 
            
        );
      }
  }

  export default withRouter(Home)