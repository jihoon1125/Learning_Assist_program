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
//import { Switch } from 'antd';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
const axios = require('axios');
class Mypage extends Component{
  constructor(props){
    super(props);
    this.state={
      cnt: null,
      grade: 0,
      name: null,
      sid: null,
      course: [],
      time: [],
      goPage: 0,
      sel_course: '',
    }
    
  }
  componentDidMount = () => {
    //마이페이지
   // e.preventDefault();
    axios.post('/Mypage', {id: this.props.SID}
      ).then(function(response){
        this.setState({
          name: response.data.rows3[0].S_name,
        });

        if(response.data.rows1[0].cnt!==0)
        {
        this.setState({
          cnt: response.data.rows1[0].cnt,
        });
        
        for(var i=0; i<this.state.cnt; ++i){
          this.setState({
            course: this.state.course.concat(response.data.rows2[i].C_name),
            time: this.state.time.concat(response.data.rows2[i].Ptime)
          });
        }
      }
      }.bind(this));
    }
    handleSubmit1 = (e) => {
      e.preventDefault();
      this.setState({
        goPage: 1 // 수강신청
      })
    }
    handleSubmit2 = (e) => {
      e.preventDefault();
      this.setState({
        goPage: 2 // 
      })
    }

    handleSubmit3 = (e) => {
      e.preventDefault();
      this.setState({
        goPage: 3 // 
      })
    }

    handleSubmit4 = (e) => {
      console.log("hh");
      e.preventDefault();
      this.setState({
        goPage: 4 // 
      })
    }

    handleSubmit5 = (e) => {
      console.log("qq");
      e.preventDefault();
      this.setState({
        goPage: 5 // 
      })
    }

    handleSubmit6 = (e) => {
      console.log("aa");
      //e.preventDefault();
      this.setState({
        goPage: 6 // 
      })
    }
    handleSubmit7 = (course) => {
      console.log("ㅄ");
      this.setState({
        sel_course: course,
        goPage: 7 // 
      })
    }
    handleBack = (e) => {
      console.log("ㅄ");
      e.preventDefault();
      this.setState({        
        goPage: 0 // 
      })
    }
  
    render(){
      console.log('Mypage render');
      console.log(this.state.goPage);
      var list=[];
      const list1 = this.state.course;
      for(var b = 0; b < this.state.cnt; ++b){
        list[b] = <Gradeinfo C_name={list1[b]} Grade={list1} notice = {true} handlesubmit={this.handleSubmit7}></Gradeinfo>
      }
      var array = [
        ['#f2d8d8', null], ['#fbabab', null], ['#f7dda0', null], ['#deef70', null], ['#a3ee5c', null],
        ['#f7dda0', null], ['#deef70', null], ['#f2d8d8', null], ['#fbabab', null], ['#a3ee5c', null],
        ['#cbe8af', null], ['#b0f7de', null], ['#5ff3fa', null], ['#54a7e7', null], ['#c6d2eb', null],
        ['#5ff3fa', null], ['#54a7e7', null], ['#cbe8af', null], ['#b0f7de', null], ['#c6d2eb', null],
        ['#cfbef8', null], ['#f2c9e5', null], ['#e1a141', null], ['#d6edce', null], ['#d5d56b', null],
        ['#e1a141', null], ['#d6edce', null], ['#cfbef8', null], ['#f2c9e5', null], ['#d5d56b', null],
      ]
      for(var i=0; i<this.state.cnt; ++i){
        if(this.state.time[i] === '월수12'){
          array[0][1] = this.state.course[i];
          array[7][1] = this.state.course[i];
        }
        else if(this.state.time[i] === '월수34'){
          array[10][1] = this.state.course[i];
          array[17][1] = this.state.course[i];
        }
        else if(this.state.time[i] === '월수56'){
          array[20][1] = this.state.course[i];
          array[27][1] = this.state.course[i];
        }
        else if(this.state.time[i] === '월수21'){
          array[5][1] = this.state.course[i];
          array[2][1] = this.state.course[i];
        }
        else if(this.state.time[i] === '월수43'){
          array[15][1] = this.state.course[i];
          array[12][1] = this.state.course[i];
        }
        else if(this.state.time[i] === '월수65'){
          array[25][1] = this.state.course[i];
          array[22][1] = this.state.course[i];
        }
        else if(this.state.time[i] === '화목12'){
          array[1][1] = this.state.course[i];
          array[8][1] = this.state.course[i];
        }
        else if(this.state.time[i] === '화목34'){
          array[11][1] = this.state.course[i];
          array[18][1] = this.state.course[i];
        }
        else if(this.state.time[i] === '화목56'){
          array[21][1] = this.state.course[i];
          array[28][1] = this.state.course[i];
        }
        else if(this.state.time[i] === '화목21'){
          array[6][1] = this.state.course[i];
          array[3][1] = this.state.course[i];
        }
        else if(this.state.time[i] === '화목43'){
          array[16][1] = this.state.course[i];
          array[13][1] = this.state.course[i];
        }
        else if(this.state.time[i] === '화목65'){
          array[26][1] = this.state.course[i];
          array[23][1] = this.state.course[i];
        }
        else if(this.state.time[i] === '금12'){
          array[4][1] = this.state.course[i];
          array[9][1] = this.state.course[i];
        }
        else if(this.state.time[i] === '금34'){
          array[14][1] = this.state.course[i];
          array[19][1] = this.state.course[i];
        }
        else if(this.state.time[i] === '금56'){
          array[24][1] = this.state.course[i];
          array[29][1] = this.state.course[i];
        }   
      }
      for(var j=0; j<30; ++j){
        if(array[j][1] === null){  // 과목정보가 없으면
          array[j][0] = 'White';  // 표를 흰색으로 칠함
        }
      }
     
      var n = null;
      
      if(this.state.goPage === 0){
        return(
          <form action='/Mypage' onSubmit={this.handleSubmit2} className='box2'>
            
            <h1 className='Header' align="center">{this.state.name} 님의 시간표</h1>
            
            <table border="1" style={{width:600}} className='type09'>
              <caption>{this.state.name}의 2020년도 2학기의 시간표 입니다.</caption>
                <thead>
                <tr>
                  <th> </th>
                  <th>월</th>
                  <th>화</th>
                  <th>수</th>
                  <th>목</th>   
                  <th>금</th>
                </tr>
                </thead>
                <tbody>
                  <tr>
                  <th>1교시</th>
                  <td style = {{background : array[0][0]  }}> {array[0][1]} </td>
                  <td style = {{background : array[1][0]  }}> {array[1][1]} </td>
                  <td style = {{background : array[2][0]  }}> {array[2][1]} </td>
                  <td style = {{background : array[3][0]  }}> {array[3][1]} </td>
                  <td style = {{background : array[4][0]  }}> {array[4][1]} </td>
                </tr>
                  <tr>
                  <th>2교시</th>
                  <td style = {{background : array[5][0]  }}> {array[5][1]} </td>
                  <td style = {{background : array[6][0]  }}> {array[6][1]} </td>
                  <td style = {{background : array[7][0]  }}> {array[7][1]} </td>
                  <td style = {{background : array[8][0]  }}> {array[8][1]} </td>
                  <td style = {{background : array[9][0]  }}>  {n}</td>
                </tr>
                  <tr>
                  <th>3교시</th>
                  <td style = {{background : array[10][0]  }}> {array[10][1]} </td>
                  <td style = {{background : array[11][0]  }}> {array[11][1]} </td>
                  <td style = {{background : array[12][0]  }}> {array[12][1]} </td>
                  <td style = {{background : array[13][0]  }}> {array[13][1]} </td>
                  <td style = {{background : array[14][0]  }}> {array[14][1]} </td>
                </tr>
                <tr>
                  <th>4교시</th>
                  <td style = {{background : array[15][0]  }}> {array[15][1]} </td>
                  <td style = {{background : array[16][0]  }}> {array[16][1]} </td>
                  <td style = {{background : array[17][0]  }}> {array[17][1]} </td>
                  <td style = {{background : array[18][0]  }}> {array[18][1]} </td>
                  <td style = {{background : array[19][0]  }}> {n} </td>
                </tr>
                <tr>
                  <th>5교시</th>
                  <td style = {{background : array[20][0]  }}> {array[20][1]} </td>
                  <td style = {{background : array[21][0]  }}> {array[21][1]} </td>
                  <td style = {{background : array[22][0]  }}> {array[22][1]} </td>
                  <td style = {{background : array[23][0]  }}> {array[23][1]} </td>
                  <td style = {{background : array[24][0]  }}> {array[24][1]} </td>
                </tr>
                <tr>
                  <th>6교시</th>
                  <td style = {{background : array[25][0]  }}> {array[25][1]} </td>
                  <td style = {{background : array[26][0]  }}> {array[26][1]} </td>
                  <td style = {{background : array[27][0]  }}> {array[27][1]} </td>
                  <td style = {{background : array[28][0]  }}> {array[28][1]} </td>
                  <td style = {{background : array[29][0]  }}> {n} </td>
                </tr>
                </tbody>
              </table>
              <br /><br />

              <h1 align='center'>* 과목별 공지사항 *</h1><br />
              <div>
              {list}
              </div>

              <br /><br /> <br /><br />
              <button className='btn3' onClick={this.handleSubmit1}>수강 신청</button><br/><br/>  <button className='btn3' onClick={this.handleSubmit2}>성적조회</button>
              <br/><br/>
              <button className='btn3' onClick={this.handleSubmit3}>친구 시간표 구경하기</button>
              <br/><br/>
              <button className='btn3' onClick={this.handleSubmit4}>비밀번호 변경하기</button>
              <br/><br/>
              <button className='btn3' onClick={this.handleSubmit6}>개인정보조회</button>             
              <br/><br/>
              <button className='btn3' onClick={this.handleSubmit5}>로그아웃</button>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </form>
        );
      }

      
      else if(this.state.goPage === 1){
          return(
            <Enroll SID={this.props.SID}></Enroll>
          );
      }

      else if(this.state.goPage ===2){
        return(
          <ViewGrade SID={this.props.SID}></ViewGrade>
        );
      }

      else if(this.state.goPage ===3){
        return(
          <Viewfriend SID={this.props.SID}></Viewfriend>
        );

      }

      else if(this.state.goPage===4){
        return(
          <Changepasswd SID={this.props.SID}></Changepasswd>
        );
      }

      else if(this.state.goPage===5){
        return(
          <App/>
        );
      }
      else if(this.state.goPage===6){
        return(
          <ReadInfo SID={this.props.SID}></ReadInfo>
        );
      }
      else {
        return(<Notice C_name={this.state.sel_course} Goback={this.handleBack}></Notice>);
      }
    }
}

export default Mypage;