import React, {useState} from 'react'
import '../assets/TodoForm.css'

export default function TodoForm (props) {

    // const [title, setTitle] = useState('');
    // const [completed, setCompleted] = useState(false);
    
    const [formData, setFormData] = useState({
        title: "",
        completed: 0
    })
    const updateFormData = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }
        
    const submitForm = event => {
        event.preventDefault();
        props.submitForm(formData);
    }
    
    const cancelForm = (e) => {
        e.preventDefault();
        setFormData({
            title: "",
            completed: 0
        });
    }

    const { title, completed } = formData;

    return (
        <div className="card formToDo">
            <div className="card-header">
                Thêm tasks 
                <span 
                    onClick={props.closeForm} 
                    className="float-right closeBtn"> 
                    <i className="fa fa-times" aria-hidden="true"></i>
                 </span> 
            </div>
            <div className="card-body">
                <form onSubmit={e => submitForm(e)}>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">
                        Task
                    </label>
                    <input 
                        type="text" 
                        name="title"
                        value={title}
                        onChange={e => updateFormData(e)}
                        className="form-control" 
                        id="formGroupExampleInput" 
                        placeholder="Type Task"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">
                        Trạng thái
                    </label>
                    <select 
                        className="form-control" 
                        name="completed"
                        value={completed}
                        onChange={e => updateFormData(e)}
                        >
                        <option value={0}>New</option>
                        <option value={1}>Done</option>
                    </select>
                </div>
                <div className="float-right">
                    <button 
                        type="submit" 
                        className="btn btn-primary mr-3">
                        Thêm
                    </button>
                    <button 
                        className="btn btn-danger "
                        onClick={cancelForm}>
                        Reset 
                    </button>
                </div>
            </form>
            </div>
        </div>

    )
}