import React, { Component } from 'react';
import './App.css';
import App from './App'
const axios = require('axios');

class JoinForm extends Component {
    state = {
        name: '',        
        phone: '',       
        addr: '',
        email: '',
        major: '',
        sid: '',
        account: '',
        password: '',
        success: 0
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
       
                                if(this.state.name === "")
                                {
                                    alert("아이디를 꼭 입력 하세요");                                    
                                    return;
                                }
                                else if(this.state.sid === "")
                                {
                                    alert("학번을 꼭 입력 하세요");                                    
                                    return;
                                }
                                else if(this.state.major === "")
                                {
                                    alert("학과를 꼭 입력 하세요");                                    
                                    return;
                                }
                                else if(this.state.password === "")
                                {
                                    alert("비밀번호 꼭 입력 하세요");                                    
                                    return;
                                }
                                else if(this.state.addr === "")
                                {
                                    alert("주소를 꼭 입력 하세요");                                    
                                    return;
                                }
                               
                                else if(this.state.phone === "")
                                {
                                    alert("연락처를 입력 하세요");                                    
                                    return;
                                }

                                else if(this.state.email === "")
                                {
                                    alert("이메일을 입력 하세요");                                    
                                    return;
                                }
                                else if(this.state.account === "")
                                {
                                    alert("계좌를 입력 하세요");                                    
                                    return;
                                }                                
                                
                                else{
                                    axios.post('http://localhost:4000/join',{data: this.state}                                                
                                    ).then(function(response) {
                                        if(response.data==="완료"){
                                            alert("회원가입이 완료 되었습니다!");
                                            this.setState({success:1}); 
                                        }    
                                        else 
                                            alert("이미 존재하는 학번입니다."); 
                                            
                                       }.bind(this))                                         
                                }
                                
                    }

render() {
    if(this.state.success === 0){
    return (        
        <div className="joinForm">
            <h1 className= "Header">  회 원 가 입 </h1>
            <div>  
            <br/><br/> 
            <div className="Join1">이름</div>            
            <div className="Join2" ><input
            value={this.state.name}
            onChange={this.handleChange}//TEXT바뀔때마다 발생하는 EVENT
            name = "name"//input의 name 속성
            id = "name"
            className="Box"                     
            maxLength= {10}
            /></div>
            </div>        
            <br/>

            <div>
            <div className="Join1">학번</div>
            <div className="Join2"><input
            value={this.state.sid}
            onChange={this.handleChange}//TEXT바뀔때마다 발생하는 EVENT
            name = "sid"//input의 name 속성
            id = "sid"
            className="Box"
            maxLength= {10}
            /></div>
            </div>
            <br/>

            <div>
            <div className = "Join1">전공</div>
            <div className = "Join2"><input
            value={this.state.major}
            onChange={this.handleChange}//TEXT바뀔때마다 발생하는 EVENT
            name= "major"
            id = "major"
            className="Box"
            maxLength= {15}
            /></div>
            </div>
            <br/>
            
            <div>
            <div className = "Join1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;비밀번호</div>
            <div className = "Join2">
            <input
            type = "password"
            value={this.state.password}
            onChange={this.handleChange}//TEXT바뀔때마다 발생하는 EVENT
            name= "password"
            id="password"
            className="Box"
            maxLength= {20}
            /></div>
            </div>
            <br/>

            <div>
            <div className = "Join1">주소</div>
            <div className = "Join2">
            <input
            value={this.state.addr}
            onChange={this.handleChange}//TEXT바뀔때마다 발생하는 EVENT
            name= "addr"
            id="addr"
            className="Box"
            maxLength= {30}
            /></div>
            </div>
            <br/>

            <div>
            <div className = "Join1"> &nbsp;&nbsp;연락처</div>
            <div className = "Join2">                  
            <input
            placeholder="'-' 기호는 생략"
            value={this.state.phone}
            onChange={this.handleChange}//TEXT바뀔때마다 발생하는 EVENT
            name= "phone"
            id="phone"
            className="Box"
            maxLength= {11}
            /></div>
            </div>
            <br/>

            <div>
            <div className = "Join1"> &nbsp;&nbsp;이메일</div>
            <div className = "Join2">
            <input
            value={this.state.email}
            onChange={this.handleChange}//TEXT바뀔때마다 발생하는 EVENT
            name= "email"
            id="email"
            className="Box"
            maxLength= {30}
            /></div>
            </div>
            <br/>

            <div>
            <div className = "Join1"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;계좌번호</div>
            <div className = "Join2">
            <input
            value={this.state.account}
            onChange={this.handleChange}//TEXT바뀔때마다 발생하는 EVENT
            name= "account"
            id="account"
            className="Box"
            maxLength= {20}
            /></div>
            </div>    
            <br/>              
           
            <br/>            
            <div className = "Join2">
            <button type="submit" onClick={this.handleSubmit}>가입하기</button> &nbsp;&nbsp; <button type="submit" onClick={this.handleGoback}>뒤로가기</button>  
            <br/> <br/><br/>                 
            </div>    
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

export default JoinForm;

     