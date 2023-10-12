"use client";

import { SimplifiedPlaylist, SpotifyApi } from "@spotify/web-api-ts-sdk"; 
import sdk from "@/lib/ClientInstance";
import { useSession, signOut, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home() {
  const session = useSession();

  if (!session || session.status !== "authenticated") {
    return (
      <div>
        <h1>Spotify Web API Typescript SDK in Next.js</h1>
        <button onClick={() => signIn("spotify")}>Sign in with Spotify</button>
      </div>
    );
  }

  return (
    <div>
      <SpotifySearch sdk={sdk} />
    </div>
  );
}

function SpotifySearch({ sdk }: { sdk: SpotifyApi }) {
  const [results, setResults] = useState<SimplifiedPlaylist[]>({} as SimplifiedPlaylist[]);

  useEffect(() => {
    (async () => {
      const results = await sdk.currentUser.playlists.playlists();//sdk.search("Lil Baby", ["artist"]);
      setResults(results.items);
    })();
  }, [sdk]);

  // generate a table for the results
  var tableRows: any[] = [] ;
  try{
    tableRows = results.map((playlist: SimplifiedPlaylist) => {
      return (
        <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img style={{width: "300px", height: "300px"}} className="rounded-t-lg object-cover " src={playlist.images[0].url} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{playlist.name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">By {playlist.owner.display_name}</p>
                
            </div>
        </div>
      );
    });
    }
  catch(err){
    console.log("error", err)
  }
  return (
    <>
      <h1>Your playlists</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tableRows}
      </div>
    </>
  );
}