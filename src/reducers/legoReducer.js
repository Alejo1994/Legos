import { types } from "../types/types";

const initialState = {
    activeBrick: null
}

export const legoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.brickActive:
            return {
                ...state,
                activeBrick: action.payload
            }

        default:
            return state;
    }
}