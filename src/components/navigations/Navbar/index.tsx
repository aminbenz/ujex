import Image from 'next/image';
import { Button } from '../..';

type NavbarItemsProps = {
  title: string;
  name?: string;
};
type ButtonProps = {
  bg?: string;
  text?: string;
};

type ListProps = {
  brand?: string;
  list: NavbarItemsProps[];
  bg?: string;
  text?: string;
  height?: string | number;
  button?: ButtonProps;
  user?: { name: string; id?: string; avatar?: string };
  style?: object;
};

const NavBarItem = ({ title }: NavbarItemsProps) => <li>{title}</li>;

export const Navbar = ({
  list,
  bg,
  text,
  height,
  user,
  brand,
  button,
}: ListProps) => {
  const styles = {
    style: {
      backgroundColor: bg,
      color: text,
      height: height,
    },
  };

  return (
    <nav className="navbar navbar__secondary" {...styles}>
      <div className="logo-container">
        <Image height={40} width={100} src={brand || './logo.svg'} alt="logo" />
      </div>
      <ul className="list">
        {list.map(({ title }: NavbarItemsProps, index: any) => (
          <NavBarItem key={index} title={title} />
        ))}
        {user && user.name ? (
          <>
            <li>
              welecome, <b>{user.name}</b>
            </li>{' '}
            <Button bg="#f5f5f5" text="black">
              Logout
            </Button>{' '}
          </>
        ) : (
          <Button bg={button?.bg} text={button?.text}>
            Login
          </Button>
        )}
      </ul>
    </nav>
  );
};
