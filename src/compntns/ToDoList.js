import {useState , useRef} from 'react';
import { connect } from "react-redux";
import { addTask } from '../actions'


function ToDoList (props){
    const [inputValue ,setInputValue] = useState(''); 
    const inputRef = useRef()
    const sandTask=()=>{
        props.addTask(inputValue)
        setInputValue('')
        inputRef.current.focus();
    }
const enterEvent = (e) =>
 {
     console.log(e)
     if(e.which == 13){
         sandTask()
     }
 }
    return (
        <div style={{textAlign: 'center' }}>

        <input ref={inputRef} type="text" value={inputValue} onKeyPress={enterEvent} onChange={(e) => setInputValue(e.target.value)}/>
        <input type="button" value='ADD' onClick={sandTask}/>
        <div style={{textAlign: 'left' ,maxWidth:'200px' , margin:'auto' }}>
            {props.list && props.list.map((task, index) => <li key= {index} onClick={()=>props.addTask(task)}>{task}</li>) }
        </div>
        </div>
    )
}

const mapeStateToProps = (state) => {
    return {
      list: state.list
    }
  }
export default connect(mapeStateToProps, {addTask})(ToDoList);
