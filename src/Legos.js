import React, { useState } from 'react'
import Draggable from 'react-draggable'; // The default
import { BrickV } from './Lego/BrickV';

import './Lego/brick.css';
import { BrickH } from './Lego/BrickH';

export const Legos = () => {

    const [state, setState] = useState({
        activeDrags: 0,
        deltaPosition: {
          x: 0, y: 0
        }
      });
    

   
    const handleDrag = (e, ui) => {
        const {x, y} = state.deltaPosition;
        setState({
          deltaPosition: {
            x: x + ui.deltaX,
            y: y + ui.deltaY,
          }
        });
      };

      
    let handleStart = (e, ui) => {
        const {x, y} = state.deltaPosition;
        setState({
          deltaPosition: {
            x: x + ui.deltaX,
            y: y + ui.deltaY,
          }
        });
      };

      let handleStop = (e, ui) => {
        const {x, y} = state.deltaPosition;
        setState({
          deltaPosition: {
            x: x + ui.deltaX,
            y: y + ui.deltaY,
          }
        });
      };

      const onStart = (e, ui) => {
        const {x, y} = state.deltaPosition;
        setState({
          activeDrags: ++state.activeDrags,
          deltaPosition: {
            x: ui.deltaX,
            y: ui.deltaY,
          }
        });
        //console.log(state);
      };
    
      const onStop = (e,ui) => {
        const {x, y} = state.deltaPosition;
        setState({
          ...state,
          activeDrags: --state.activeDrags,
          deltaPosition: {
            x: x+ui.lastX,
            y: y+ui.lastY,
          }
        });
        //console.log(state);
        
        // const {x, y} = state.deltaPosition;
        // setstate({
        //   deltaPosition: {
        //     x: x + ui.deltaX,
        //     y: y + ui.deltaY,
        //   }
        // });

        // console.log(x,y);
      };

      const onDrag = (e, ui) => {
        const {x, y} = state.deltaPosition;
        setState({
          deltaPosition: {
            x: x + ui.deltaX,
            y: y + ui.deltaY,
          }
        });
        console.log(x,y);
      };
    
    const dragHandlers = {onStart, onStop, onDrag};

    return  <div className='fullscreen'>
    

        {/* <Draggable {...dragHandlers}>
          <div className="box">
            <div >
                  <BrickV key='dragBrickV'/> 
              </div>
          </div>
        </Draggable> */}

        <Draggable {...dragHandlers}>
          <div className="box">
              <div >
                  <BrickH key='dragBrickH'/>
              </div>
          </div>
        </Draggable>
      </div>
    
}
