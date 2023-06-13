import { configureStore } from '@reduxjs/toolkit'
import MovieReducers from './Reducers/MovieReducers'
import SongReducers from './Reducers/SongReducers'
export const store = configureStore({
    reducer: {
        Movies: MovieReducers,
        Songs: SongReducers
    }
})