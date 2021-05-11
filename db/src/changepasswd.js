import React, { Component } from 'react';
import './App.css';
import App from './App'
const axios = require('axios');

class Changepasswd extends Component {
    state = {      
        password: '',
        sid: '',
        success:0
    }
 
    handleChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value//computed property names
        })
    }

    handleGoback = (e) => {
        e.preventDefault(); 
        this.setState({success: 1})
    }
   
    handleSubmit = (e) => {       
       
        e.preventDefault(); 
      
       // 상태값을 onCreate를 통하여 부모에게 전달
       console.log(this.state);
       
                                
              if(this.state.password === "")
              {
                  alert("변경할 비밀번호 입력 하세요");                                    
                  return;
              }
             
              else{
                  
                  axios.post('http://localhost:4000/changepw',{username: this.props.SID, password: this.state.password}                                                
                  ).then(function(response) {
                      console.log(response);
                     })        
                  alert("비밀번호 변경이 완료 되었습니다!"); 
                  this.setState({success:1});                                   
              }
              
  }

render() {
    if(this.state.success === 0){
    return (        
        <div className="box2">
            <h1 className= "Header"> 비밀번호 변경 </h1>
            <br/><br/><br/>
            <div>
            <div className = "Join1">비밀번호</div>
            <div className = "Join2">
            <input
            type = "password"
            value={this.state.password}
            onChange={this.handleChange}//TEXT바뀔때마다 발생하는 EVENT
            name= "password"
            id="password"
            className="Box"
            maxLength= {20}
            />
            <button className="button2" onClick={this.handleSubmit}>변경</button>
            </div>
            </div>
            <br/>

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br />
            </div>
          
          
    );
    }

    else{
        return(
            <App></App>
        );
    }
}


}

export default Changepasswd;

     