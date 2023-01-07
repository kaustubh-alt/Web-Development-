import React from "react";
import './App.css';

const Todo = (props) =>{

    return <div className='item'>
              <h3>{props.data}</h3>
              {console.log(props.data)}
              <button className='del-btn'onClick={()=>{
                props.onSelect(props.id)
              }}>Delete</button>
            </div>

}
export default Todo