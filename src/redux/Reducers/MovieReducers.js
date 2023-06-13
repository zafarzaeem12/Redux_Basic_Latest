import { createSlice } from '@reduxjs/toolkit'


export const MovieReducers = createSlice({
    name:'Movies',
    initialState: [],
    reducers:{
        AddMovies:(state,actions)  => {
            state.push( actions.payload)
        },
        DeleteMovie:(state,actions) => {
            const index = state.indexOf(actions.payload);
            state.splice(index, 1);
        }
    }
})

export const { AddMovies ,DeleteMovie } = MovieReducers.actions;

export default MovieReducers.reducer