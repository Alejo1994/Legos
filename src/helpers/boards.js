import Swal from "sweetalert2";

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

export const randomBoard = (scores, boardName, score) => {

    let newBoards = [];
    
    if (!scores)
        return boards[Math.floor(Math.random() * boards.length)].name
    
    const items = excludeBoard(scores, boardName, score);

    if (items.length === 3) {
       return showFinalScore(items);
    }

    newBoards = [...boards];
    items.forEach(({ name }) => {
        newBoards = newBoards.filter(board => board.name !== name);
    });

    return newBoards[Math.floor(Math.random() * newBoards.length)].name;

}

export const excludeBoard = (scores, boardName, score) => {

    let excludeBoard = [];

    if (scores.length > 0) {
        const excluded = [...scores];

        excluded.forEach(({ board, score }) => {
            excludeBoard = [{ 'name': board, 'score': score }, ...excludeBoard]
        })
    }

    return [{ 'name': boardName, 'score': score }, ...excludeBoard];
}


const showFinalScore = (scores) => {
    let avg = 0;

    scores.forEach(({ score }) => {
        avg += score;
    })

    Swal.fire({
        title: '',
        text: `Tu puntuación final es de ${(avg / 3).toFixed()}`,
        showDenyButton: false,
        showCancelButton: false,
        confirmButtonText: `OK`,
        icon: 'success',
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            return '';
        }
    })

}


