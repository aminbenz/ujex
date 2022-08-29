import Image from 'next/image';
import { IoHeartOutline } from 'react-icons/io5';
import { Radius } from '../../../types';

interface ItemProps {
  id?: string | number;
  title: string;
  subtitle?: string;
  image: string;
  date: string;
  text?: string;
  bg?: string;
  right?: boolean;
  radius?: Radius;
  style?: any;
  className?: any;
  fontSize?: string | number;
  height?: string | number;
  width?: string | number;
  imageRadius?: Radius;
}

export const Item = ({
  title,
  subtitle,
  image,
  date,
  text,
  bg,
  right,
  radius,
  style,
  className,
  fontSize,
  imageRadius,
}: // ...rest
ItemProps) => {
  const classes = `${className ? className : `item br-${radius}`}`;
  const styles = {
    style: {
      backgroundColor: bg,
      color: text,
      fontSize: fontSize,
      ...style,
    },
  };

  return (
    <section
      className={classes}
      {...styles}
      // {...rest}s
    >
      <div className="left">
        <div
          className={`image-container ${imageRadius && 'br-' + imageRadius}`}
        >
          <Image src={image} width={50} height={50} alt={title} />
        </div>
        <div className="info">
          <h4 className="item-title">{title}</h4>
          <h4 className="subtitle">{subtitle}</h4>
        </div>
      </div>
      {right && (
        <div className="right">
          <span className="icon" aria-label="icon">
            <IoHeartOutline></IoHeartOutline>
          </span>
          {date && <span className="date">{date}</span>}
        </div>
      )}
    </section>
  );
};
