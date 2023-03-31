import { useEffect, useRef, useState } from 'react';

import {
  IoHeartOutline,
  IoPauseOutline,
  IoPlayBackOutline,
  IoPlayForwardOutline,
  IoPlaySharp,
  IoRepeat,
  IoShuffle,
  IoVolumeHighOutline,
  IoVolumeLowOutline,
  IoVolumeMediumOutline,
  IoVolumeMuteOutline,
} from 'react-icons/io5';
import { useRecoilState } from 'recoil';
import { trackIdState } from '../../../atoms/track';
import { Spotify } from '../../../lib/spotify';

interface TrackProps {
  id: string;
  name: string;
  description?: string;
}

interface StateProps {
  is_playing: boolean;
  id?: string;
  currently_playing_type?: string;
  context?: any;
  progress_ms?: number;
  timestamp?: number;
  shuffle_state: true;
  is_active: boolean;
  is_private_session: boolean;
  is_restricted: boolean;
  name?: string;
  type?: string;
  volume_percent: number;
}

interface ActionsProps {
  resuming: boolean;
  toggling_repeat_track?: boolean;
  toggling_shuffle?: boolean;
}

const Player = () => {
  const [trackId, setTrackId] = useRecoilState(trackIdState);
  const [track, setTrack] = useState(null);
  const [state, setState] = useState<StateProps>();
  const [actions, setActions] = useState<ActionsProps>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(50);
  const [isLiked, setIsLiked] = useState(false);
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  const formater = (DATA) => {
    if (!DATA?.ietm) return;
    setTrack({
      ...DATA.item,
      // subtitle: DATA.album.name,
      artists: DATA.item.artists.map((artist) => artist.name).join(', '),
      image: DATA.item.album.images[1].url,
    });
    setState({
      ...DATA?.device,
      is_playing: DATA.is_playing,
      currently_playing_type: DATA.currently_playing_type,
      shuffle_state: DATA?.shuffle_state,
      progress_ms: DATA.progress_ms,
      timestamp: DATA.timestamp,
    });
    setActions(DATA?.actions.disallows);
  };

  // Get the User's Currently Playing Track
  const getMyCurrentPlayingTrack = async () => {
    const { body } = await Spotify.getMyCurrentPlayingTrack();
    console.log('getMyCurrentPlayingTrack', body);
    formater(body);
  };
  // Get Currently Playing Track State
  const getMyCurrentPlaybackState = async () => {
    const { body } = await Spotify.getMyCurrentPlaybackState();
    console.log('getMyCurrentPlaybackState', body);
    formater(body);
  };

  const getTrack = async () => {
    const { body } = await Spotify.getTrack(trackId);
    setTrack({
      ...body,
      // subtitle: body.album.name,
      artists: body.artists.map((artist) => artist.name).join(', '),
      image: body.album.images[1].url,
    });
  };

  const play = () => {
    setIsPlaying(true);
    console.log('play');
    audioRef?.current?.play();
  };

  const pause = () => {
    setIsPlaying(false);
    audioRef?.current?.pause();
  };

  const toggle = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (audioRef?.current?.readyState >= 2) {
      if (isPlaying) audioRef?.current?.play();
      if (!isPlaying) audioRef?.current?.pause();
    }
  }, [isPlaying, trackId]);

  // SET Volume
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Spotify.setVolume(volume);
    }, 500);
    return () => clearTimeout(timeout);
  }, [volume]);

  // initial current playing track
  useEffect(() => {
    getMyCurrentPlayingTrack();
    getMyCurrentPlaybackState();
  }, []);

  // get get MyCurrent Playing Track or GET Selected SONG
  useEffect(() => {
    if (trackId) {
      getTrack();
      play();
    }
  }, [trackId]);

  // Progress Bar Ref
  useEffect(() => {
    if (progressBarRef) {
      // console.log(progressBarRef.current.currentSrc);
    }
  }, [progressBarRef]);

  // no track selected
  if (!track) {
    return <div>Played Track appear here.</div>;
  }

  if (!state || !actions || !track || !audioRef) {
    return <div>Wait.</div>;
  }

  return (
    <footer className="music-player">
      <div className="music-player-content">
        <div className="left-section">
          <div>
            <div className="btns">
              <button className="now active">now</button>
              <button className="next">next</button>
              <button className="history">history</button>
            </div>

            <div className="info">
              <div className="icons">
                <button
                  // onClick={() =>
                  //   setConfigAudio({
                  //     ...configAudio,
                  //     loop: !configAudio.loop,
                  //   })
                  // }
                  className="icon"
                >
                  {actions.toggling_shuffle ? (
                    <IoRepeat style={{ color: '#006afe' }} />
                  ) : (
                    <IoRepeat />
                  )}
                </button>
                <button
                  // onClick={() =>
                  //   setConfigAudio({
                  //     ...configAudio,
                  //     shuffle: !configAudio.shuffle,
                  //   })
                  // }
                  className="icon"
                >
                  {state?.shuffle_state ? (
                    <IoShuffle style={{ color: '#006afe' }} />
                  ) : (
                    <IoShuffle />
                  )}
                </button>

                <button
                  className="icon"
                  // onClick={() => {
                  //   addToLikedList(id);
                  // }}
                >
                  {/* {liked ? <IoHeartSharp /> : <IoHeartOutline />} */}
                  <IoHeartOutline />
                </button>
              </div>
              <div className="info-content">
                <h3 className="artist-name">{track.name}</h3>
                <span className="album-name">{track.subtitle}</span>
                <p className="desc">{track.artists}</p>
                <div className="volume">
                  {volume === 0 && <IoVolumeMuteOutline />}
                  {volume > 0 && volume < 30 && <IoVolumeLowOutline />}
                  {volume >= 30 && volume < 70 && <IoVolumeMediumOutline />}
                  {volume >= 70 && <IoVolumeHighOutline />}
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={`disc ${isPlaying && 'active'}`}>
            <div className="image">
              <img src={track.image} alt={track.name} />
              <button className="icon playback" arial-label="icon">
                <IoPlayBackOutline />
              </button>
              <div className="pause start" onClick={() => toggle()}>
                <button>
                  {isPlaying ? <IoPauseOutline /> : <IoPlaySharp />}
                </button>
              </div>
              <button className="icon playforward" arial-label="icon">
                <IoPlayForwardOutline />
              </button>
              {/* AUDIO */}
              <audio
                // autoPlay
                loop={actions.toggling_shuffle}
                ref={audioRef}
                src={track.preview_url}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="progress-bar"
        // data-currentTime={millisToString(state.progress_ms)}
        // data-duration={millisToString(state.timestamp)}
      >
        <input
          // ref={progressBarRef}
          type="range"
          defaultValue="0"
          // onChange={changeRange}
        />
      </div>
    </footer>
  );
};
export default Player;
