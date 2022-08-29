// type ListProps = {
//   id?: string;
//   title: string;
//   description?: string;
//   image: string;
//   text?: string;
//   bg?: string;
// };

type CardProps = {
  gap?: number | string;
  bg?: string;
  cardBg?: string;
  text?: string;
  children: React.ReactNode;
  cols?: number;
  style?: React.CSSProperties;
};

export const Grid: React.FC<CardProps> = ({
  gap,
  bg,
  text,
  children,
  style,
  cols,
}) => {
  const styles = {
    style: {
      gap,
      color: text,
      background: bg,
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      ...style,
    },
  };

  return (
    <div className={`grid`} {...styles}>
      {children}
    </div>
  );
};
