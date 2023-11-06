'use client';

import { Playlist, PlaylistedTrack, Track, SimplifiedArtist, TrackAnalysis } from "@spotify/web-api-ts-sdk"; 
import sdk from "@/lib/ClientInstance";
import { SpotifyTrack, SimplifiedAttributes } from "@/app/api/types/entities";
import dynamic from 'next/dynamic';

const TrackTable = dynamic(() => import("@/app/components/TrackTable"));
import CardTable from "@/app/components/CardTable";

import React, { useEffect, useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const [playlistInfo, setPlaylistInfo] = useState<SimplifiedAttributes>({} as SimplifiedAttributes);
  const [trackInfo, setTrackInfo] = useState<SpotifyTrack[]>([] as SpotifyTrack[]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true
    document.body.appendChild(script);

    (async () => {
      const results = await sdk.playlists.getPlaylist(params.slug);  
      const newData = [];

      for (const track of results.tracks.items) {
        const data: SpotifyTrack = {
          id: track.track.id,
          name: track.track.name,
          artists: (track.track as Track).artists,
          album: (track.track as Track).album.name,
          duration_ms: millisToMinutesAndSeconds(track.track.duration_ms),
        };
        newData.push(data);
      }
      
      var attributes: SimplifiedAttributes = {
        id: results.id,
        type: results.type,
        description: results.description,
        duration_ms: 0,
        owner: results.owner.display_name,
        total: results.tracks.total,
        name: results.name,
        image: results.images[0].url,
      };

      setPlaylistInfo(attributes);
      setTrackInfo(newData);
    })();

    return () => {
      document.body.removeChild(script);
    };
  }, [sdk]);

  return (
    <div className="w-full lg:w-[960px] my-6 flex flex-col-reverse">
      <div className="col-span-4 bg-background my-2 rounded-lg">
        <TrackTable tracks={trackInfo}/> 
      </div>
      <div className="col-span-1 bg-background rounded-lg p-4">
        <CardTable attr={playlistInfo}/>
      </div>
    </div>
  );
}

function millisToMinutesAndSeconds(millis: number) {
  var minutes: number = Math.floor(millis / 60000);
  var seconds : string = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds.length < 2 ? '0' : '') + seconds;
}