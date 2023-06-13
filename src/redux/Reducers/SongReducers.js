import { createSlice } from '@reduxjs/toolkit'


export const SongReducers = createSlice({
    name:'Movies',
    initialState: [],
    reducers:{
        AddSongs:(state,actions)  => {
            state.push( actions.payload)
        },
        DeleteSong:(state,actions) => {
            const index = state.indexOf(actions.payload);
            state.splice(index, 1);
        }
    }
})

export const { AddSongs ,DeleteSong } = SongReducers.actions;

export default SongReducers.reducer