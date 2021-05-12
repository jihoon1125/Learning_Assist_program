import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import './App.css';
import Gradeinfo from './gradeinfo';
import { withRouter } from "react-router-dom";
import Mypage from './Mypage';

const axios = require('axios');
class ViewGrade extends Component{
  constructor(props){
    super(props);
    this.state={
      totalCredit: null,
      Avgmajor: null,
      AvgGyo: null,
      Avgtotal: null,
      courseInfo: [],
      gradeInfo: [],
      cnt:0,
      goPage:0
    }
   
  }


  handleGoback = (e) => {
    e.preventDefault();
    this.setState({
      goPage: 1
    })
  }

  componentDidMount = () => {
    //마이페이지
    //e.preventDefault();
    axios.post('/ViewGrade', {id: this.props.SID}
      ).then(function(response){
        console.log('viewgrade page');
        console.log(response.data);
        if(response.data.rows1[0].SUM===null)
        {
          this.setState({
            totalCredit: 0,
            Avgmajor: 0,
            AvgGyo: 0,
            Avgtotal: 0
          });
        }
       
        else{
          this.setState({
            cnt: response.data.rows4[0].cnt
          })
          this.setState({
            totalCredit: response.data.rows1[0].SUM,
            Avgmajor: response.data.rows2[0].AA,
            AvgGyo: response.data.rows2[1].AA,
            Avgtotal: response.data.rows3[0].BB
          });
          for(var k=0; k < this.state.cnt; k++){
            this.setState({
              courseInfo: this.state.courseInfo.concat(response.data.rows5[k].C_name),
              gradeInfo: this.state.gradeInfo.concat(response.data.rows5[k].Grade)
            })
          }
  
      }
      }.bind(this));
    
  }

    render(){
      
      var array=[];
      for(var n=0; n<this.state.cnt; n++){
        array[n] = this.state.gradeInfo[n];
      }
      for(var m=0; m<this.state.cnt; m++){
        if(array[m] === 4.5){
          array[m] = 'A+';
        }
        else if(array[m] === 4.0){
          array[m] = 'A0';
        }
        else if(array[m] === 3.5){
          array[m] = 'B+';
        }
        else if(array[m] === 3.0){
          array[m] = 'B0';
        }
        else if(array[m] === 2.5){
          array[m] = 'C+';
        }
        else if(array[m] === 2.0){
          array[m] = 'C0';
        }
        else if(array[m] === 1.5){
          array[m] = 'D+';
        }
        else if(array[m] === 1.0){
          array[m] = 'D0';
        }
        else if(array[m] === 0.5){
          array[m] = 'F';
        }
        else if(array[m] === 0.0){
          array[m] = '미입력';
        }
      }


      const options1 = {
        legend: {
            display: false, // label 보이기 여부
        },
        title: {
          display: true,
          text: '전공평점'
        },
        layout:{
          left: 20
        },
        scales: {
          xAxes: [{
            maxBarThickness: 20
          }],
          yAxes: [{
            ticks: { 
              min: 0, // y축 스케일에 대한 최소값 설정
              stepSize: 0.5, // y축 그리드 한 칸당 수치
            }
          }]
        },
        // false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
        // true : 크기가 알아서 결정됨.
        maintainAspectRatio: false 
      }
      const options2 = {
        legend: {
            display: false, // label 보이기 여부
        },
        title: {
          display: true,
          text: '교양평점'
        },
        scales: {
          xAxes: [{
            maxBarThickness: 20
          }],
          yAxes: [{
            ticks: { 
              min: 0, // y축 스케일에 대한 최소값 설정
              stepSize: 0.5, // y축 그리드 한 칸당 수치
            }
          }]
        },
        // false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
        // true : 크기가 알아서 결정됨.
        maintainAspectRatio: false 
      }
      const options3 = {
        legend: {
            display: false, // label 보이기 여부
        },
        title: {
          display: true,
          text: '전체평점'
        },
        
        scales: {
          xAxes: [{
            maxBarThickness: 20
          }],
          yAxes: [{
            ticks: { 
              min: 0, // y축 스케일에 대한 최소값 설정
              stepSize: 0.5, // y축 그리드 한 칸당 수치
            }
          }]
        },
        // false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
        // true : 크기가 알아서 결정됨.
        maintainAspectRatio: false 
      }
      const data1 = {
          // 각 막대별 라벨
          labels: ['2018-2', '2019-1', '2019-2', '2020-1', '2020-2'],
          datasets: [
            {
              borderWidth:1, // 테두리 두께
              data: [4.1, 3.0, 3.0, 4.5, (this.state.Avgmajor + 0.0).toFixed(2)], // 학기 별 평점 (전공)
              backgroundColor:['#ffee88','lightgreen','pink','skyblue','#c19ee5'] // 각 막대 색
            }
          ]
          
      };
      const data2 = {
        // 각 막대별 라벨
        labels: ['2018-2', '2019-1', '2019-2', '2020-1', '2020-2'],
        datasets: [
          {
            borderWidth:1, // 테두리 두께
            data: [4.3, 3.5, 4.0, 4.0, (this.state.AvgGyo + 0.0).toFixed(2)], // 학기 별 평점 (교양)
            backgroundColor:['#ffee88','lightgreen','pink','skyblue','#c19ee5'] // 각 막대 색
          }
        ]
      };
      const data3 = {
        // 각 막대별 라벨
        labels: ['2018-2', '2019-1', '2019-2', '2020-1', '2020-2'],
        datasets: [
          {
            borderWidth:1, // 테두리 두께
            data: [4.2, 3.25, 3.5, 4.25, (this.state.Avgtotal + 0.0).toFixed(2)], // 학기 별 평점 (토탈)
            backgroundColor:['#ffee88','lightgreen','pink','skyblue','#c19ee5'] // 각 막대 색
          }
        ]
      };
      console.log('ViewGrade render');

      var list=[];
      const list1 = this.state.courseInfo;
      const list2 = array;
      for(var b = 0; b < this.state.cnt; ++b){
        list[b] = <Gradeinfo C_name={list1[b]} Grade={list2[b]}></Gradeinfo>
      }

      console.log(list1, list2);
      
      return(
        <div className='box2'>
          <h1 className='Header'>수강/성적 조회</h1><br />
            <table border="2" className='type08' width="700px" height="300px" >
              <thead>
                <tr>
                  <th scope="cols" align ="center" width="25%">학기</th>
                  <th scope="cols" align ="center">취득 학점</th>
                  <th scope="cols" align ="center">전공 평점</th>
                  <th scope="cols" align ="center">교양 평점</th>
                  <th scope="cols" align ="center">전체 평점</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th align ="center">2020-2</th>
                  <td>{this.state.totalCredit}</td>
                  <td>{(this.state.Avgmajor+0.0).toFixed(2)}</td>
                  <td>{(this.state.AvgGyo+0.0).toFixed(2)}</td>
                  <td>{(this.state.Avgtotal+0.0).toFixed(2)}</td>
                </tr>
                <tr>
                  <th align ="center">2020-1</th>
                  <td>20</td>
                  <td>4.5</td>
                  <td>4.0</td>
                  <td>4.25</td>
                </tr>
                <tr>
                  <th align ="center">2019-2</th>
                  <td>21</td>
                  <td>3.0</td>
                  <td>4.0</td>
                  <td>3.5</td>
                </tr>
                <tr>
                  <th align ="center">2019-1</th>
                  <td>20</td>
                  <td>3.0</td>
                  <td>3.5</td>
                  <td>3.25</td>
                </tr>
                <tr>
                  <th align ="center">2018-2</th>
                  <td>19</td>
                  <td>4.1</td>
                  <td>4.3</td>
                  <td>4.2</td>
                </tr>
                <tr>
                  <th align ="center">종합</th>
                  <td>{this.state.totalCredit+80}</td>
                  <td>{((this.state.Avgmajor+14.6) / 5).toFixed(2)}</td>
                  <td>{((this.state.AvgGyo+15.8) / 5).toFixed(2)}</td>
                  <td>{((this.state.Avgtotal+15.2) / 5).toFixed(2)}</td>
                </tr>
              </tbody>
            </table> 

          <br /><br />
          <td><div style={{width: "30vw"}}></div></td> 
          <td>
            <div style={{width:250}} >
              <Bar
                data={data1}
                options={options1}
                height={300}
                
              />
            </div>
          </td>
          <td>
            <div style={{width:250}} >
              <Bar
                data={data2}
                options={options2}
                height={300}
                
              />
            </div>
          </td>
          <td>
            <div style={{width:250}} >
              <Bar
                data={data3}
                options={options3}
                height={300}
                
              />
            </div>
          </td>
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
          <tr />
          <div>
            {list}
          </div>
          <br /><br /><br />
          <button className="btn2" onClick={this.props.history.goBack}>뒤로가기</button>
           <br /><br /><br />
        </div> 
      );      

      
    }
  }

export default withRouter(ViewGrade);