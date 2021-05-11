import React, { Component } from 'react';
import Course_Info from './course_info';
import './App.css'

class Search_results extends Component {
    static defaultProps = {
        list: [],       
    }

        handleChange = (e) => {
            this.setState({
               [e.target.name]: e.target.value//computed property names
            })
        }
        handleSubmit = (e) => {
            //페이지 리로딩 방지
            e.preventDefault();           
        }
        
    render() {                          
            const { data, onCreate } = this.props;
            const list = data.map(//Phoneinfo의 info가지고 list 만드는거
                info => (//private_info 이거 정해진 변수 아님
                <Course_Info                
                 info={info} 
                 onCreate={onCreate}               
                 />)
            );
    
            return (
                <div>
                    {list}
               </div>
            );
        
    }
}


   export default Search_results;