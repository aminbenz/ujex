import { IoEllipsisHorizontal, IoHeadset, IoHeartSharp } from 'react-icons/io5';

interface Props {
  id: string;
  title: string;
  uri: string;
  name: string;
  avatar: string;
  album_name: string;
  duration_ms: number | string;
  added_at: number | string;
}

interface TrackInterface {
  data: Props;
}

export const Track: React.FC<TrackInterface> = ({
  data: {
    id,
    title,
    uri: audio,
    name,
    album_name,
    duration_ms,
    // added_at,
  },
}) => {
  // when hove ron love btn in box make x on it
  const handleLoveBtnMouseOver = (e: any) => {
    e.target.classList.add('active');
  };
  const handleLoveBtnMouseLeave = (e: any) => {
    e.target.classList.remove('active');
  };
  return (
    <div
      className="box"
      key={id}
      onClick={() => {
        console.log(id);
      }}
    >
      {/* Play track Btn */}
      <button className="play-track">
        <IoHeadset />
        {/* <IoPauseCircleOutline style={{ opacity: '0' }} /> */}
      </button>
      {/* add to liked tracks Btn */}
      <button
        className="btn btn-love"
        onMouseOver={handleLoveBtnMouseOver}
        onMouseLeave={handleLoveBtnMouseLeave}
      >
        <IoHeartSharp />
      </button>
      <div className="content">
        <span className="music_name likedlist">{title}</span>
        <span className="name likedlist">{name}</span>
        <span className="album_name likedlist">{album_name}</span>
        {/* <span className="likedlist">{added_at?.split(' ')[0]}</span> */}
        <span className="liskedlist">{duration_ms || '00 : 00'}</span>
        <audio className="audio" src={`.${audio}`} />
      </div>
      <button className="btn btn-play">
        <IoEllipsisHorizontal />
      </button>
    </div>
  );
};
