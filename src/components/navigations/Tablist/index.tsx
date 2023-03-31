import Link from 'next/link';

interface ListProps {
  name: string;
  id?: string | number;
  href?: string;
  target?: string;
}

interface TablistProps {
  data: Array<ListProps>;
  bg?: string;
  text?: string;
  style?: any;
}

export const Tablist = ({ data, bg, text, style }: TablistProps) => {
  const styles = {
    style: {
      backgroundColor: bg,
      color: text,
      ...style,
    },
  };

  return (
    <section {...styles} className="tablist">
      <ul className="tablist-links">
        {data.map(({ id, href, name, target }, index) => {
          return (
            <li key={id || index}>
              <Link href={href || name} target={target}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
