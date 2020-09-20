import React, {useState} from 'react'

export default function TodoForm () {

    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState(false);
    
    return (
        <div className="card">
            <div className="card-header">
                Thêm tasks
            </div>
            <div className="card-body">
                <form>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">
                        Task
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="formGroupExampleInput" 
                        placeholder="Type Task">
                    </input>
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">
                        Trạng thái
                    </label>
                    <select className="form-control">
                        <option>Status</option>
                    </select>
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary">
                    Thêm
                </button>
            </form>
            </div>
        </div>

    )
}