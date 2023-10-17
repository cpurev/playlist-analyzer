'use client';

import { SimplifiedPlaylist, SpotifyApi } from "@spotify/web-api-ts-sdk"; 
import sdk from "@/lib/ClientInstance";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <div className="bg-background my-4 rounded-lg p-3">
        <div>
          <ul className="flex flex-row mb-4">
            <li className="bg-foreground rounded-full mx-1 px-3 py-1.5">Playlists</li>
          </ul>
          <SpotifySearch sdk={sdk} />
        </div>
      </div>
    </>
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
  var tableRows: any[] | any = [] ;
  try{
    {tableRows = Array.isArray(results) ? results.map((playlist: SimplifiedPlaylist) => {
      return (
        <a key={playlist.id} href= {"/playlist/" + playlist.id}>
        <div className="max-w-sm bg-foreground border-gray-200 rounded-lg shadow hover:bg-accentBackground">
            <div className="p-3 overflow-hidden" >
                <img className="rounded-lg object-cover w-[150px] h-[150px] md:w-[200px] md:h-[200px]" src={playlist.images[0].url} alt="" />
            </div>
            <div className="p-3">
                <h5 className="mb-2 text-2xl font-bold tracking-tight ">{playlist.name}</h5>
                <p className="mb-3 font-normal text-accentForeground">By {playlist.owner.display_name}</p>
            </div>
        </div>
        </a>
      );
    })
    : (
      <div className="w-screen h-screen md:w-[920px] md:h-[777px] bg-foreground border-gray-200 rounded-lg shadow">
      </div>
    );}
  }
  catch(err){
    console.log("error", err)
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tableRows}
      </div>
    </>
  );
}