// import Image from 'next/image';
import { IoHeartOutline } from 'react-icons/io5';
import { ellipsis } from '../../../helper';
import { Radius } from '../../../types';

interface Props {
  id?: string | number;
  title: string;
  description: string;
  avatar: string;
  played_at?: string;
  uri?: string;
  type?: string;
  popularity?: number;
  style?: React.CSSProperties;
  height?: string | number;
  width?: string | number;
  radius?: string | number;
  bg?: string;
  text?: string;
  fontSize?: string | number;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  href?: string;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  right?: boolean;
  imageRadius?: Radius;
}

export const Rectangle = ({
  id,
  title,
  description,
  avatar,
  style,
  height,
  width,
  radius = 'sm',
  text,
  bg,
  className,
  fontSize,
  loading,
  right,
  imageRadius,
  ...restProps
}: Props) => {
  //max 14 item
  const classes = `${
    className ? className : `rectangle br-${radius} ${loading && 'skeleton'}`
  }`;
  const styles = {
    style: {
      height,
      width,
      backgroundColor: bg,
      color: text,
      fontSize: fontSize,
      ...style,
    },
  };

  return (
    <div {...styles} {...restProps} className={classes}>
      <div className={`image-container ${imageRadius && 'br-' + imageRadius}`}>
        <img src={avatar} width={47} height={47} alt={title} />
        {/* <Image src={avatar} width={47} height={47} alt={title} /> */}
      </div>
      <div className="info">
        <h5 className="name">{title}</h5>
        <p className="description">{ellipsis(description, 30)}</p>
      </div>
      {right && (
        <div className="right">
          <span className="icon" aria-label="icon">
            <IoHeartOutline></IoHeartOutline>
          </span>
          {/* {date && <span className="date">{date}</span>} */}
        </div>
      )}
      {/* current music played */}
      {/* 1- {id === currentMediaId && isPlaying && (
            <button
              className="icon-play"
              aria-label="play"
              style={{ transform: 'scale(1)' }}
            >
              <IoVolumeMediumSharp
                style={{
                  transform: 'scale(1.3)',
                }}
              ></IoVolumeMediumSharp>
            </button>
          )} */}
      {/* 2- {true && (
        <button
          className="icon-play"
          aria-label="play"
          style={{ transform: 'scale(1)' }}
        >
          <IoVolumeMediumSharp
            style={{
              transform: 'scale(1.3)',
            }}
          ></IoVolumeMediumSharp>
        </button>
      )} */}
    </div>
  );
};
