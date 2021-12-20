import { combineReducers } from "@reduxjs/toolkit";
import veiculoReducer from './reducers/veiculos'
const rootReducer = combineReducers({
    veiculos: veiculoReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer