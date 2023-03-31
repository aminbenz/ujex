// type ListProps = {
//   id?: string;
//   title: string;
//   description?: string;
//   image: string;
//   text?: string;
//   bg?: string;
// };

// padding = p  - pl pr px py ..
// margin = m
// container
//   direction="row"
//   justifyContent="center"
//   alignItems="center"

type GridProps = {
  gap?: number | string;
  bg?: string;
  cardBg?: string;
  text?: string;
  children: React.ReactNode;
  cols?: number;
  style?: React.CSSProperties;
  type?: 'carousel' | 'default';
};

export const Grid = ({
  gap,
  bg,
  text,
  children,
  style,
  cols,
  type,
}: GridProps) => {
  const styles = {
    style: {
      gap,
      color: text,
      background: bg,
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      ...style,
    },
  };

  if (
    type === 'carousel' ? (
      <div className={'carousel'}>
        <div className={`grid`} {...styles}>
          {children}
        </div>
      </div>
    ) : (
      <div className={`grid`} {...styles}>
        {children}
      </div>
    )
  )
    return (
      <>
        {type === 'carousel' ? (
          <div className={'carousel'}>
            <div className={`grid`} {...styles}>
              {children}
            </div>
          </div>
        ) : (
          <div className={`grid`} {...styles}>
            {children}
          </div>
        )}
      </>
    );
};
