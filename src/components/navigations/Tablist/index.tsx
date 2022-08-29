import Link from 'next/link';

interface ListProps {
  title: string;
  id?: string | number;
  href?: string;
  target?: string;
}

interface TablistProps {
  list: ListProps[];
  bg?: string;
  text?: string;
  style?: any;
}

export const Tablist = ({ list, bg, text, style }: TablistProps) => {
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
        {list.map(({ id, href, title, target }, index) => {
          return (
            <li key={id || index}>
              <Link href={href || title} target={target}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
