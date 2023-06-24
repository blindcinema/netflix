import { createContext, useState, useEffect } from 'react';
import axios from "axios";
import { requests, options } from "../Request";
export const MainContext = createContext("fallback value apparently");

export function MainProvider(props) {

    const [movies, setMovies] = useState("");
    useEffect(() => {           
        axios.get(requests.requestPopular, options)
        .then((response) => {setMovies(response.data.results)})   
        .finally(setFeaturedMovie({title: movie.title, image: movie.backdrop_path, releaseDate: movie.release_date, overview: movie.overview}))       
    },[])

    const movie = movies[Math.floor(Math.random() * movies.length)];
    const [featuredMovie, setFeaturedMovie] = useState({
        title: "OK",
        image: "",
        releaseDate: "",
        overview: "",

    });
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