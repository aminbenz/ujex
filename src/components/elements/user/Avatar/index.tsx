'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { SwitchColor, Switcher } from '../../../../theme';

interface UserProps {
  id: string;
  name: string;
  description?: string;
  avatar?: any;
  width?: number | string;
  style?: React.CSSProperties;
}

export const Avatar = ({ name, avatar, id, width, style }: UserProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const styles = {
    ...style,
    width,
  };

  return (
    <div
      style={styles}
      className="user"
      onClick={() => setIsOpen((prev) => !prev)}
    >
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
      <span className="username">{name}</span>
      <AnimatePresence>
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
                <Link href={`/user/${id}`} className="link">
                  my account
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
