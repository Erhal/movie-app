import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data: {
        movies: [
            {
                title: 'Downton Abbey',
                rating: 5,
                genre: 'Drama',
                img: 'downton.jpg'
            },
            {
                title: 'Chernobyl',
                rating: 5,
                genre: 'Mini series',
                img: 'chernobyl.jpg'
            },
            {
                title: 'Rick and Morty',
                rating: 5,
                genre: 'Fantasy',
                img: 'rick.jpg'
            },
            {
                title: 'Loki',
                rating: 4.5,
                genre: 'Superhero',
                img: 'loki.jpg'
            }
        ],
        series: [
            {
                title: 'The Crown',
                rating: 5,
                episodes: 6,
                genre: 'Drama',
                img: 'slide.jpg'
            },
            {
                title: 'Loki',
                rating: 4.5,
                episodes: 6,
                genre: 'Superhero',
                img: 'loki.jpg'
            },
            {
                title: 'Chernobyl',
                rating: 5,
                episodes: 6,
                genre: 'Mini series',
                img: 'chernobyl.jpg'
            },
            {
                title: 'Rick and Morty',
                rating: 5,
                episodes: 49,
                genre: 'Fantasy',
                img: 'rick.jpg'
            }
        ]
    }
}

const movies = createSlice({
    name: 'movies',
    initialState,
    reducers: {

    }
})

export default movies.reducer