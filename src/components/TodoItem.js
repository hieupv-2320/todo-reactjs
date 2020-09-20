import React from 'react';
import './TodoItem.css'

const TodoItem = (props) => {
    return (
        <div className={props.className}>
            {props.content} 
        </div>
    );
}

export default TodoItem