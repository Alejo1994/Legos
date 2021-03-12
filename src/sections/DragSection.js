import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

export const DragSection = ({bricks}) => {
    return (
        <div key={"bricks"} className={"column"}>
          <h3>{bricks.title}</h3>
          <Droppable droppableId={"bricks"}>
            {(provided) => {
              return (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={"droppable-col"}
                >
                  {bricks.items.map((el, index) => {
                    return (
                      <Draggable key={el.id} index={index} draggableId={el.id}>
                        {(provided) => {
                          return (
                            <div
                              className={`item`}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              { el.brick}

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
    )
}
