'use client';

import { signIn } from "next-auth/react";

const Login = () => {
    return (
        <div className="w-full bg-background grid grid-cols-1 divide-y">
            <div>
            <h1>Log in to Spotify</h1>
            <button onClick={() => signIn("spotify")}> Log In</button>
            </div>
            <div>
                <p>Playlist Analyzer, personal project created by Chuluunbat Purev</p>
            </div>

        </div>
    )
}

export default Login;