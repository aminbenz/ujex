import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { DropDawn, Flex, Item, PlaylistHeader, Text } from '../..';
import { trackIdState } from '../../atoms/track';
import { millisToString, sort } from '../../helper';
import { Spotify } from '../../lib/spotify';

// import TracksTitleSection from '../../components/elements/TracksTitleSection';

const OPTIONS = [
  { label: 'Default', value: 'default' },
  { label: 'Sort by Name', value: 'name' },
  { label: 'Sort by Popularity', value: 'popularity' },
  { label: 'Sort by length (Short to long)', value: 'duration_ms' },
  // { label: 'Sort by release date', value: 'release-date' },
  // { label: 'Sort by save date', value: 'save-date' },
  // { label: 'Hapiest to saddest', value: 'mood' },
];

const TopTracks = () => {
  const [myTopTracks, setMyTopTracks] = useState([]);
  const [title, setTitle] = useState('');
  const [playlist, setPlaylist] = useState({ tracks: [] });
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistFilter, setPlaylistFilter] = useState(OPTIONS[0].value);
  const [page, setPage] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const [trackId, setTrackId] = useRecoilState(trackIdState);

  const getPlaylist = async (id: string) => {
    try {
      setLoading(true);
      const { body } = await Spotify.getPlaylist(id);
      setPlaylistTracks(body.tracks.items.map((item) => item.track));
      setPlaylist({
        ...body,
        tracks: body.tracks.items.map((item) => item.track),
      });
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  // Get tracks in the signed in user's Your Music library
  const getMySavedTracks = async () => {
    setLoading(true);
    const { body } = await Spotify.getMySavedTracks();
    setPlaylistTracks(body.items.map(({ track }) => track));

    setPlaylist({
      name: 'Liked Tracks',
      tracks: body.items.map((item) => item.track),
    });
    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      if (id === 'saved-tracks') {
        setPage('saved-tracks');
        getMySavedTracks();
      } else {
        setPage('playlist');
        getPlaylist(id);
      }
    }
  }, [id]);

  useEffect(() => {
    let filteredList = [];

    switch (playlistFilter) {
      case 'default':
        filteredList = playlist.tracks;
        break;
      case 'name':
        filteredList = sort(playlistTracks);
        break;
      case 'popularity':
        filteredList = sort(playlistTracks, 'popularity', true);
        break;
      case 'release-date':
        filteredList = playlist.tracks;
        break;
      case 'duration_ms':
        filteredList = sort(playlistTracks, 'duration_ms');
        break;
      default:
        filteredList = playlist.tracks;
    }

    setPlaylistTracks([...filteredList]);
  }, [playlistFilter]);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <section className="playlist">
      <div className="playlist-container">
        {/* PlaylistHeader  */}
        {playlist && (
          <PlaylistHeader
            name={playlist.name}
            description={playlist?.description}
            type={playlist?.type || id}
            owner={playlist?.owner}
            followers={playlist?.followers?.total}
            image={page === 'playlist' && playlist?.images[0]?.url}
            tracks={playlist?.tracks}
          />
        )}
        <section className="top-tracks">
          <div className="container">
            <Flex justify="space-between">
              <Text as="h2">Sort</Text>
              <DropDawn
                list={OPTIONS}
                onChange={(e) => setPlaylistFilter(e.target.value)}
              />
            </Flex>
            {playlistTracks.map(
              ({ id, name, album, artists, uri, duration_ms }, index) => {
                return (
                  <Item
                    onClick={() => setTrackId(id)}
                    order={index + 1}
                    key={id}
                    id={id}
                    title={name}
                    artistId={artists[0].id}
                    subtitle={artists[0]?.name}
                    image={album.images[2].url}
                    imageRadius="sm"
                    date={album.release_date}
                    duration={millisToString(duration_ms)}
                    icon={true}
                  />
                );
              }
            )}
          </div>
        </section>
      </div>
    </section>
  );
};

export default TopTracks;
