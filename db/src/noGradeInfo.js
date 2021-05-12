import { logDOM } from '@testing-library/react';
import { urlencoded } from 'body-parser';
import React, { Component } from 'react';
import ViewGrade from './ViewGrade';
import Viewfriend from './viewfriend'
import Enroll from './enroll';
import Changepasswd from './changepasswd';
import App from './App';
import './App.css';
import ReadInfo from './ReadInfo';
import Notice from './notice';
import Gradeinfo from './gradeinfo';
import Mypage from './Mypage';
//import { Switch } from 'antd';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
const axios = require('axios');
class NoGradeInfo extends Component{
  constructor(props){
    super(props);
    this.state={
      goPage: 0
    }
  }
  handleSubmit1 = (e) => {
    //e.preventDefault();
    this.setState({
      goPage: 1 // 마이페이지
    })
  }
  render(){
      if(this.state.goPage===0){
          return(
            <div className='box2'>
            <h1 className='Header'>수강/성적 조회</h1><br />

            <h1>성적 정보가 없습니다</h1>

            <br /><br />
            <h2 align='center'>2020-2학기 성적</h2><br />
            <table border="1" className='type08'  
              cellPadding="0" cellSpacing="0" width="600px" >
                <thead>
                  <tr>
                    <th scope="cols" align ="center" width="40%">과목명</th>
                    <th scope="cols" align ="center" width="60%">학점</th>
                  </tr>
                </thead>
            </table> 
            <div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <button className='btn3' type="submit" onClick={this.handleSubmit1}>뒤로가기</button> 
                <br/> <br/><br/>                 
            </div> 
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
            
          );
      }
      else{
        return(
        <div>
          <Mypage SID={this.props.SID}></Mypage>
        </div>
        );
      }
  }

}

export default NoGradeInfo;