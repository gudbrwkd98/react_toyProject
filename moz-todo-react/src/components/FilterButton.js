import React from 'react'


function FilterButton(props) {
    return (  
      <div>
      <button type="button" className="btn toggle-btn" aria-pressed={props.completed}>
        <span className="visually-hidden">Show </span>
        <span>{props.name}</span>
        <span className="visually-hidden"> tasks</span>
      </button>
    </div>
    );
}

export default FilterButton;