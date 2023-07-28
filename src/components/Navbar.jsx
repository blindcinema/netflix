import { useContext, useState } from "react"
import { MainContext } from "../context/Contexts"
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext";

export function Navbar() {
    const navigate = useNavigate();
    const { user, logOut } = UserAuth();
    const handleLogout = async () => {
        try {
        await logOut();
        navigate("/");
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className="flex items-center justify-between p-4 z-[100] w-full absolute">

            <Link to="/">
                <h1 className="text-red-600 text-4xl font-bold cursor-pointer">Swagflix</h1>
            </Link>

            {user?.email ? (
                <div className="">
                    <Link to="/account">
                        <button className="bg-black px-6 py-2 text-white mr-4">Account</button>
                    </Link>
                    <Link to="/">
                        <button className="bg-red-600 px-6 py-2 text-white" onClick={handleLogout}>Log Out</button>
                    </Link>
                </div>)
                :
                (
                    <div className="">
                        <Link to="/signup">
                            <button className="bg-black px-6 py-2 text-white mr-4">Register</button>
                        </Link>
                        <Link to="/login">
                        <button className="bg-red-600 px-6 py-2 text-white">Log In</button>
                        </Link>
                    </div>
                    )
                
             }

        </div>
    )
}