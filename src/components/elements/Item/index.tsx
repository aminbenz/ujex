import Image from 'next/image';
import { IoHeartOutline } from 'react-icons/io5';
// import { IoHeartOutline } from 'react-icons/io';
import { useRecoilState } from 'recoil';
import { trackIdState } from '../../../atoms/track';
import { ellipsis } from '../../../helper';
import { Radius } from '../../../types';

import Chacker from '../Cheker';

type Props1 = {
  id: string | number;
  title:
    | string
    | {
        body: string;
        href: string;
      };
  subtitle?:
    | string
    | {
        body: string;
        href: string;
      };
  artistId?: string;
  image?: string;
  date?: string;
  order?: number | string;
  duration?: string;
  middle?: string;
  loading?: boolean;
};

type Props2 = {
  text?: string;
  bg?: string;
  icon?: boolean;
  radius?: Radius;
  tooltip?: string;
  style?: any;
  className?: any;
  fontSize?: string | number;
  height?: string | number;
  width?: string | number;
  imageRadius?: Radius;
  played_at?: string;
  uri?: string;
  popularity?: number;
  href?: string;
  disabled?: boolean;
  font?: string;
  fontWeight?: number;
  active?: boolean;
  onClick?: void;
  type?: 'track' | 'artist';
};

type ItemProps = Props1 & Props2;

export const Item = ({
  title,
  subtitle,
  date,
  text,
  bg,
  icon,
  active,
  style,
  className,
  fontSize,
  imageRadius,
  id,
  image,
  height,
  tooltip,
  width,
  radius = 'sm',
  loading,
  order,
  fontWeight,
  middle,
  duration,
  font,
  type = 'track',
  artistId,
  onClick,
  ...rest
}: ItemProps) => {
  const [trackId, setTrackId] = useRecoilState(trackIdState);

  const classes = `${
    className
      ? className
      : `item br-${radius} ${loading && 'skeleton'} ${active && 'active'}`
  }`;

  const styles = {
    style: {
      height,
      width,
      backgroundColor: bg,
      color: text,
      fontSize,
      fontFamily: font,
      ...style,
    },
  };

  const handleClick = (e) => {
    e.stopPropagation();
    setTrackId(id);
  };

  return (
    <section
      {...rest}
      {...styles}
      className={classes}
      onClick={onClick || handleClick}
      title={tooltip}
    >
      <div className="left">
        {order && <span className="order">{order}</span>}
        {image && (
          <div
            className={`image-container ${imageRadius && 'br-' + imageRadius}`}
          >
            <Image
              src={image}
              width={50}
              height={50}
              alt={title?.body || title}
            />
          </div>
        )}
        <div className="info">
          {title && (
            <h4 className="name">
              <Chacker item={title} id={id} type={type} />
            </h4>
          )}
          {subtitle && (
            <p className="subtitle">
              <Chacker item={subtitle} artistId={artistId} type={type} />
            </p>
          )}
        </div>
        {middle && <h4 className="name">{ellipsis(middle, 30)}</h4>}
      </div>
      <div className="right">
        {date && <span className="date">{date}</span>}
        {icon && (
          <span className="icon" aria-label="icon">
            <IoHeartOutline></IoHeartOutline>
          </span>
        )}
        {duration && <span className="duration">{duration}</span>}
      </div>
    </section>
  );
};
