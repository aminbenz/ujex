import { useWindowWidth } from '@react-hook/window-size';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  Card,
  Grid,
  Item,
  Tablist,
  Text,
  Title,
  UserHeader,
} from '../../components';
import { millisToString } from '../../helper';
import { Spotify } from '../../lib/spotify';

const PLAYLISTS_FLTER = [
  {
    label: 'All',
    value: 'all',
  },
  { label: 'Playlist you own', value: 'own' },
  { label: 'Playlist you follow', value: 'follow' },
];

const User = () => {
  const [user, setUser] = useState(null);
  const [playlists, setPlaylists] = useState([]);
  const [playlistsFilter, setPlaylistFilter] = useState(
    PLAYLISTS_FLTER[0].value
  );
  const [filteredPlaylists, setFilteredPlaylists] = useState([]);
  const [recentlyPlayedTracks, setRecentPlayedTracks] = useState([]);
  const [myTopTracks, setMyTopTracks] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [myFeaturedPlaylists, setMyFeaturedPlaylists] = useState([]);
  const [followedArtists, setFollowedArtists] = useState([]);
  const [showMoreTracks, setShowMoreTracks] = useState<boolean>(false);

  const [selected, setSelected] = useState('album');
  const onlyWidth = useWindowWidth();
  const [error, setError] = useState(null);
  const { data: session } = useSession();
  const LIMIT = onlyWidth > 1358 ? 7 : 6;
  const {
    query: { id },
  } = useRouter();

  //  getMyTopTracks
  const getMyTopTracks = async () => {
    const data = await Spotify.getMyTopTracks({ limit: 10 });
    const myTopTracks = data.body.items;
    setMyTopTracks(myTopTracks);
  };

  //  Retrieve featured playlists
  const getFeaturedPlaylists = async () => {
    const data = await Spotify.getFeaturedPlaylists({ limit: LIMIT });
    const FeaturedPlaylists = data.body.items;
    console.log(FeaturedPlaylists);
  };

  //  getUserPlaylists
  const getUserPlaylists = async () => {
    const data = await Spotify.getUserPlaylists({ limit: LIMIT });
    const playlists = data.body.items;
    setPlaylists(playlists);
  };

  const getMyRecentlyPlayedTracks = async () => {
    const data = await Spotify.getMyRecentlyPlayedTracks({ limit: 10 });
    const uniqueArray = [
      ...new Map(
        data.body.items
          .sort((a, b) => new Date(b.played_at) - new Date(a.played_at))
          .map((item) => [item.track.id, item.track])
      ).values(),
    ].slice(0, 6);

    setRecentPlayedTracks(uniqueArray);
  };

  const getFollowedArtists = async () => {
    const data = await Spotify.getFollowedArtists({ limit: LIMIT });
    setFollowedArtists(data.body.artists.items);
  };

  // getTopArtists
  const getTopArtists = async () => {
    const topArtists = await Spotify.getMyTopArtists({ limit: LIMIT });
    setTopArtists(topArtists.body.items);
  };

  useEffect(() => {
    if (id) {
      Spotify.getUser(id).then((data) => setUser(data.body));

      // Get a user playlists
      getUserPlaylists();

      if (session?.user.id === id) {
        // GET MyRecently Played Tracks
        getMyRecentlyPlayedTracks();

        getFeaturedPlaylists();

        // GET Top Tracks
        getMyTopTracks();

        // get Following
        getFollowedArtists();

        getTopArtists();
      }
    }
  }, [id]);

  // playlists filter

  useEffect(() => {
    const filteredPlaylists = [...playlists].filter((playlist) => {
      if (playlistsFilter === 'all') {
        return playlist;
      }
      if (playlistsFilter === 'own') {
        return playlist.owner.id === session.user.id;
      }
      if (playlistsFilter === 'follow') {
        return playlist.owner.id !== session.user.id;
      }
    });

    setFilteredPlaylists(filteredPlaylists);
  }, [playlistsFilter, playlists]);

  if (!user) {
    return <div>loading</div>;
  }

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginTop: 20,
      }}
    >
      <UserHeader
        style={{ marginBottom: '10px' }}
        avatar={user.images[0].url}
        name={user.display_name}
        type={user.type}
        // followers={user.followers.total}
      />

      <Tablist
        text="#818181"
        data={[
          {
            name: 'Overview',
            href: '/overview',
          },
          {
            name: 'recent listening',
            href: '/recent listening',
          },
          {
            name: 'playlists',
            href: '/playlists',
          },
          {
            name: 'followers',
            href: '/followers',
          },
          {
            name: 'followings',
            href: '/followings',
          },
        ]}
      />

      {/* My Top Artists */}
      <section>
        <Title
          border={false}
          options={{ href: '/top/artists', caption: 'Show All' }}
        >
          Top Artists this mounth
        </Title>
        <Grid>
          {topArtists.map(({ id, name, artist, images, followers, genres }) => {
            return (
              <Card
                type="artist"
                id={id}
                key={id}
                title={name}
                //   description={`${genres.join(', ')}`}
                image={images && images[2].url}
                imageRadius="full"
                height="auto"
                center
              />
            );
          })}
        </Grid>
      </section>

      {/* My Top Tracks */}
      {myTopTracks.length && (
        <>
          <section
            style={{
              overflow: 'hidden',
              height: showMoreTracks ? 'auto' : '395px',
            }}
          >
            <Text as="h3">Your top tracks</Text>
            {myTopTracks.map(
              ({ id, name, album, artists, uri, duration_ms }, index) => {
                return (
                  <Item
                    order={index + 1}
                    key={id}
                    id={id}
                    title={name}
                    artistId={artists[0].id}
                    image={album.images[2].url}
                    imageRadius="sm"
                    subtitle={artists[0].name}
                    date={album.release_date}
                    duration={millisToString(duration_ms)}
                    icon={true}
                  />
                );
              }
            )}
          </section>
          <Text
            style={{ marginTop: '-10px' }}
            onClick={() => setShowMoreTracks((prev) => !prev)}
          >
            {showMoreTracks ? 'SHOW MORE' : 'SHOW LESS'}
          </Text>
        </>
      )}
      {/* <section className="s2">
          <Title>My Top Tracks</Title>
          <div>
            {myTopTracks.map(
              ({ id, name, album, artists, uri, duration_ms }, index) => {
                return (
                  <Item
                    order={index + 1}
                    key={id}
                    id={id}
                    title={name}
                    subtitle={artists[0].name}
                    image={album.images[2].url}
                    imageRadius="sm"
                    // middle={album.name}
                    date={album.release_date}
                    duration={millisToString(duration_ms)}
                    icon={true}
                  />
                );
              }
            )}
          </div>
        </section> */}
      {/* if me get recently played tracks */}
      {recentlyPlayedTracks.length && (
        <section className="s1">
          <Title>Recently played</Title>
          <Grid cols={LIMIT}>
            {recentlyPlayedTracks.map(({ id, artists, name, album }) => {
              return (
                <Card
                  type="track"
                  key={id}
                  id={id}
                  title={name}
                  description={artists[0].name}
                  image={album.images[0].url}
                />
              );
            })}
          </Grid>
        </section>
      )}
      {/* Followed Artists */}
      {followedArtists.length && (
        <section className="s2">
          <Title
            //  list={PLAYLISTS_FLTER}
            label="Show All"
            //  onChange={(e) => setPlaylistFilter(e.target.value)}
          >
            Followed artists
          </Title>
          <Grid cols={LIMIT}>
            {followedArtists.map(({ id, description, name, images }) => {
              return (
                <Card
                  type="artist"
                  key={id}
                  id={id}
                  title={name}
                  description={description}
                  image={images[0]?.url}
                  imageRadius="full"
                  height={200}
                  center
                />
              );
            })}
          </Grid>
        </section>
      )}
      {playlists.length && (
        <section className="s2">
          <Title
            list={PLAYLISTS_FLTER}
            label="Show As"
            onChange={(e) => setPlaylistFilter(e.target.value)}
          >
            Playlists
          </Title>
          <Grid cols={LIMIT}>
            {filteredPlaylists.map(({ id, description, name, images }) => {
              return (
                <Card
                  key={id}
                  id={id}
                  title={name}
                  description={description}
                  image={images[0]?.url}
                />
              );
            })}
          </Grid>
        </section>
      )}
    </main>
  );
};

export default User;
