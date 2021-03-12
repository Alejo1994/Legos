import React from 'react'
import { v4 } from 'uuid';
import './brick.css';

export const BrickV = ({ brickColor }) => {

    const brick = [[,], [,], [,], [,]];

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

    return (
        <div className={`vertical ${brickColor}Shadow`}>
            { createBrickV()}
        </div>
    )
}
