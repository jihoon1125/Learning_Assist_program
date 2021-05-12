import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './App.css';

class Gradeinfo extends Component{
    constructor(props){
        super(props);
        this.state={
          goPage:0,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }   

    handleSubmit = (e) => {      
        this.props.handlesubmit(this.props.C_name);       
        this.props.history.push("/notice");
      }

    render(){
        const{
            C_name, Grade, notice
        } = this.props;
    
        if(notice === true){           
            return(
                <div>               
                <table border="1" className='type08'  
                cellPadding="0" cellSpacing="0" width="600px">
                <tbody>
                  <tr>
                      <td align ="center" width="40%" valign="top">{C_name}</td>
                      <td align ="center" width="60%" > <button width={"600px"} onClick={this.handleSubmit} className={"button"} >바로가기</button></td>
                  </tr>
                </tbody>
                
              </table>


               
                
                </div>
              
            );
            

           
        }
        else{
            return(
                <div>
                <table border="1" className='type08'  
                cellPadding="0" cellSpacing="0" width="600px">
                <tbody>
                  <tr>
                      <td align ="center" width="40%" >{C_name}</td>
                      <td align ="center" width="60%" >{Grade}</td>
                  </tr>
                </tbody>
                
              </table>
               
                
                </div>
              
            );
        }
    }
}

export default withRouter(Gradeinfo);