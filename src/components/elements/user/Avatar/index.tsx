// react
import { useState } from 'react';
// next
import Image from 'next/image';
import Link from 'next/link';
// animation
import { AnimatePresence, motion } from 'framer-motion';
// components
import { SwitchColor, Switcher } from '../../../../theme';

interface UserProps {
  username?: string;
  display_name?: string;
  avatar?: any;
}

export const Avatar = ({ username, display_name, avatar }: UserProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="user" onClick={() => setIsOpen((prev) => !prev)}>
      <div className="avatar">
        {
          <Image
            height={50}
            width={50}
            src={
              avatar
                ? avatar
                : 'https://cdn4.iconfinder.com/data/icons/man-6/48/man-03-512.png'
            }
            alt="avatar"
          />
        }
      </div>
      <span className="username">{display_name || username}</span>
      <AnimatePresence exitBeforeEnter={true}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.1,
              type: 'spring',
              damping: 20,
              stiffness: 700,
            }}
            exit={{ opacity: 0, y: -100 }}
            className="user-more"
          >
            <ul>
              <li>
                <Link href="/user" className="link">
                  my acount
                </Link>
              </li>
              <li>
                <Link href="/settings" className="link">
                  settings
                </Link>
              </li>
              <li>
                <Link href="/upgrade" className="link">
                  upgrade
                </Link>
              </li>
              <li>
                <SwitchColor />
              </li>
              <li>
                <span className="link">Change Theme</span>
                <Switcher />
              </li>
              <li>
                <Link
                  href="/"
                  className="link"
                  // onClick={() => dispatch(logout())}
                >
                  log out
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
