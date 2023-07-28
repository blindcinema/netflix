import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react"


export function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { user, signUp } = UserAuth();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signUp(email, password);
            navigate("/");     
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <div className="w-full h-screen">
                <div className="fixed w-full px-4 py-24 z-50">
                    <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
                        <div className="max-w-[320px] mx-auto py-16">
                            <h1 className="text-3xl font-bold"> Sign Up</h1>
                            <form className="w-full flex flex-col py-4" onSubmit={handleSubmit} >
                            
                                <label htmlFor="email">Email:</label>
                                <input className="text-black" type="email"  placeholder="Email" autoComplete="email" id="email" onChange={(e)=> setEmail(e.target.value)}/>

                                <label htmlFor="password">Password:</label>
                                <input className="text-black" type="password" placeholder="Password" autoComplete="password" id="password" onChange={(e)=> setPassword(e.target.value)}/>


                                <button className="bg-red-600 py-3 my-6 rounded font-bold ">Sign Up</button>
                            </form>
                            <div className="flex justify-between items-center text-small text-gray-600">
                                <p><input type="checkbox" className="mr-2"/>Remember me:</p>
                                <p>Need help?</p>
                            </div>
                            <Link to="/login" className="text-gray-600 hover:underline relative top-56 ">Already Have an account?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}