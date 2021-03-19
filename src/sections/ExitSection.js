import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { emptyScore } from '../actions/score';

export const ExitSection = () => {

    const dispatch = useDispatch();

    const handleExit = (e) =>{
        e.preventDefault();
        dispatch(emptyScore());
    }

    return (
        <div className='container mt-3'>

            <div className="d-flex bd-highlight mb-3">
                <div className="ms-auto p-2 bd-highlight">
                    <button className='btn btn-danger' onClick={handleExit}>
                        <Link to="/"  style={{ textDecoration: 'none', color: 'white' }}>Salir</Link>
                    </button>

                </div>
            </div>
        </div>
    )
}
