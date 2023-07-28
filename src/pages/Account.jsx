import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext"
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export function Account() {
    const {user} = UserAuth();
    const docRef = doc(db, "users", `${user?.email}`);
    const [movies, setMovies] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(()=> {
        const getSnap = async () => {
        const docSnap = await getDoc(docRef);       
        setMovies(docSnap.data()?.savedShows);
        setLoaded(true);
        }
        getSnap();
    },[loaded])
    console.log(movies);
    return (
        <>
        <div className="flex text-white font-bold">
            <div className="relative top-64 left-16">
                {user?.email}
            </div>
            <div className="font-bold text-white flex flex-col relative top-96 ">
                <p>Saved Movies</p>
                <div>
                    { movies !== undefined ?
                            <>
                            <div className="relative flex items-center group ">
                                {movies.map((item, id)=> (
                                    <div key={id}>
                                        <p>{item.title}</p>
                                        <img src= {`https://image.tmdb.org/t/p/w500/${item.image}`} />
                                    </div>
                                )

                                )}
                            </div>
                            </>
                  
                    : null}
                </div>
                
            </div>
        
        </div>
        </>
    )
}