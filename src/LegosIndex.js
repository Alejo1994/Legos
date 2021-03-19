import React from 'react'
import { randomBoard } from './helpers/boards';
import { colors } from './helpers/colors';
import { BrickH } from './Lego/BrickH';
import { BrickV } from './Lego/BrickV';

export const LegosIndex = ({ history }) => {

  const handleStart = () => {
    history.push(`/${randomBoard()}`);
  }

  const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col d-flex align-items-center justify-content-center'>
          <h1 className='m-5'>Tangrama</h1>
        </div>
      </div>

      <div className='row border'>
        <div className=" col d-flex align-items-center justify-content-center">
          <div className='m-5'>
            <BrickH brickColor={randomColor().brickColor} />
          </div>
        </div>
        <div className=" col d-flex align-items-center justify-content-center">
          <div className='mt-3'>
            <BrickV brickColor={randomColor().brickColor} />
          </div>
        </div>
        <div className=" col d-flex align-items-center justify-content-center">
          <div className='mt-3'>
            <BrickH brickColor={randomColor().brickColor} />
          </div>
        </div>
        <div className=" col d-flex align-items-center justify-content-center">
          <div className='mt-3'>
            <BrickV brickColor={randomColor().brickColor} />
          </div>
        </div>
      </div>

      <div className='row'>
        <div className=" col d-flex align-items-center justify-content-center">
          <button className='btn btn-primary m-5' onClick={handleStart}>Comenzar</button>
        </div>
      </div>
    </div>
  )
}
