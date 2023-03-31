import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Card, Grid, Text, Title } from '../';
import { getCountries } from '../helper';
import { Spotify } from '../lib/spotify';

const LIMIT = 7;

const COUNTRIES = [
  { label: 'Tunisia', value: 'TN' },
  { label: 'Unisted State', value: 'US' },
];

const TIME_RANGE = [
  { label: 'Last 4 weeks ', value: 'short_term' },
  { label: 'Last 6 mounths', value: 'medium_term' },
  { label: 'All time ', value: 'long_term' },
];

const Browser = () => {
  const [playlists, setPlaylists] = useState([]);
  const [topLists, setTopLists] = useState([]);
  const [message, setMessage] = useState('');
  const [newReleases, setNewReleases] = useState([]);
  const [isNewReleasesLoading, setIsNewReleasesLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  const [myTopTracks, setMyTopTracks] = useState([]);
  const [selected, setSelected] = useState('short_term');
  const [country, setCountry] = useState('TN');
  const [isLoading, setIsLoading] = useState(false);
  const { locale } = useRouter();

  // get Top Lists
  const getPlaylistsCategory = async () => {
    const data = await Spotify.getPlaylistsForCategory('toplists', {
      locale,
      // country,
    });
    setTopLists(data.body.playlists.items);
  };

  const getFeaturedPlaylists = async (options?: object) => {
    const data = await Spotify.getFeaturedPlaylists(options);
    setMessage(data.body.message);
    setPlaylists(data.body.playlists.items);
  };

  const getMyTopTracks = async (options?: object) => {
    const data = await Spotify.getMyTopTracks(options);
    setMyTopTracks(data.body.items);
  };

  // Get a List of Categories
  const getCategories = async (options?: object) => {
    const { body } = await Spotify.getCategories(options);
    setGenres(body.categories.items);
  };

  // Retrieve new releases
  const getNewReleases = async (options?: object) => {
    try {
      setIsNewReleasesLoading(true);
      const data = await Spotify.getNewReleases(options);
      setNewReleases([...data.body.albums.items]);
      setIsNewReleasesLoading(false);
    } catch (error) {
      setIsNewReleasesLoading(false);
    }
  };

  useEffect(() => {
    getPlaylistsCategory();
    getFeaturedPlaylists();
    getCategories({
      limit: LIMIT,
      // country: 'TN',
      // locale: 'tn',
    });
  }, []);

  useEffect(() => {
    getMyTopTracks({ limit: 12, time_range: selected });
  }, [selected]);

  useEffect(() => {
    getNewReleases({ limit: LIMIT, country });
  }, [country]);

  if (isLoading) {
    return <div>load...</div>;
  }

  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <section
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
      >
        <Text as="h2" color="gradient">
          {message}
        </Text>
        <Grid>
          {topLists.map(({ id, images, name, owner }) => {
            return (
              <Card
                description={owner.display_name}
                title={name}
                key={id}
                href={`/playlists/${id}`}
                image={images[0].url}
                height={210}
              ></Card>
            );
          })}
        </Grid>
      </section>
      <section
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
      >
        <Grid>
          {playlists.map(({ id, description, name, images }) => {
            return (
              <Card
                key={id}
                href={`/playlists/${id}`}
                title={name}
                description={description}
                image={images[0].url}
              />
            );
          })}
        </Grid>
      </section>
      {/* New Releases Tracks*/}
      <section>
        <Title
          border={false}
          label="Country"
          list={getCountries()}
          onChange={(e) => setCountry(e.target.value)}
          fontSize={19}
          style={{ marginBottom: '10px' }}
        >
          New Releases
        </Title>
        <Grid cols={LIMIT}>
          {newReleases.map(({ id, name, images, artists, uri }) => {
            return (
              <Card
                loading={isNewReleasesLoading}
                type="track"
                key={id}
                id={id}
                title={name}
                image={images[1].url}
                // album_name={name}
                description={artists[0].name}
              />
            );
          })}
        </Grid>
      </section>
      {/* TOP TRACKS */}
      <section>
        <Title
          border={false}
          list={TIME_RANGE}
          label={'Show As'}
          onChange={(e) => setSelected(e.target.value)}
          fontSize={19}
          style={{ marginBottom: '10px' }}
        >
          Your top tracks
        </Title>
        <Grid>
          {myTopTracks.map(({ id, name, album, artists }) => {
            return (
              <Card
                type="track"
                key={id}
                id={id}
                name={name}
                title={name}
                description={artists[0].name}
                href={`/tracks/${id}`}
                image={album.images[0].url}
              />
            );
          })}
        </Grid>
      </section>

      <section>
        <Title
          border={false}
          options={{ caption: 'Show All', href: '/genres' }}
        >
          Genres
        </Title>
        <Grid cols={LIMIT}>
          {genres.map(({ id, name, icons }) => {
            return (
              <Card
                key={id}
                href={`/genres/${id}`}
                title={name}
                image={icons[0].url}
                height={210}
              />
            );
          })}
        </Grid>
      </section>
    </main>
  );
};

export default Browser;
