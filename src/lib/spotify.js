import spotifyWebApi from 'spotify-web-api-node';

export const authEndpoint = 'https://accounts.spotify.com/authorize';

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
  'ugc-image-upload',
  'user-follow-modify',
  'user-follow-read',
  'user-read-playback-position',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'playlist-read-private',
  'playlist-modify-private',
  'app-remote-control',
  'streaming',
  'user-read-email',
  'user-read-private',
  'user-library-read',
  // 'user-library-modify',
];

const credentials = {
  clientId: process.env.NEXT_PUBLIC_SPOTIFY_ID,
  clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_SECRET,
  redirectUri: 'http://localhost:3000/api/auth/callback/spotify',
  showDialog: true,
  responseType: 'token',
};

const Spotify = new spotifyWebApi(credentials);
const SpotifyApi = new spotifyWebApi(credentials);

const params = {
  scope: scopes.join(','),
};

const queryParamsString = new URLSearchParams(params).toString();

const LOGIN_URL = `${authEndpoint}?${queryParamsString}&show_dialog=true`;

if (typeof window !== 'undefined') {
  Spotify.setAccessToken(window.localStorage.getItem('token'));
}

export default SpotifyApi;

export { Spotify, LOGIN_URL };
