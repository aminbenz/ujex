interface TitleProps {
  children: string;
  options?: any;
  border?: boolean;
  style?: any;
  fontSize?: string | number;
  fontWeight?: number | string;
  text?: string;
  bg?: string;
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
      <h4 className="title">{children}</h4>
      {options && (
        <a href="demo">
          show as <span>this week</span>
        </a>
      )}
    </div>
  );
};

export default Title;
