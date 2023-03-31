import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  IoHeartOutline,
  IoHeartSharp,
  IoPlayCircleOutline,
} from 'react-icons/io5';
import { millisToString } from '../../../helper';
import { Spotify } from '../../../lib/spotify';

interface TrackInterface {
  id?: string;
  name: string;
  avatar?: string;
  album_name?: string;
  artist_name: string;
  duration?: number;
  added_at?: string | number;
  uri?: string;
  isLiked?: boolean;
  order?: number;
  height?: number | string;
  width?: number | string;
  text?: string;
  bg?: string;
  style?: React.CSSProperties;
  fontSize?: number | string;
  onClick?: any;
  artistId: string;
}

export const Track: React.FC<TrackInterface> = ({
  id,
  uri,
  name,
  artist_name,
  album_name,
  order,
  isLiked,
  duration,
  style,
  height,
  width,
  text,
  bg,
  fontSize,
  artistId,
  added_at,
  ...rest
}) => {
  // when hove ron love btn in box make x on it

  const [liked, setLiked] = useState(isLiked);
  const formatter = new Intl.DateTimeFormat('en', { month: 'short' });
  const date = new Date(added_at);

  const styles = {
    style: {
      backgroundColor: bg,
      fontSize,
      color: text,
      width,
      height,
      ...style,
    },
  };

  const containsMySavedTracks = async () => {
    try {
      const data = await Spotify.containsMySavedTracks([id]);
      const trackIsInYourMusic = data.body[0];
      if (trackIsInYourMusic) {
        setLiked(true);
      } else {
        setLiked(false);
      }
    } catch (err) {
      console.log(err);
      setLiked(false);
    }
  };

  useEffect(() => {
    containsMySavedTracks();
  }, [id]);

  return (
    <div {...rest} className="box" {...styles}>
      <button className="icon-love" aria-label="love">
        {liked ? <IoHeartSharp /> : <IoHeartOutline />}
      </button>
      {order && <span className="order">{order}</span>}
      <ul className="content">
        <li>
          <Link className="name" href={`/tracks/${artistId}`}>
            {name}
          </Link>
        </li>

        <li>
          <Link className="name" href={`/artists/${artistId}`}>
            {artist_name}
          </Link>
        </li>
        <li>
          <a className="name" href={`#`}>
            {album_name}
          </a>
        </li>
      </ul>
      {added_at && (
        <span className="added-at">{`${date.getUTCDate()} ${formatter.format(
          date
        )},  ${date.getUTCFullYear()}`}</span>
      )}
      {duration && <span className="duration">{millisToString(duration)}</span>}
      <button className="icon-play" aria-label="play">
        <IoPlayCircleOutline />
      </button>
    </div>
  );

  // return (
  //   <div className="box" key={id}>
  //     {/* Play track Btn */}
  //     <button aria-label="icon" className="play-track">
  //       <IoHeadset />
  //       {/* <IoPauseCircleOutline style={{ opacity: '0' }} /> */}
  //     </button>
  //     {/* add to liked tracks Btn */}
  //     <button
  //       aria-label="icon"
  //       className="icon btn-love"
  //       // onMouseOver={handleLoveBtnMouseOver}
  //       // onMouseLeave={handleLoveBtnMouseLeave}
  //     >
  //       <IoHeartSharp />
  //     </button>
  //     <div className="content">
  //       <span className="music_name likedlist">{name}</span>
  //       <span className="name likedlist">{artist_name}</span>
  //       <span className="album_name likedlist">{album_name}</span>
  //       <span className="likedlist">{'2022-05-12' || duration_ms}</span>
  //       <span className="liskedlist">{'3:12' || duration_ms}</span>
  //       <audio className="audio" src={`${uri}`} />
  //     </div>
  //     <button aria-label="icon" className="icon btn-play">
  //       <IoEllipsisHorizontal />
  //     </button>
  //   </div>
  // );
};
