import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { List, PlaylistHeader, Track } from '../..';
import { Spotify } from '../../lib/spotify';
// import TracksTitleSection from '../../components/elements/TracksTitleSection';

const Playlist = () => {
  const [playlist, setPlaylist] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    Spotify.getPlaylist(id).then(({ body }) => {
      setPlaylist(body);
    });
  }, [id]);

  console.log(playlist);

  return (
    <section className="playlist">
      <div className="playlist-container">
        {/* PlaylistHeader  */}
        {playlist && (
          <PlaylistHeader
            name={playlist.name}
            type={playlist.type}
            image={playlist.images[0]?.url}
            description={playlist.description}
            owner={playlist.owner}
            tracks={playlist.tracks}
            followers={playlist.followers.total}
          />
        )}
        <section className="tracks-list">
          <div className="container">
            {playlist ? (
              <>
                {/* TracksTitleSection  */}
                <List data={['Title', 'Artist', 'Album', 'Test1', 'Test2']} />
                {/* loop of playlist tracks  */}
                <div className="popular-content">
                  {playlist.tracks.items.map(
                    ({
                      added_at,
                      track: { album, artists, uri, id, name, duration_ms },
                    }) => {
                      return (
                        <Track
                          key={id}
                          id={id}
                          name={name}
                          duration={duration_ms}
                          album_name={album.name}
                          artist_name={artists[0].name}
                          added_at={added_at}
                          uri={uri}
                        />
                      );
                    }
                  )}
                </div>
              </>
            ) : (
              <div>no items</div>
            )}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Playlist;
