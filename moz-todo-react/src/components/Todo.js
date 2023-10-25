import React, { useState } from 'react'

function Todo(props) {
  const [isEditing,setEditing] = useState(false);

  const title = props.name;
    return (
        <div>
          <li className="todo stack-small">
                <div className="c-cb">
                  <input id={props.id} type="checkbox" defaultChecked={props.completed}  onChange={() => props.toggleTaskCompleted(props.id)}/>
                  <label className="todo-label" htmlFor="todo-0">
                    {title}
                  </label>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn" onClick={()=>{
                    props.editTask(props.id)
                  }}>
                    Edit <span className="visually-hidden">Eat</span>
                  </button>
                  <button type="button" className="btn btn__danger" onClick={()=>{
                    props.deleteTask(props.id)
                  }}>
                    Delete <span className="visually-hidden">{title}</span>
                  </button>
                </div>
          </li>
        </div>
    );
}

export default Todo;