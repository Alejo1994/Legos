export const boards =
    [
        {
            'name': 'board1'
        },
        {
            'name': 'board2'
        },
        {
            'name': 'board3'
        },
        {
            'name': 'board4'
        },
        {
            'name': 'board5'
        }
    ]

export const randomBoard = (boardName) => {
    let newBoards = [];

    if (!boardName)
        return boards[Math.floor(Math.random() * boards.length)].name

    newBoards = [...boards];
    boardName.forEach(({ name }) => {
        newBoards = newBoards.filter(board => board.name !== name);
    });

    return newBoards[Math.floor(Math.random() * newBoards.length)].name;


}



