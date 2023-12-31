import { useContext, useEffect, useState } from "react"
import { MainContext } from "../context/Contexts";

export function Main() {
    const context = useContext(MainContext);
    return (
        <div className="w-full h-[550px] text-white">
            <div className="w-full h-full">
                <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
                <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${context.featuredMovie.image}`} alt={context.featuredMovie.title}></img>
            </div>
            <div className="absolute w-full top-[20%] p-4 md:p-8">
                <h1 className="text-3xl md:text-5xl font-bold">{context.featuredMovie.title}</h1>

                <div className="my-4">
                    <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">Play</button>
                    <button className="border  text-white border-gray-300 py-2 px-5 ml-4">Watch Later</button>
                </div>
                <p className="text-gray-400 text-sm">Released: {context.featuredMovie.releaseDate}</p>
                <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{context.featuredMovie.overview}</p>
            </div>
        </div>
    )
}