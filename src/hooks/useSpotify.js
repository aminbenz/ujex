import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { Spotify } from '../lib/spotify';

function useSpotify() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      if (session.error === 'RefreshAccessTokenError') {
        signIn();
      }

      Spotify.setAccessToken(session.user.accessToken);
    }
  }, [session]);

  return Spotify;
}

export default useSpotify;
