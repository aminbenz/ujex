import React from 'react';
import { Color, Size } from '../../../types';

type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref'];

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = {}
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

type TextProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
  C,
  { color?: Color; size?: Size; font?: number; type?: string }
>;

type Component = <C extends React.ElementType = 'span'>(
  props: TextProps<C>
) => React.ReactElement | null;

// eslint-disable-next-line react/display-name
export const Text: Component = React.forwardRef(
  <C extends React.ElementType = 'span'>(
    { as, color, children, type, font, style, ...rest }: TextProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'span';

    const styles = {
      style: {
        fontWeight: font,
        ...style,
      },
    };

    return (
      <Component
        className={`text ${color === 'gradient' && 'gradient'}`}
        ref={ref}
        {...styles}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);
