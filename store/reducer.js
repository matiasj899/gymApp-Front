import { createSlice } from "@reduxjs/toolkit";

const initialState={
    name:null
}

export const currentRouteSlice=createSlice({
    name:'currentRouteName',
    initialState,
    reducers:{
        setCurrentRouteName: (state,action) => {
            state.name = action.payload
          },
         
    }
})
export const {setCurrentRouteName}=currentRouteSlice.actions

const routineInitialState={
    
        userId: null,
        days: null,
        objectiveId:null,
        levelId:null,
        trainingDays:[]
      
}

export const routineSlice=createSlice({
    name:'routine',
    initialState:routineInitialState,
    reducers:{
        change: (state) => {
            state.value = 'Melanie'
          }
    }
})
const currentUserInitialState={
    userData:null,
}
export const currentUserSlice=createSlice({
    name:'currentUser',
    initialState:currentUserInitialState,
    reducers:{
        setCurrentUserData: (state,action) => {
            console.log(action)
            state.userData = action.payload
          }
    }
})
export const {setCurrentUserData}=currentUserSlice.actions
