import Link from 'next/link';
import { useRouter } from 'next/router';
import { Avatar, Button } from '../../';
interface UserProps {
  name: string;
  avatar: string;
}

interface LinkProps {
  name: string;
  href: string;
  target?: string;
}

interface NavbarProps {
  links?: LinkProps[];
  id: string;
  name: string;
  avatar?: string;
  isAuthenticated?: boolean;
  logout?: () => void;
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'for you', href: '/foryou' },
  { name: 'Browser', href: '/browser' },
  { name: 'radio', href: '/radio' },
  { name: 'store', href: '/store' },
];

export const Navbar = ({
  id,
  name,
  avatar,
  isAuthenticated,
  logout,
  links,
}: NavbarProps) => {
  const router = useRouter();

  const Guest = () => (
    <div className="auth-btns btns">
      <Button color="light" radius="xs">
        Register
      </Button>
      <Link href="/login">
        <Button radius="xs">Login</Button>
      </Link>
    </div>
  );

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <ul>
          {navigation.map(({ name, href }) => (
            <Link key={href} href={href}>
              <Button
                size="sm"
                bg={router.asPath === href ? '' : 'transparent'}
                // className={`btn btn-primary-sm br-md ${
                //   router.asPath === href && 'active'
                // }`}
              >
                {name}
              </Button>
            </Link>
          ))}
        </ul>
        {isAuthenticated ? (
          <Avatar id={id} name={name} avatar={avatar} />
        ) : (
          <Guest />
        )}
      </div>
    </nav>
  );
};
