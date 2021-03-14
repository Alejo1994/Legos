import { types } from "../types/types";

export const brickSetActive = (brick)=>({
    type: types.brickActive,
    payload: brick
});