//icons
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  IoAddOutline,
  IoBulbOutline,
  IoFolderOutline,
  IoHeartOutline,
} from 'react-icons/io5';
import { Input, Modal } from '../..';
import { SearchIcon } from '../../../assets/icons';
import { Skeleton } from './skeleton';

interface PlaylistProps {
  id?: string;
  name: string;
  href?: string;
}

interface SidebarProps {
  playlists?: PlaylistProps[];
  bg?: string;
  text?: string;
  width?: number | string;
  fontSize?: string | number;
  style?: any;
  loading?: boolean;
}

const library = [
  // { id: '1', title: 'Albums', name: 'albums' },
  { name: 'Liked songs', href: '/playlists/saved-tracks' },
  { name: 'Top tracks', href: '/top/tracks' },
  { name: 'Genres', href: '/genres' },
];
// playlists example
// const PLAYLISTS = [
//   { id: '1', title: "I See 'Colors' 💫", name: '' },
//   { id: '2', title: 'Ye-Me 🌪', name: '' },
//   { id: '3', title: 'Lalalalalalalalala 🪐', name: '' },
//   { id: '4', title: 'Teardrop ☄️ ✨ 🔥', name: '' },
// ];

const smartPlaylists = [
  { name: 'Top Lists', href: '/genres/toplists' },
  { name: 'Chill', href: '/chill' },
  { name: 'Radio', href: '/radio' },
];

export const Sidebar = ({
  bg,
  text,
  width,
  fontSize,
  style,
  loading = false,
  playlists,
}: SidebarProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const router = useRouter();

  // search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm) router.push('/search?q=' + searchTerm);
      if (searchTerm === '') {
        router.push('/');
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  if (loading) {
    return <Skeleton />;
  }

  const styles = {
    style: {
      backgroundColor: bg,
      color: text,
      width: width,
      fontSize: fontSize,
      ...style,
    },
  };

  return (
    <aside {...styles} className={`sidebar ${loading && 'skeleton'}`}>
      <div className="sidebar-content">
        {/* Search form */}
        <Input
          type="search"
          placeholder="Search..."
          leftIcon={<SearchIcon />}
          radius="md"
          height={30}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* library */}
        <div className="links">
          <dl>
            <dt>
              <IoFolderOutline />
              <a href="/your-library">your library</a>
            </dt>
            {library.map(({ href, name }: PlaylistProps) => (
              <dd key={name}>
                <Link href={`${href}`}>{name}</Link>
              </dd>
            ))}
          </dl>

          {/********* myPlaylists ********/}
          <dl>
            <dt>
              <IoHeartOutline />
              <a href="/playlists">folder</a>
            </dt>
            {playlists?.map(({ id, name, href }: PlaylistProps) => {
              return (
                <dd key={id}>
                  <Link href={`/${href || id || name}`}>{name}</Link>
                </dd>
              );
            })}
          </dl>

          {/* smartPlaylists */}
          <dl>
            <dt>
              <IoBulbOutline />
              <a href="/Smart-Playlists">Smart Playlists</a>
            </dt>
            {smartPlaylists.map(({ href, name }: PlaylistProps) => (
              <dd key={name}>
                <Link href={`${href}`}>{name}</Link>
              </dd>
            ))}
            {/* {smartPlaylists.map(({ id, name, title, href }: PlaylistProps) => {
              return (
                <dd key={id}>
                  <a href={`${name}`}>{title}</a>
                </dd>
              );
            })} */}
          </dl>
        </div>
        {/* add playlist */}
        <button className="btn-playlist">
          <IoAddOutline />
          New Playlist
        </button>
        <Modal show={isModalOpen} />
      </div>
    </aside>
  );
};
