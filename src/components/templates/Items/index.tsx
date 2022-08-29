import { Card } from '../..';

type ListProps = {
  id: string;
  key?: string | number;
  title: string;
  description?: string;
  image: string;
  text?: string;
  bg?: string;
  fontSize?: number;
};

type CardProps = {
  list: ListProps[];
  gap?: number;
  bg?: string;
  cardBg?: string;
  text?: string;
  children?: React.ReactNode;
};

export const Items: React.FC<CardProps> = ({
  list,
  gap,
  bg,
  cardBg,
  text,
  children,
}) => {
  const styles = { style: { gap, color: text, background: bg } };

  return (
    <div {...styles} className={'grid-items'}>
      {list
        ? list.map((item: ListProps, index: number | string) => {
            if (bg) {
              item.bg = cardBg;
            }
            if (text) {
              item.text = text;
            }
            return <Card key={index} {...item} />;
          })
        : children}
    </div>
  );
};
