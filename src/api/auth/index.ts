import axios, { AxiosResponse } from 'axios'

const CLIENT_ID: string = ""
const CLIENT_SECRET: string = ""//import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET as string

const ENCODED_CREDENTIALS = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)