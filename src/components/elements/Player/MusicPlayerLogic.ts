// import { useRef, useState } from 'react';
// import { useGlobalContext } from '../../../context';
// import { calculateTime } from '../../../helper/calculateTime';

// interface audioConfigProps {
//   autoPlay: boolean;
//   loop: boolean;
//   shuffle: boolean | null; // because react error
//   muted: boolean;
// }

// const MusicPlayerLogic = () => {
//   const {
//     dataDB,
//     isPlaying,
//     setIsPlaying,
//     musicID,
//     addToLikedList,
//     groupMediaLength,
//     setGroupMediaLength,
//   } = useGlobalContext();

//   // audio states
//   const [duration, setDuration] = useState(0);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [audioConfig, setAudioConfig] = useState<audioConfigProps>({
//     autoPlay: false,
//     loop: false,
//     shuffle: null, // because react error
//     muted: true,
//   });

//   // refrences
//   const audioPlayerRef = useRef<any>(null);
//   const progressBarRef = useRef<any>(null);
//   const musicListContent = useRef<any>(null);
//   const animationRef = useRef<any>(null);

//   const currentMusic = [];

//   // draw src in audio and playit if state is playing or pause
//   // useEffect(() => {
//   //   const checkMusic = () => {
//   //     if (currentMusic.length !== 0) {
//   //       const audio = audioPlayerRef.current;
//   //       if (isPlaying) {
//   //         audio?.play();
//   //         animationRef.current = requestAnimationFrame(whilePlaying);
//   //       } else if (!isPlaying) {
//   //         audio?.pause();
//   //         cancelAnimationFrame(animationRef.current);
//   //       }
//   //     }
//   //   };
//   //   checkMusic();
//   // }, [currentMusic, isPlaying]);

//   // CALC CURRENT MUSIC-AUDIO DURATION
//   // useEffect(() => {
//   //   setDuration(0);
//   //   // IF MUSIC MAWJOUDA
//   //   if (currentMusic.length !== 0) {
//   //     // CALC MUSIC DURATION IN (SEC)
//   //     const seconds = Math.floor(audioPlayerRef.current.duration);
//   //     setDuration(seconds);
//   //     progressBarRef.current.max = seconds;
//   //   }
//   // }, [
//   //   audioPlayerRef?.current?.loadedmetadata,
//   //   audioPlayerRef?.current?.readyState,
//   // ]);

//   // MUTED & UNMUTED MUSIC-AUDIO
//   let toggleMuted = () => {
//     setAudioConfig({
//       ...audioConfig,
//       muted: !audioConfig.muted,
//     });
//     audioPlayerRef.current.muted = audioConfig.muted;
//   };

//   // chnange range
//   const changeRange = (e: any) => {
//     audioPlayerRef.current.currentTime = progressBarRef.current.value;
//     changePlayerCurrentTime();
//   };

//   // when  music is playing
//   const whilePlaying = () => {
//     progressBarRef.current.value = audioPlayerRef.current.currentTime;
//     changePlayerCurrentTime();
//     animationRef.current = requestAnimationFrame(whilePlaying);
//     if (audioPlayerRef.current.ended && audioConfig.loop === false) {
//       setGroupMediaLength(groupMediaLength + 1);
//     }
//   };

//   // function repeat
//   const changePlayerCurrentTime = () => {
//     progressBarRef.current.style.setProperty(
//       '--seek-before-width',
//       `${(progressBarRef.current.value / duration) * 100}%`
//     );
//     setCurrentTime(progressBarRef.current.value);
//   };

//   const handleVolume = (e: any) => {
//     const inputVolumeRange = e.target.value / 100;
//     audioPlayerRef.current.volume = inputVolumeRange;
//   };

//   return {
//     duration,
//     setDuration,
//     toggleMuted,
//     currentTime,
//     setCurrentTime,
//     audioConfig,
//     setAudioConfig,
//     audioPlayerRef,
//     progressBarRef,
//     musicListContent,
//     animationRef,
//     calculateTime,
//     changeRange,
//     whilePlaying,
//     changePlayerCurrentTime,
//     handleVolume,
//     dataDB,
//     isPlaying,
//     setIsPlaying,
//     musicID,
//     currentMusic,
//     addToLikedList,
//   };
// };

// export default MusicPlayerLogic;
