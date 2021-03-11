import './LegosIndex.css'
import './Lego/brick.css'
import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { v4 } from 'uuid';


import { BrickH } from './Lego/BrickH';
import { BrickV } from './Lego/BrickV';

export const LegosIndex = () => {

    const colors =[
        {
            "brickColor":"blue"
        },
        {
            "brickColor":"green"
        },
        {
            "brickColor":"red"
        },
        {
            "brickColor":"yellow"
        },
    ]

    const randomColor=()=>{
        return colors[Math.floor(Math.random()*colors.length)];
    }

    const [state, setState] = useState({
        "bricks":{
            title:"Legos",
            items:[
                {
                    id: v4(),
                    brick:<BrickH brickColor={randomColor().brickColor}/>
                },
                {
                    id:v4(),
                    brick:<BrickH brickColor={randomColor().brickColor}/>
                },
                {
                    id:v4(),
                    brick:<BrickV brickColor={randomColor().brickColor}/>
                },
                {
                    id:v4(),
                    brick:<BrickV brickColor={randomColor().brickColor}/>
                }]
        },
        "table":{
            title:"Tablero",
            items:[]
        },
        "table2":{
            title:"Tablero 2",
            items:[]
        }
    });

    const {bricks,table,table2}=state;

  

    const handleDragEnd=({destination,source})=>{
        if(!destination) return;
    
        if(destination.index === source.index && destination.droppableId === source.droppableId){
          return;
        }
    
        const itemCopy = {...state[source.droppableId].items[source.index]};
        setState((prev)=>{
          prev={...prev}
          //Remove from previous items array
          prev[source.droppableId].items.splice(source.index, 1);
    
          //Adding to new items array location
          prev[destination.droppableId].items.splice(destination.index, 0, itemCopy);
    
          return prev;
        })
    
      }

    return (
    <div className="container">
      
      <DragDropContext onDragEnd={handleDragEnd}>

        {/* Legos */}
            <div key={"bricks"} className={"column"}>
              <h3>{bricks.title}</h3>
              <Droppable droppableId={"bricks"}>
                {(provided, snapshots)=>{
                  return (
                    <div 
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={"droppable-col"}
                    >
                        {bricks.items.map((el, index)=>{
                          return(
                            <Draggable key={el.id} index={index} draggableId={el.id}>
                              {(provided,snapshot )=>{
                                return (
                                  <div
                                  className={`item` }
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    { el.brick }
                                   
                                  </div>
                                )
                              }}
                            </Draggable>
                          )
                        })}
                        {
                          provided.placeholder
                        }
                    </div>
                  )
                }}
              </Droppable>
            </div>


        {/* Tablero */}
        <div key={"table"} className={"column2"}>
          <h3>{table.title}</h3>
          <Droppable droppableId={"table"}>
            {(provided, snapshots)=>{
              return (
                <div 
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={"droppable-col"}
                >
                    {table.items.map((el, index)=>{
                      return(
                        <Draggable key={el.id} index={index} draggableId={el.id}>
                          {(provided,snapshot )=>{
                            return (
                              <div
                              className={`item ` }
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                { el.brick }
                               
                              </div>
                            )
                          }}
                        </Draggable>
                      )
                    })}
                    {
                      provided.placeholder
                    }
                </div>
              )
            }}
          </Droppable>
        </div>

        <div key={"table2"} className={"column2"}>
         
          <Droppable droppableId={"table2"}>
            {(provided, snapshots)=>{
              return (
                <div 
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={"droppable-col"}
                >
                    {table2.items.map((el, index)=>{
                      return(
                        <Draggable key={el.id} index={index} draggableId={el.id}>
                          {(provided,snapshot )=>{
                            return (
                              <div
                              className={`item` }
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                { el.brick }
                               
                              </div>
                            )
                          }}
                        </Draggable>
                      )
                    })}
                    {
                      provided.placeholder
                    }
                </div>
              )
            }}
          </Droppable>
        </div>
  
  </DragDropContext>
  <br/>
        <div className="container container-table">
        <div className="row">
            <div className="col section">
                <div className="row">
                    <div className="col section">col</div>
                </div>
                <div className="row">
                    <div className="col section">col</div>
                </div>
                <div className="row">
                    <div className="col section">col</div>
                </div>
            </div>
            <div className="col section">col</div>
            <div className="col-2 section">col</div>
        </div>
        <div className="row">
            <div className="col-8 section">col-8</div>
            <div className="col-4 section">col-4</div>
        </div>
        </div>

    </div>
    )
}
