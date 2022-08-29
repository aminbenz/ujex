import { Button } from '../..';
import { Avatar } from '../../elements/user/Avatar';

interface UserProps {
  username: string;
  display_name: string;
  avatar: any;
}

interface LinkProps {
  name: string;
  href: string;
  target?: string;
}

interface NavbarProps {
  links: LinkProps[];
  user?: UserProps;
  isAuthenticated?: boolean;
  token?: string;
  logout?: () => void;
}

const menu = ['library', 'for you', 'browser', 'radio', 'store'];

export const Navbar = ({
  user,
  isAuthenticated,
  logout,
  links,
}: NavbarProps) => {
  const Guest = () => (
    <div className="auth-btns btns">
      <Button color="light" radius="xs">
        Register
      </Button>
      <Button radius="xs">Login</Button>
    </div>
  );

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Search form */}
        {/* <Input type="text" placeholder={'Search input'} /> */}
        <ul>
          {/* <NavLinks /> */}
          {menu.map((item, index) => (
            <Button
              key={index}
              as="a"
              size="sm"
              className={`btn btn-primary-sm br-md ${index === 0 && 'active'}`}
              href={'/' + item}
            >
              {item}
            </Button>
          ))}
        </ul>
        {isAuthenticated ? <Avatar {...user} /> : <Guest />}
      </div>
    </nav>
  );
};
