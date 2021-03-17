import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

export const DropSection = ({ object }) => {

    return (
        <div key={object.title} className='drop'>
            <Droppable droppableId={object.title}>
                {(provided) => {
                    return (
                        <div 
                            className={`dropSection`}
                            ref={provided.innerRef}
                            {...provided.droppableProps}

                        >
                            {object.items.map((el, index) => {
                                return (
                                    <Draggable key={el.id} index={index} draggableId={el.id}>
                                        {(provided) => {
                                            return (
                                                <div
                                                    className={"item"}
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
