'use client';

import { signIn } from "next-auth/react";

const Login = () => {
    return (
        <div className="w-full h-max my-4 bg-background grid grid-cols-1 justify-items-center content-center divide-y divide-slate-700">
            <div>
                <h1 className="font-extrabold text-5xl my-8">Log in to Spotify</h1>
                <button className="w-full my-8 bg-green text-black font-bold py-2 px-4 rounded-full transition ease-in-out  hover:scale-110 duration-200"
                    onClick={() => signIn("spotify")}> Log In</button>
            </div>
            <div className="my-8">
                <p>Playlist Analyzer, graph your playlist data. A personal project created by Chuluunbat Purev</p>
            </div>

        </div>
    )
}

export default Login;