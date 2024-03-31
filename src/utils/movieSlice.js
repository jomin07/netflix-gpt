import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        upcomingMovies: null,
        popularMovies: null,
        topRatedMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) =>{
            state.trailerVideo = action.payload;
        },
        addUpcomingMovies: (state, action) =>{
            state.upcomingMovies = action.payload;
        },
        addPopularMovies: (state, action) =>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) =>{
            state.topRatedMovies = action.payload;
        }
    }
});

export const { addNowPlayingMovies, addTrailerVideo, addUpcomingMovies, addPopularMovies, addTopRatedMovies } = moviesSlice.actions;

export default moviesSlice.reducer;