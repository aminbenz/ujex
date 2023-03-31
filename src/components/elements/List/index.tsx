interface TablistProps {
  data: Array<string>;
  bg?: string;
  text?: string;
  style?: any;
  center?: boolean;
  justifyContent?:
    | 'space-evenly'
    | 'space-between'
    | 'space-around'
    | 'center'
    | 'flex-end'
    | 'flex-start';
  fontSize?: number | string;
}

const Tablist = ({
  data,
  bg,
  text,
  style,
  justifyContent,
  fontSize,
}: TablistProps) => {
  const styles = {
    style: {
      backgroundColor: bg,
      color: text,
      fontSize,
      ...style,
    },
  };

  return (
    <section {...styles} className="tablist">
      <ul
        className="tablist-links"
        style={{
          justifyContent,
        }}
      >
        {data.map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
    </section>
  );
};

export default Tablist;
