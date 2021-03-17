import './../LegosIndex.css'
import './../Lego/brick.css'
import React, { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { v4 } from 'uuid';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';

import { colors } from '../helpers/colors';
import { BrickH } from '../Lego/BrickH';
import { BrickV } from '../Lego/BrickV';
import { DragSection } from '../sections/DragSection';
import { DropSection } from '../sections/DropSection';

export const Board4 = () => {

    const { activeBrick } = useSelector(state => state.brick);

    const randomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    const [state, setState] = useState({
        "bricks": {
            title: "Legos",
            items: [
                {
                    id: v4(),
                    brick: <BrickH brickColor={randomColor().brickColor} />
                },
                {
                    id: v4(),
                    brick: <BrickH brickColor={randomColor().brickColor} />
                },
                {
                    id: v4(),
                    brick: <BrickH brickColor={randomColor().brickColor} />
                },
                {
                    id: v4(),
                    brick: <BrickH brickColor={randomColor().brickColor} />
                },
                {
                    id: v4(),
                    brick: <BrickV brickColor={randomColor().brickColor} />
                },
                {
                    id: v4(),
                    brick: <BrickV brickColor={randomColor().brickColor} />
                },
                {
                    id: v4(),
                    brick: <BrickV brickColor={randomColor().brickColor} />
                },
                {
                    id: v4(),
                    brick: <BrickV brickColor={randomColor().brickColor} />
                },
                {
                    id: v4(),
                    brick: <BrickV brickColor={randomColor().brickColor} />
                },
                {
                    id: v4(),
                    brick: <BrickV brickColor={randomColor().brickColor} />
                }]
        },

        "vertical1": {
            title: "vertical1",
            items: []
        },
        "vertical2": {
            title: "vertical2",
            items: []
        },
        "vertical3": {
            title: "vertical3",
            items: []
        },
        "vertical4": {
            title: "vertical4",
            items: []
        },
        "vertical5": {
            title: "vertical5",
            items: []
        },
        "vertical6": {
            title: "vertical6",
            items: []
        },
        "horizontal1": {
            title: "horizontal1",
            items: []
        },
        "horizontal2": {
            title: "horizontal2",
            items: []
        },
        "horizontal3": {
            title: "horizontal3",
            items: []
        },
        "horizontal4": {
            title: "horizontal4",
            items: []
        }

    });

    const {
        bricks,
        vertical1,
        vertical2,
        vertical3,
        vertical4,
        vertical5,
        vertical6,
        horizontal1,
        horizontal2,
        horizontal3,
        horizontal4 } = state;

    useEffect(() => {

        if (bricks.items.length === 0) {
            Swal.fire('Felicidades', 'Lo has logrado', 'success');
        }

    }, [state, bricks.items.length])


    const handleDragEnd = ({ destination, source }) => {
        if (!destination) return;

        if (destination.index === source.index && destination.droppableId === source.droppableId) {
            return;
        }

        if ((destination.droppableId.toString().toLowerCase().includes('vertical') && activeBrick !== 'v')
            || (destination.droppableId.toString().toLowerCase().includes('horizontal') && activeBrick !== 'h')) {
            return;
        }

        const itemCopy = { ...state[source.droppableId].items[source.index] };
        setState((prev) => {
            prev = { ...prev }
            if (prev[destination.droppableId].items.length < 1 || destination.droppableId === 'bricks') {
                //Remove from previous items array
                prev[source.droppableId].items.splice(source.index, 1);

                //Adding to new items array location
                prev[destination.droppableId].items.splice(destination.index, 0, itemCopy);

            }
            return prev;
        })

    }

    return (
        <div className="container">

            <DragDropContext onDragEnd={handleDragEnd}>

                {/* Legos */}
                <DragSection bricks={bricks} />

                <br />
                <div className="container container-table">

                    <div >
                        <div className="row">

                            <div className='containerVertical'>
                                <div className="containerHorizontal ">
                                    <div className='col-horizontal'>
                                        {/*horizontal1 */}
                                        <DropSection object={horizontal1} />
                                    </div>

                                    <div className="col-vertical">
                                        {/*vertical1 */}
                                        <DropSection object={vertical1} />

                                    </div>

                                </div>
                                <div className="col-vertical">
                                    {/*vertical2 */}
                                    <DropSection object={vertical2} />

                                </div>
                                <div className="col-vertical">
                                    {/*vertical3 */}
                                    <DropSection object={vertical3} />

                                </div>
                                <div className="containerHorizontal ">
                                    <div className='col-horizontal'>
                                        {/*horizontal2 */}
                                        <DropSection object={horizontal2} />
                                    </div>
                                    <div className="containerVertical">
                                        <div className="empty-vertical2">
                                            {/*empty vertical */}
                                        </div>
                                        <div className="col-vertical">
                                            {/*vertical4 */}
                                            <DropSection object={vertical4} />
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="row">
                            <div className='containerVertical'>
                                <div className='col-horizontal'>
                                    {/*horizontal3 */}
                                    <DropSection object={horizontal3} />
                                </div>
                                <div className="col-vertical">
                                    {/*vertical5 */}
                                    <DropSection object={vertical5} />

                                </div>
                                <div className="col-vertical">
                                    {/*vertical6 */}
                                    <DropSection object={vertical6} />

                                </div>
                                <div className='col-horizontal'>
                                    {/*horizontal4 */}
                                    <DropSection object={horizontal4} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DragDropContext>

        </div>
    )
}
