import React, { useState } from 'react';
import './tasks.css';

const AddTask = () =>{
    const [value, setValue] = useState("");
    const [tasks, setTasks] = useState([]);

const AddValue = e =>{
    setValue(e.target.value);
};
const sendValue = () =>{
    setTasks([
        ...tasks,
        {task: value,}
    ]);
};
const submitValue = e =>{
    e.preventDefault();
    if (value === "") return;
    sendValue();
    setValue(""); 
};
const removeValue = id =>{
    let newtasks = [...tasks];
    newtasks.splice(id, 1);
    setTasks(newtasks);
}
    return( 
        <div>
          <form onSubmit={submitValue}>
            <input placeholder="Your Task here" onChange={AddValue} value={value}></input>
            <br/>
            <br/>
            <button type="submit" className="btn btn-success">Add</button>
        </form> 
        <br/> 
        <div className="tasks">
            {tasks.map((e)=>(
                <ul key={e.task}>
                    <li>
                        {e.task}
                    </li>
                    <button className="btn btn-warning" onClick={() =>removeValue(e.id)}>Delete</button>
                </ul>
            ))}
        </div>
        </div>
    );
};

export default AddTask;