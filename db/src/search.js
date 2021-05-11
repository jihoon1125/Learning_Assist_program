import React, { Component } from 'react';
import './App.css'
const axios = require('axios');


class Search extends Component {
    state = {
        course: '',
        }

        

        handleChange = (e) => {
            this.setState({
               [e.target.name]: e.target.value//computed property names
            })
        }


        handleSubmit = (e) => {
            //페이지 리로딩 방지

             e.preventDefault();
             
             const {onCreate, onInit} = this.props;
             onInit();
             axios.post('http://localhost:4000/search',{data: this.state.course}                                                
                                  ).then(function(response) { 
                                    console.log(response.data.row2[0]);                                   
                                      for(var i=0; i<response.data.row2[0].count;i++)
                                      {                         
                                        var data = response.data.row1[i]; 
                                        console.log(data);             
                                        onCreate({course:data.C_name,
                                                  prof:data.Prof,
                                                  year:data.C_year,
                                                  semester:data.Semester,
                                                  major:data.Major,
                                                  room:data.Room,
                                                  code:data.Ccode,
                                                  subject:data.C_subject,
                                                  time:data.C_time,
                                                  credit:data.Credit});
                                      }
                                     
                                        })                                       
                                        
                                        
            
            
       // 상태값을 onCreate를 통하여 부모에게 전달
             console.log(this.state);
           //db에서 쿼리 해와서 검색결과에 띄워야함
           
            
        }
    render() {
        
        return (        
            <form onSubmit={this.handleSubmit} id="수강신청">
                             
                <input className = "Box"
                placeholder="원하는 과목 검색"
                value={this.state.course}
                onChange={this.handleChange}//TEXT바뀔때마다 발생하는 EVENT
                name = "course"//input의 name 속성
                />                
                <button type="submit" className = "button2">검색</button>
               
             </form>
        );
    }
}


   export default Search;