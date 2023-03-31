import React from 'react';
import { Color } from '../../../types';

interface FlexProps {
  color?: Color;
  text?: string;
  children: JSX.Element | JSX.Element[];
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around';
  align?: 'start' | 'end' | 'center' | 'stretch' | 'start' | 'end';
  diraction?: 'row' | 'column' | 'column-reverse' | 'row-reverse';
  style?: React.CSSProperties;
  gap?: number;
}

const Flex = ({
  children,
  justify,
  align,
  style,
  gap,
  diraction,
}: FlexProps) => {
  const styles = {
    style: {
      flexDirection: diraction,
      justifyContent: justify,
      alignItems: align,
      gap,
      ...style,
    },
  };

  return (
    <div {...styles} className="flex">
      {children}
    </div>
  );
};

export default Flex;
