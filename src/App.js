import React, {useState, useEffect} from 'react'
import logo from './logo.svg'
import './App.css'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'
import Control from './components/Control'
import ListTodo from './components/ListTodo'




function App() {
    const [toDos, setToDos] = useState([]);
    const [isDisplayForm, setIsDisplayForm] = useState(true)
    
    const getData = () => {
        const Todo = [
            {'title':'random', 'completed': randomInt(1, 3)},
            {'title':'oeoih', 'completed': randomInt(1, 3)}
        ];
        setToDos(Todo);
        localStorage.setItem('toDos', JSON.stringify(Todo));
    }

    const displayForm = () => {
        setIsDisplayForm(!isDisplayForm);
    }

    function randomInt(min, max) {
        return min + Math.floor((max - min) * Math.random());
    }

    return (
        <div className="App">
            <div className="container">
                <div className="row justify-content-center p-5">
                    <h1> To do List </h1>
                </div>
                <div className="row">
                    <div className="col-4">
                        { isDisplayForm ? <TodoForm /> : '' }
                    </div>
                    <div className={ isDisplayForm ? "col-8 pl-5" : "col-12 pl-5" }> 
                        <div className="row">
                            <button className="btn btn-primary" onClick={displayForm}>
                                Thêm Task Mới
                            </button>
                            <button className="btn btn-warning ml-4" onClick={getData}>
                                Get Data
                            </button>
                        </div>
                        <div className="row mt-3 mb-3">
                            <Control />
                        </div>
                        <div className="row"> 
                            <ListTodo toDos = {toDos} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
