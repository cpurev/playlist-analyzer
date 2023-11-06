'use client';

import { SpotifyTrack } from "../api/types/entities"


function TrackTable({ tracks }: { tracks: SpotifyTrack[] }) {
    // generate a table for the results
    var tableRows: any[] | any = [] ;
    try{
      {tableRows = Array.isArray(tracks) ? tracks.map((track: SpotifyTrack, index: number) => {
        return (
          <tr className="hover:bg-accentBackground">
            <td className="px-6 truncate ">{index+1}</td>
            <td className="pr-6 pb-2 truncate">
              <div className="flex flex-col text-lg truncate ">
                {track.name}
                <span className="text-accentForeground text-sm truncate ">{track.artists[0].name}</span>
              </div>
            </td>
            <td className="pr-6 text-accentForeground truncate">{track.album}</td>
            <td className="pr-6">{track.duration_ms}</td>
          </tr>
        );
      })
      : (
        <tr>
  
          <td>Error</td>
          <td>No</td>
          <td>Items</td>
          <td>Here</td>
        </tr>
      );}
    }
    catch(err){
      console.log("error", err)
    }
  
    return (
      <div className="p-2">
      <table className="table-fixed w-full ">
        <thead>
          <tr className=" text-accentForeground">
            <th scope="col" className="bg-background sticky top-0 w-20 p-4">#</th>
            <th scope="col" className="bg-background sticky top-0 w-1/2 text-left ">Title</th>
            <th scope="col" className="bg-background sticky top-0 w-1/4 text-left">Album</th>
            <th scope="col" className="bg-background sticky top-0 text-left">Duration 
            <a href="#"><svg className="w-3 h-3 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
            </svg></a></th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>  
      </div>
    );
  }

  export default TrackTable;