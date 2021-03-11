import React from 'react'
import {v4} from 'uuid';
import './brick.css';

export const BrickH = ({brickColor}) => {

    
    const brick=[[,,,],[,,,]];

    const createBrickH = ()=>{
        return brick.map(()=>{
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
        } )
    }

    return (
        <div className={`horizontal ${brickColor}Shadow`} >
            { createBrickH() }
        </div>
    )
}
