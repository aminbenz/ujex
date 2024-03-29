'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoPlaySharp } from 'react-icons/io5';
import { useRecoilState } from 'recoil';
import { trackIdState } from '../../../atoms/track';
import { ellipsis } from '../../../helper';
import { Radius } from '../../../types';

const checker = (type = 'playlist') => {
  if (type === 'track') {
    return '/tracks/';
  }
  if (type === 'playlist') {
    return '/playlists/';
  }
  if (type === 'artist') {
    return '/artists/';
  }
  if (type === 'genre') {
    return '/genres/';
  }
};

type ListProps = {
  id?: string | number;
  key?: string | number;
  title: string;
  description?: string;
  image?: string;
  text?: string;
  bg?: string;
  fontSize?: number | string;
  style?: React.CSSProperties;
  height?: number | string;
  width?: number | string;
  href?: string;
  center?: boolean | string;
  imageRadius?: Radius;
  type?: 'track' | 'artist' | 'playlist' | 'genre';
  onClick?: any;
  loading?: boolean;
};

export const Card: React.FC<ListProps> = ({
  id,
  title,
  description,
  image,
  bg,
  text,
  style,
  fontSize,
  href,
  height,
  width,
  center,
  imageRadius,
  type,
  loading,
  onClick,
}) => {
  const [trackId, setTrackId] = useRecoilState(trackIdState);
  const router = useRouter();
  const styles = {
    style: {
      backgroundColor: bg,
      height,
      maxWidth: width,
      color: text,
      fontSize,
      textAlign: center && 'center',
      ...style,
    },
  };

  const handleClick = (e) => {
    e.stopPropagation();
    // if click in parent
    if (e.target.classList.contains('play')) {
      setTrackId(id);
    } else {
      router.push(`${checker(type)}${id}`);
    }
  };

  return (
    <div
      {...styles}
      className={`card ${loading ? 'skeleton' : ''}`}
      onClick={onClick || handleClick}
    >
      <div
        className={`image-container shadow ${
          imageRadius ? 'br-' + imageRadius : ''
        } `}
      >
        {image ? (
          <Image layout="fill" src={image} alt={title} loading="lazy" />
        ) : (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M192 218v-6c0-14.84 10-27 24.24-30.59l174.59-46.68A20 20 0 01416 154v22"
            ></path>
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M416 295.94v80c0 13.91-8.93 25.59-22 30l-22 8c-25.9 8.72-52-10.42-52-38h0a33.37 33.37 0 0123-32l51-18.15c13.07-4.4 22-15.94 22-29.85V58a10 10 0 00-12.6-9.61L204 102a16.48 16.48 0 00-12 16v226c0 13.91-8.93 25.6-22 30l-52 18c-13.88 4.68-22 17.22-22 32h0c0 27.58 26.52 46.55 52 38l22-8c13.07-4.4 22-16.08 22-30v-80"
            ></path>
          </svg>
        )}
      </div>
      {type === 'track' && (
        <button className="icon play">
          <IoPlaySharp />
        </button>
      )}
      <div className="card-info">
        <h4 className="title">
          <Link href={`/${checker(type)}/${id}`}>{title}</Link>
        </h4>
        <span className="description">
          {description && ellipsis(description, 50)}
        </span>
        {/* <span className="followres">{`${formatNumber(100210)} Followres`}</span> */}
      </div>
    </div>
  );
};
