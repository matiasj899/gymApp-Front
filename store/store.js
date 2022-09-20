import {configureStore} from '@reduxjs/toolkit'
import { currentRouteSlice,routineSlice,currentUserSlice } from './reducer'
export const store=configureStore({
    reducer:{
currentRoute:currentRouteSlice.reducer,
routine:routineSlice.reducer,
currentUser:currentUserSlice.reducer
    }
})