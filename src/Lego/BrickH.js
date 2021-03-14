import React from 'react'
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { brickSetActive } from '../actions/brick';
import './brick.css';

export const BrickH = ({ brickColor }) => {

    const dispatch = useDispatch();

    const brick = [['h','h','h','h'], ['h','h','h','h']];

    const createBrickH = () => {
        return brick.map(() => {
            return <div className='pair'>

                <div key={v4()} className={`circle ${brickColor}`}>
                    <div key={v4()} className='circleLego'>Lego</div>
                </div>

                <div key={v4()} className={`circle ${brickColor}`}>
                    <div key={v4()} className='circleLego'>Lego</div>
                </div>

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
        className={`horizontal ${brickColor}Shadow`} 
        onMouseOver={handleSelectBrick}
        
        >
            { createBrickH()}
        </div>
    )
}
