import React, { Component } from 'react';
import './App.css'

class CourseInfo extends Component {
    static defaultProps = {
        info: {
            course: '',
            prof:'',
            editing: false
        },
    }

    state = {    
        course: '',
        prof:'',
        editing: false,
    }
    
    // editing 값을 반전시키는 함수입니다
    // true -> false, false -> true
    handleToggleEdit = (e) => {
        e.preventDefault();
        const { editing } = this.state;
        this.setState({ editing: !editing });

        const { info, onCreate } = this.props;
        console.log(info);
      
            // editing 값이 false -> true 로 전환 될 때
            // info 의 값을 state 에 넣어준다
            onCreate({
            req_course: info.course,
            req_prof: info.prof,
            req_year: info.year,
            req_semester: info.semester,
            req_major: info.major,
            req_room: info.room,
            req_code: info.code,
            req_subject:info.subject,
            req_time:info.time,
            req_credit:info.credit,                
                });
    
} 

    
    

    render() {    

        const {
            course,prof,year,semester,major,room,code,subject,time,credit
        } = this.props.info;

        
        
        if(this.props.info === [])
            return (null);
        
        else{
        return (      
                <div>  
                    <table width="1500" border= "2" className="busket"><tbody><tr>
                    <td width="13%">{course}</td><td width="6%">{prof}</td>
                    <td width="7%">{year}</td>
                    <td width="11%">{major}</td><td width="6%">{room}</td>
                    <td width="9%">{code}</td><td width="7%">{subject}</td>
                    <td width="7%">{time}</td><td width="4%">{credit}</td>
                    <th width="7%"><button className="button2" onClick={this.handleToggleEdit}>신청</button></th> 
                    </tr></tbody>
                    </table>
               </div>
        );
        }
    }
}

export default CourseInfo;
