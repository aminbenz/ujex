import React from 'react';

export type Color =
  | 'primary'
  | 'secondary'
  | 'tiffany'
  | 'purple'
  | 'danger'
  | 'success'
  | 'warning'
  | 'info'
  | 'muted'
  | 'light'
  | 'gradient'
  | 'dark';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type Radius = Size | 'none';
export type Font = 'thin' | 'regular' | 'heavy';
export type Role = 'admin' | 'user';
export type Shape = 'square' | 'rectangle' | 'circle';

export interface Circle {
  shape: 'circle';
  radius: number;
}

export interface Square {
  shape: 'square';
  width: number;
}

export interface Rectangle {
  shape: 'rectangle';
  width: number;
  height: number;
}

export type Drawer = {
  nama: string;
} & (Circle | Square | Rectangle);

export interface User {
  id?: string | number;
  name: {
    firstName: string;
    lastName: string;
    displayName: string;
    username: string;
  };
  password: string;
  email: string;
  avatar: string;
  uri?: string;
  type?: string;
  role: Role;
  location: object;
  popularity?: number;
  adress?: {
    city: string;
    country: string;
    street: string;
    zipcode: number;
  };
}

export interface Component {
  id?: string | number;
  title: string;
  description: string;
  avatar: string;
  uri?: string;
  type?: string;
  style?: React.CSSProperties;
  height?: string | number;
  width?: string | number;
  radius?: Radius;
  bg?: string;
  text?: string;
  fontSize?: string | number;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  href?: string;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}
