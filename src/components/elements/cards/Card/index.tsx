import Image from 'next/image';
import { ellipsis } from '../../../../helpers';

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
  key,
}) => {
  const styles = {
    style: {
      backgroundColor: bg,
      color: text,
      fontSize,
      ...style,
    },
  };

  return (
    <div {...styles} className={`card`}>
      {image && (
        <div className="image-container">
          <Image layout="fill" src={image} alt={title} />
        </div>
      )}
      <div className="card-info">
        <h4 className="title">{title}</h4>
        <span className="description">
          {description && ellipsis(description, 50)}
        </span>
        {/* <span className="followres">{`${formatNumber(100210)} Followres`}</span> */}
      </div>
    </div>
  );
};
