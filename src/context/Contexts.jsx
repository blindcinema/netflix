import { createContext, useState, useEffect } from 'react';
import axios from "axios";
import { requests, options } from "../Request";
export const MainContext = createContext("fallback value apparently");

export function MainProvider(props) {

    const [movies, setMovies] = useState("");
    const [randomMovie, setRandomMovie] = useState("");
    const [featuredMovie, setFeaturedMovie] = useState({
        title: "Please wait...",
        image: "Please wait...",
        releaseDate: "Please wait...",
        overview: "Please wait...",   
    });
    const getData = async () => {
        const response = await axios.get(requests.requestPopular, options)
        return response;
    }
    const getRandomMovie = () => {
        return movies[Math.floor(Math.random() * movies.length)]
    }

    useEffect(() => {
        const movie = randomMovie;
        getData()
        .then((response) => {
            setMovies(response.data.results);
            setRandomMovie(getRandomMovie);
        })                          
        setFeaturedMovie({ title: movie.title, image: movie.backdrop_path, releaseDate: movie.release_date, overview: movie.overview })
    },[])



    

    return (
        <MainContext.Provider value={{
            featuredMovie,
            setFeaturedMovie,
            movies,
         
        }}>
        {props.children}
        </ MainContext.Provider>
    )
};