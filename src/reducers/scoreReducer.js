import { types } from "../types/types";

const initialState = {
    scores: []
}

export const scoreReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.saveScore:
            return {
                ...state,
                scores: [action.payload, ...state.scores]
            }

        case types.emptyScore:
            return {
                ...state,
                scores: []
            }

        default:
            return state;
    }
}