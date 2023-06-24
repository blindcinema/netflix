import { useContext, useState } from "react"
import { MainContext } from "../context/Contexts"

export function Navbar() {


    return (
        <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
            <h1 className="text-red-600 text-4xl font-bold cursor-pointer">Swagflix</h1>
            <div className="">
                <button className="bg-black px-6 py-2 text-white mr-4">Register</button>
                <button className="bg-red-600 px-6 py-2 text-white">Log In</button>
            </div>
        </div>
    )
}