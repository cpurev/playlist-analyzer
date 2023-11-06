// Models
import {  SimplifiedArtist } from "@spotify/web-api-ts-sdk";

export interface  SpotifyTrack {
    id: string;
    name: string,
    artists: SimplifiedArtist[];
    album: string;
    duration_ms: string;
};

export interface SimplifiedAttributes {
    id: string;
    type: string;
    name: string;
    description: string;
    duration_ms: number;
    image: string;
    owner: string;
    total: number;
};
