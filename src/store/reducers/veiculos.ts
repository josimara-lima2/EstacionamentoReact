import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

interface Veiculo{
    nome:string;
    placa:string;
    entrada:string;
}


const initialState = [] as Veiculo[]

const VeiculoSlice = createSlice({
    name:"veiculos",
    initialState,
    reducers:{
        lerVeiculo(state,action:PayloadAction<Veiculo[]>){
            return localStorage.patio ? JSON.parse(localStorage.patio) : []
            
           
        },

        adicionarVeiculo(state,action:PayloadAction<Veiculo>){
            const patio = [...state,action.payload]
            localStorage.setItem("patio",JSON.stringify(patio))
       
        },
        removerVeiculo(state,action:PayloadAction<{placa:string}>){
            localStorage.setItem("patio",JSON.stringify(""))
            const patio =[...state]
            const novoPatio = patio.filter((item) => item.placa !== action.payload.placa)

            localStorage.setItem("patio",JSON.stringify(novoPatio))
            
        }, 
    


        
       
        
    }
})


export const {lerVeiculo, adicionarVeiculo,removerVeiculo} = VeiculoSlice.actions
export const VeiculoSelector = (state:RootState) => state.veiculos
export default VeiculoSlice.reducer