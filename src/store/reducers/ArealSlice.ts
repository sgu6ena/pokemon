import {IAreal} from "../../api/admin/areals/areals.type";
import {createSlice} from "@reduxjs/toolkit";

interface ArealState {
    areals: IAreal[]
    isLoading: boolean
    error: string
}

const initialState:ArealState ={
    areals:[],
    isLoading:false,
    error:''
}

export const arealSlice = createSlice({
    name:'areal',
    initialState,
    reducers:{

    },
    extraReducers:{

    }
})

export default arealSlice.reducer