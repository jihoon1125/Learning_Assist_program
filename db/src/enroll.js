import React, { Component } from 'react';
import Search from './search'
import Busket from './busket'
import Search_results from './search_results'
import './App.css'
import Mypage from './Mypage';
const axios = require('axios');
class Enroll extends Component {
   
    state = {
        req_count: 0,
        goPage: 0,

        information: [      
        ],     
        
        req_info: [      
       
        ],

        
    }     

    handleRemove = (req_course) => {
      const {req_info, req_count} = this.state;  
      this.setState({
        req_info: req_info.filter(info => info.req_course !== req_course),
        req_count: req_count - 1,
      })
    }
       
    

     req_push = (data) => {           
          this.setState({
          req_info: this.state.req_info.concat({...data}),//...(전개 연산자)은 객체안의 내용을 해당 위치에 풀어준다는 의미
          req_count: this.state.req_count + 1,
        })    
          } 
          
     info_push = (data) => {           
          this.setState({
            information: this.state.information.concat({...data})
          })    
            } 

     initialize_info = () =>{
       this.setState({
        information: [],    
       })
     }
            
     handleGoback = (e) =>{
       e.preventDefault();
      this.setState({
        goPage: 1
      })
     }

     handleSubmit = (e) => {
      //페이지 리로딩 방지
      console.log("된거아안된거야");
     
       e.preventDefault();         
    
       if(this.state.req_count===0)
       {
         alert("신청할 과목이 없습니다");
         return;
       }

       else{
       axios.post('http://localhost:4000/enroll',{data: this.state.req_info, count: this.state.req_count, sid:this.props.SID}                                                
                            ).then(function(response) { 
                              console.log(response);
                              if(response.data==="중복")
                              {
                                alert("중복된 시간표가 있어 일부 과목이 신청되지 않았습니다");    
                              }
                              else{
                                alert("모든과목의 수강신청이 완료 되었습니다.")
                              }

                                  })
                                }

                                


             }
            
        
    render() {
        const {information} = this.state;
        const {req_info} = this.state;    
       
        /*쿼리해온거 state에 저장 */
        if(this.state.goPage==0){
        return (     
            <div className="enroll">
              <h1 className= "Header">수강신청</h1>
              <br/><br/>
               <Search onCreate={this.info_push} onInit={this.initialize_info} />
               <br/><br/>
               <h2 > * 검색결과 * </h2>
               <br/>
               <table width="1500" border= "2" className="table">
                 <tbody>
                   <tr>
                     <th width="13%">강의명</th><th width= "6%">교수명</th>
                     <th width="7%">연도</th>
                     <th width="11%">학과</th><th width= "6%">강의실</th>
                     <th width="9%">학정번호</th><th width= "7%">이수구분</th>
                     <th width="7%">강의시간</th><th width= "4%">학점</th><th width="7%">신청</th>
                   </tr>
                 </tbody>

                 
               </table>
               <Search_results data={information} onCreate={this.req_push}/>     
              <br/><br/><br/><br/><br/><br/><br/><br/>
              
                             


               <h2 >* 신청목록 *</h2>
               <br/>
               <table width="1500" border= "2" className="table">
                 <tbody>
                   <tr>
                   <th width="13%">강의명</th><th width= "6%">교수명</th>
                     <th width="7%">연도</th>
                     <th width="11%">학과</th><th width= "6%">강의실</th>
                     <th width="9%">학정번호</th><th width= "7%">이수구분</th>
                     <th width="7%">강의시간</th><th width= "4%">학점</th><th width="7%">신청</th>                     
                   </tr>
                 </tbody>
               </table>

               <Busket data={req_info} onRemove={this.handleRemove}/>
               <button type="submit" className="btn2" onClick={this.handleSubmit}>저장</button> &nbsp;&nbsp; <button type="submit" className="btn2" onClick={this.handleGoback}>나가기</button>
               <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
           
             </div>
        );
        }

        else{
          return(
            <Mypage SID={this.props.SID}></Mypage>
          )
        }
    }
    
    

}

export default Enroll;
