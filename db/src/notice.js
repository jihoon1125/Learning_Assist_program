import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './App.css';

class Notice extends Component{
    constructor(props){
        super(props);
        this.state={
          goPage:0,
        }
    }

    render(){
    return(
        <div align="center">
         <h1 className='Header' align="center">공지사항</h1>
        <br/><br/><br/><br/><br/><br/>
         <table border="1" className='type08'  
cellPadding="0" cellSpacing="0" width="1000px" >
  <thead>
    <tr>
      <th scope="cols" align ="center" width="90%">제목</th>
      <th scope="cols" align ="center" width="10%">글쓴이</th>
    </tr>
  </thead>
    </table> 

        <table border="1" className='type08'  
    cellPadding="0" cellSpacing="0" width="1000px">
    <tbody>
      <tr>
          <td align ="center" width="90%" valign="top">이곳은 {this.props.C_name} 공지사항 게시판 입니다.</td>
          <td align ="center" width="10%" >운영자</td>
      </tr>
    </tbody>
    
  </table>

  <br/><br/><br/><br/>
  <button onClick={this.props.history.goBack} className="btn3">뒤로가기</button>
        
        </div>
      
    );
    }

}

export default withRouter(Notice);