import React , { useState } from 'react';
import './App.css';
import Todo from "./Todo.jsx"

function App() {
  const [inputData,setInputData] = useState('');
  const [Items,setItems] = useState([]) 
  console.log(inputData)
  const addItem = () => {
    if(!inputData){}
    else{setItems((oldData)=>{
      return [...oldData,inputData]
    });}
  }
  const deleteItem = (id) => {
    setItems((oldData)=>{
      return oldData.filter((arrele,index)=>{
        return index !== id;
      })
    })
  }
  return (
    <div className="main-div">
      <div className='child-div'>
        <div><h1>To-Do</h1></div>
        <div className='sec-div'>
          <input className='inp' value={inputData} onChange={(e) => setInputData(e.target.value)}></input>
          <button className='add-btn' onClick={addItem}>Add</button>
        </div> 
      </div>
      <div className='list-div'>
        {
          Items.map((item,index)=>{
          return <Todo 
          data={item}
          key = {index}
          id = {index}
          onSelect = {deleteItem}/> 
          })

        }
      </div>
    </div>
  );
}

export default App;
