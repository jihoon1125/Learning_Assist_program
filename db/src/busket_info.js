import React, { Component } from 'react';
import './App.css'

class BusketInfo extends Component {
    static defaultProps = {
        info: {
            req_course: '',
            req_prof:'',
        },
    }

    state = {    
        req_course: '',
        req_prof:'',   
       
    }   
    handleRemove = () => {
        //삭제 버튼 클릭되면 onRemove에 id 넣어서 호출
        const { info, onRemove} = this.props;
        onRemove(info.req_course);
    }

    handleToggleEdit = (e) => {
        e.preventDefault();
        const { editing } = this.state;
        this.setState({ editing: !editing });
    }      

    render() {  
        

        const {
            req_course,req_prof,req_year,req_semester,req_major,req_room,req_code,req_subject,req_time,req_credit
        } = this.props.info;
       

        

        if(this.props.info === [])
            return (null);
        
        else{
            console.log(this.props.info);
        return (      
                <div>  
                    <table width="1500" border= "2" className="busket"><tbody><tr>
                    <td width="13%">{req_course}</td><td width="6%">{req_prof}</td>
                    <td width="7%">{req_year}</td>
                    <td width="11%">{req_major}</td><td width="6%">{req_room}</td>
                    <td width="9%">{req_code}</td><td width="7%">{req_subject}</td>
                    <td width="7%">{req_time}</td><td width="4%">{req_credit}</td>
                    <th width="7%"><button className="button2" onClick={this.handleRemove}>삭제</button></th>                                     
                    </tr></tbody>
                    </table>
               </div>
        );
        }
    }
}

export default BusketInfo;
