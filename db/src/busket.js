import React, { Component } from 'react';

import './App.css'
import BusketInfo from './busket_info';
class Busket extends Component {
    static defaultProps = {
        list: [],       
    }

        handleChange = (e) => {
            this.setState({
               [e.target.name]: e.target.value//computed property names
            })
        }
        handleSubmit = (e) => {//여기서 디비에다가 데이터 다 넣어주는 과정 필요
            //페이지 리로딩 방지
            e.preventDefault(); 

        }

    render() {                          
            const { data, onRemove} = this.props;  
            const list = data.map( 
            info => (//private_info 이거 정해진 변수 아님
                <BusketInfo                
                 info={info} 
                 onRemove={onRemove}                                    
                 />) 
            );

            return (
                <div onSubmit={this.handleSubmit} id="수강신청목록">
                 <div>
                 {list}
                </div> 
                <br/>
             </div>
               
            );
        
    }
}


   export default Busket;