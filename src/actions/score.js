import { types } from "../types/types";

export const saveScore = (board, score) => ({
    type: types.saveScore,
    payload: ({ board, score })
});

export const emptyScore = ()=>({
    type: types.emptyScore
});