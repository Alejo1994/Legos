import React from 'react'
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { brickSetActive } from '../actions/brick';
import './brick.css';

export const BrickV = ({ brickColor }) => {
    
    const dispatch = useDispatch();

    const brick = [['v','v'], ['v','v'], ['v','v'], ['v','v']];

    const createBrickV = () => {
        return brick.map(() => {
            return <div className='pair'>
                <div key={v4()} className={`circle ${brickColor}`}>
                    <div key={v4()} className='circleLego'>Lego</div>
                </div>
                <div key={v4()} className={`circle ${brickColor}`}>
                    <div key={v4()} className='circleLego'>Lego</div>
                </div>
            </div>
        })
    }

    const handleSelectBrick=()=>{
        dispatch(brickSetActive(brick[0][0]));
    }

    return (
        <div 
        className={`vertical ${brickColor}Shadow`}
        onMouseOver={handleSelectBrick}
        >
            { createBrickV()}
        </div>
    )
}
