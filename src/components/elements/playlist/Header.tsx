import { useState } from 'react';
import { IoHeartOutline, IoMusicalNotesOutline } from 'react-icons/io5';
import { Button } from '../..';
import { IntFormater, msToTime } from '../../../helper';

interface PlaylistHeadProps {
  name: string;
  description?: string;
  image?: string;
  cover?: string;
  type?: string;
  owner?: object;
  tracks?: object;
  followers?: number;
}

const PlaylistHeader = ({
  name,
  description,
  image,
  type,
  cover,
  owner,
  tracks,
  followers,
}: PlaylistHeadProps) => {
  const [showMore, setShowMore] = useState(false); // more info about liked page and playlist

  const calcTracksDiration = (tracks) => {
    if (tracks?.length) {
      const dur = tracks.reduce(
        (total, current) => total + current.duration_ms,
        0
      );

      return msToTime(dur);
    }
  };

  return (
    <header className="header">
      <div
        className="playlist-bg"
        style={{
          backgroundImage: `url(${image})`,
        }}
        // ref={image}
      />
      <div className="image-container ">
        {image ? (
          <img src={image} alt={image + 'bunner'} />
        ) : type === 'saved-tracks' ? (
          <IoHeartOutline />
        ) : (
          <IoMusicalNotesOutline />
        )}
      </div>
      <div className="info">
        <span className="playlist-type">{type}</span>
        <div className="main-title">
          <h2 className="title">
            {name}
            {/* {type === 'likedTracks' ? 'Liked Songs' : playlistHeaderData?.title} */}
          </h2>
          <p className="desc">{description}</p>
        </div>
        <ul className="more-info">
          <li className="web-url">
            {owner && (
              <a href={`/${owner.type}/${owner.id}`}>{owner.display_name}</a>
            )}
            {/* <a href=""></a> */}
          </li>
          <li className="number-of-music">
            {tracks && <span>{`${tracks.length} Songs`}</span>}
          </li>
          <li className="time-range">
            <span>{calcTracksDiration(tracks)}</span>
            {followers && <span>{IntFormater(followers)} Followers</span>}
          </li>
        </ul>
        <div className="bottom-info">
          <Button color="secondary" size="lg">
            pause
          </Button>

          <button className="btn-love">
            <IoHeartOutline />
          </button>
          {/* {
            <AlertCard
            //   playlistId={id}
            //   isAlertShow={isAlertShow}
            //   setIsAlertShow={setIsAlertShow}
            />
          } */}
          {/* <div className="more" onClick={() => setShowMore(!showMore)}>
            <button className="btn-more">
              <FiMoreHorizontal />
            </button>
            {showMore && (
              <ul className="inner-more">
                <li>
                  Liked
                </li>
                <li>
                  <a
                    onClick={() => {
                      setIsEditPlaylist(true);
                      openPopup();
                    }}
                  >
                    Edit Playlist
                  </a>
                  <AddPlaylistModal></AddPlaylistModal>
                </li>
              </ul>
            )}
          </div> */}
        </div>
      </div>
    </header>
  );
};
export default PlaylistHeader;
