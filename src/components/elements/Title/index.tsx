import Link from 'next/link';

interface TitleProps {
  children: string;
  options?: {
    caption: string;
    href?: string;
    description?: string;
  };
  border?: boolean;
  style?: any;
  fontSize?: string | number;
  fontWeight?: number | string;
  text?: string;
  bg?: string;
  label?: string;
  list?: {
    value: string;
    label: string;
  }[];
  onChange?: any;
}

export const Title = ({
  children,
  options,
  fontSize,
  fontWeight,
  text,
  bg,
  style,
  border,
  list,
  onChange,
  label,
  ...rest
}: TitleProps) => {
  const styles = {
    style: {
      backgroundColor: bg,
      color: text,
      fontSize: fontSize,
      fontWeight: fontWeight,
      border: border === false ? 'none' : border,
      ...style,
    },
  };

  return (
    <div {...rest} {...styles} className="section-title">
      <h4 className="name">{children}</h4>
      {options && (
        <div>
          <Link href={options.href || '/'}>
            <span>{options.caption}</span>{' '}
            {options.description && <span>{options.description}</span>}
          </Link>
        </div>
      )}
      {/* {options.href && (
        <Link href={options.href}>
       {options.description && <span>{options.description}</span>}
        </Link>
      )} */}
      {list && (
        <div className="select">
          <label htmlFor="select">{label}</label>
          <select id="select" onChange={onChange}>
            {list.map(({ value, label }) => {
              return (
                <option key={value} value={value}>
                  {label}
                </option>
              );
            })}
          </select>
        </div>
      )}
    </div>
  );
};

export default Title;
