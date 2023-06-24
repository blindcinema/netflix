import { useContext, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MainContext } from "../context/Contexts";

export function Movie({ item, id }) {
    const [like, setLike] = useState(false);
    const context = useContext(MainContext);
    function setMain() {
        context.setFeaturedMovie({ title: item.title, image: item.backdrop_path, overview: item.overview, releaseDate: item.release_date})
    }

    return (
        <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2" id={item.id} onClick={setMain}>
            <img className="w-full h-auto block" src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt={item.title}></img>
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white ">
                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">{item.original_title}</p>
                <p>{like ? <FaHeart className="absolute top-4 left-4 text-gray-300 " /> : <FaRegHeart className="absolute top-4 left-4 text-gray-300 " /> }</p>
        </div>
    </div>
    )
}