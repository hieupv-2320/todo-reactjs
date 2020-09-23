import React from 'react'

export default function ItemTodo (props) {
    const deleteTodo = () => {
        props.deleteTodo(props.id);
    }

    return (  
        <tr>
            <th scope="row">1</th>
            <td>{props.item}</td>
            <td>
            {props.completed > 1 &&
             <span className="badge badge-success"> Done </span>
            }
            </td>
            <td>
                <button className="btn btn-success">Sửa</button>
                <button 
                    className="btn btn-danger"
                    id={props.id}
                    onClick={deleteTodo}
                    >
                    Xóa
                </button>
            </td>
        </tr>
    )
}