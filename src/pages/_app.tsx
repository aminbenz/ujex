import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

import { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import '../../styles/index.css';
import { Navbar2, Player, Sidebar } from '../components';
import { Spotify } from '../lib/spotify';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [playlists, setPlaylists] = useState([]);

  const getLayout = Component.getLayout || ((page) => page);

  // get Current User
  const getMe = async () => {
    const data = await Spotify.getMe();
    setUser(data.body);
  };

  // Get a user playlists
  const getUserPlaylists = async () => {
    const data = await Spotify.getUserPlaylists();
    setPlaylists(
      data.body.items.map(({ id, name }) => {
        return {
          id,
          href: `/playlist/${id}`,
          name,
        };
      })
    );
  };

  useEffect(() => {
    if (session?.user) {
      getMe();
      getUserPlaylists();

      const timeout = setTimeout(() => {
        console.log('timeout');
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [session]);

  // if (loading) {
  //   return (
  //     <section
  //       style={{
  //         display: 'grid',
  //         placeItems: 'center',
  //         height: '100vh',
  //         gridTemplateRows: '1fr 100px',
  //       }}
  //     >
  //       <div className="image-container">
  //         <img width="100" src="brand/logo.png" alt="logo" />
  //       </div>
  //       <p>
  //         Mouzikty by <a href="//aminbenz.vercel.app">Amin Benz</a>
  //       </p>
  //     </section>
  //   );
  // }

  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        {getLayout(
          <div className="pages">
            <Sidebar playlists={playlists} />
            <div className="_">
              <Navbar2
                id={user?.id}
                name={user?.display_name}
                avatar={user?.images[0].url}
                isAuthenticated={user ? true : false}
              />
              <Component {...pageProps} />
            </div>
            <Player />
          </div>
        )}
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
