import React, { useState } from 'react'
import Todo from "./components/Todo";
import Form from "./components/Form"
import FilterButton from './components/FilterButton';
import { nanoid } from "nanoid";

function App(props) {

  const [tasks, setTasks] = useState(props.task);


  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task)=>{
      if(id === task.id){
        return{...task,completed: !task.completed};
      }
      return task;
    })
    setTasks(updatedTasks);
    console.log(updatedTasks);
  }

  function deleteTask(id){
    const remainingTask = tasks.filter((task)=>id !== task.id);
    setTasks(remainingTask);
  }

  function editTask(id,newName){
    const editedTaskList = tasks.map((task)=>{
      if(id === task.id){
        return {...task,name:newName};
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  const taskList = tasks.map((task)=>(
    <Todo id={task.id} name={task.name} completed={task.completed} key={task.id}  toggleTaskCompleted={toggleTaskCompleted} deleteTask = {deleteTask} editTask={editTask}/>
  ));

  function addTask(name){
    const newTask = {id : `todo-${nanoid()}`,name,completed:false}
    setTasks([...tasks,newTask]);
  }
  
  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingTest =   `${taskList.length} ${tasksNoun} remaining`;


  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask = {addTask}/>
      <div className="filters btn-group stack-exception">
        <FilterButton name="All" completed="true"/>
        <FilterButton name="Active" completed="false"/>
        <FilterButton name="Completed" completed="false"/>
      </div>
      <h2 id="list-heading">{headingTest}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
         {taskList}
      </ul>
    </div>
  );
}


export default App;
