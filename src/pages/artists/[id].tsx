import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  Button,
  Card,
  Flex,
  Grid,
  Item,
  PlaylistHeader,
  Text,
} from '../../components';
import { IntFormater, millisToString } from '../../helper';
import { Spotify } from '../../lib/spotify';

const LIMIT = 6;

let GROUPS = [
  { label: 'Album', value: 'album' },
  { label: 'Appears On', value: 'appears_on' },
  { label: 'Single', value: 'single' },
  { label: 'Compilation', value: 'compilation' },
];

const Artist = () => {
  const [artist, setArtist] = useState(null);
  const [artistTopTracks, setArtistTopTracks] = useState([]);
  const [showMoreTracks, setShowMoreTracks] = useState<boolean>(false);
  const [artistAlbums, setArtistAlbums] = useState([]);
  const [relatedArtists, setRelatedArtists] = useState([]);
  const [selected, setSelected] = useState('album');

  const {
    query: { id },
  } = useRouter();

  // Get an artist
  const getArtist = async () => {
    const data = await Spotify.getArtist(id);
    setArtist(data.body);
  };

  //  Get an artist's top tracks
  const getArtistTopTracks = async () => {
    const data = await Spotify.getArtistTopTracks(id, 'TN');
    setArtistTopTracks(
      data.body.tracks.sort((a, b) => a.track_number - b.track_number)
    );
  };

  // Get artist' albums
  const getArtistAlbums = async () => {
    Promise.all(
      GROUPS.map(({ value }) =>
        Spotify.getArtistAlbums(id, {
          include_groups: value,
          limit: LIMIT,
        })
      )
    ).then((data) => {
      let values = [];
      let groups = [];

      data.map(({ body: items }) => values.push(...items.items));
      let unique = [...new Set(values.map((item) => item.album_group))];

      GROUPS.map((item) => {
        unique.filter((ele) => {
          if (item.value === ele) {
            groups.push(item);
          }
        });
      });

      GROUPS = groups;
      setArtistAlbums(values);
    });
  };

  // Get artist' albums
  const getArtistRelatedArtists = async () => {
    const data = await Spotify.getArtistRelatedArtists(id);
    setRelatedArtists(data.body.artists);
  };

  useEffect(() => {
    if (id) {
      getArtist();
      getArtistTopTracks();
      getArtistRelatedArtists();
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      getArtistAlbums();
    }
  }, [id]);

  if (!id || !artist) {
    return <main>No Artist</main>;
  }

  return (
    <section className="playlist">
      <PlaylistHeader
        name={artist.name}
        type={artist.type}
        image={artist.images[0].url}
        followers={artist.followers.total}
      />
      <main style={{ display: 'grid', gap: '30px' }}>
        <section
          style={{
            overflow: 'hidden',
            height: showMoreTracks ? 'auto' : '395px',
          }}
        >
          <Text as="h2">Popular</Text>
          {artistTopTracks.map(({ id, name, album, duration_ms }, index) => {
            return (
              <Item
                order={index + 1}
                key={id}
                id={id}
                title={name}
                image={album.images[2].url}
                imageRadius="sm"
                // middle={'yesy'}
                date={album.release_date}
                duration={millisToString(duration_ms)}
                icon={true}
              />
            );
          })}
        </section>
        <Text
          style={{ marginTop: '-10px' }}
          onClick={() => setShowMoreTracks((prev) => !prev)}
        >
          {showMoreTracks ? 'SHOW MORE' : 'SHOW LESS'}
        </Text>

        {/*  Albums */}
        {artistAlbums && (
          <section>
            <Flex style={{ padding: '20px 0' }}>
              {GROUPS.map(({ value, label }) => (
                <Button
                  key={value}
                  color={selected === value ? 'light' : 'dark'}
                  onClick={() => setSelected(value)}
                >
                  {label}
                </Button>
              ))}
            </Flex>
            <Grid cols={LIMIT}>
              {artistAlbums
                .filter((item) => item.album_group === selected)
                .map(({ id, name, images, album_type, release_date }) => {
                  return (
                    <Card
                      key={id}
                      id={id}
                      title={name}
                      description={`${new Date(
                        release_date
                      ).getFullYear()}, ${album_type}`}
                      image={images[1].url}
                    />
                  );
                })}
            </Grid>
          </section>
        )}
        <section>
          <Text as="h2">{`Artists related to ${artist.name}`}</Text>
          <Grid>
            {relatedArtists
              .slice(0, LIMIT)
              .map(({ id, name, images, followers }) => {
                return (
                  <Card
                    key={id}
                    id={id}
                    title={name}
                    description={`${IntFormater(followers.total)} Followers`}
                    image={images[1].url}
                    imageRadius="full"
                    width={200}
                    height={240}
                  />
                );
              })}
          </Grid>
        </section>
      </main>
    </section>
  );
};

export default Artist;
