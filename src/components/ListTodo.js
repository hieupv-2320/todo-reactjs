import React from 'react'
import ItemTodo from './ItemTodo'

export default function ListTodo (props) {

    const deleteTodo = (id) => {
        props.deleteItem(id)
    }
    
    return ( 
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Task</th>
                    <th scope="col">Status</th>
                    <th scope="col">Features</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row"></th>
                    <td>     
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Search">
                        </input>
                    </td>
                    <td>
                        <select className="form-control">
                            <option>Status</option>
                        </select>
                    </td>
                    <td>
                    </td>
                </tr>
                {
                    props.toDos.map((item, index) => 
                        <ItemTodo 
                            key={index} 
                            item={item.title} 
                            id={item.id}
                            completed={item.completed}
                            deleteTodo={deleteTodo}
                        />
                    )
                }
            </tbody>
        </table>
    )
}