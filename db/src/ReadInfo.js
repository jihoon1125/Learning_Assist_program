import { logDOM } from '@testing-library/react';
import { urlencoded } from 'body-parser';
import React, { Component } from 'react';
import './App.css';
import { withRouter } from "react-router-dom";
import Mypage from './Mypage';
const axios = require('axios');
class ReadInfo extends Component{
  constructor(props){
    super(props);
    this.state={
      name: '',        
      phone: '',       
      addr: '',
      email: '',
      major: '',
      sid: '',
      account: '',
      goPage: 0,
    }
  }

  handleSubmit2 = (e) => {
    e.preventDefault();
    this.setState({
      goPage: 1 // 마이페이지로 간다
    })
  }

  componentDidMount = () => {
    //e.preventDefault();
    axios.post('/ReadInfo', {id: this.props.SID}
      ).then(function(response){
        console.log('readinfo page');
        console.log(response.data);
        this.setState({
          name: response.data.rows1[0].S_name,
          phone: response.data.rows1[0].Phone,
          addr: response.data.rows1[0].Address,
          email: response.data.rows1[0].Email,
          major: response.data.rows1[0].Major,
          sid: response.data.rows1[0].SID,
          account: response.data.rows1[0].S_account,
        });
      }.bind(this));
  }
  render(){    
        return(
            <div align='center'>  

                <table border="1" style={{width:600}} className='type09'>
                <caption>{this.state.name}님의 개인정보조회</caption>
                <thead>
                <tr>
                  <th>제목</th>
                  <th>내용</th>
                  
                </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> 이름 </td>
                    <td> {this.state.name} </td>
                  </tr>
                  <tr>
                    <td> 학번 </td>
                    <td> {this.state.sid} </td>
                  </tr>
                  <tr>
                    <td> 전공 </td>
                    <td> {this.state.major} </td>
                  </tr>
                  <tr>
                    <td> 연락처 </td>
                    <td> {this.state.phone} </td>
                  </tr>
                  <tr>
                    <td> 이메일 </td>
                    <td> {this.state.email} </td>
                  </tr>
                  <tr>
                    <td> 주소 </td>
                    <td> {this.state.addr} </td>
                  </tr>
                  <tr>
                    <td> 계좌번호 </td>
                    <td> {this.state.account} </td>
                  </tr>

                  
                </tbody>
                </table>
	            <div>
                    <button className='btn3' type="submit" onClick={this.props.history.goBack}>뒤로가기</button> 
                    <br/> <br/><br/>                 
                </div>   
            </div>
 
            
        );    
    
  }
}

export default withRouter(ReadInfo);
