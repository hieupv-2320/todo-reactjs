import React from 'react'

export default function Control () {
    return (
        <form className="form-inline my-2 my-lg-0">
            <input 
                className="form-control mr-sm-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search">
            </input>
            <button 
                className="btn btn-outline-success my-2 my-sm-0" 
                type="submit">
                    Search
            </button>
        </form>
    )
}