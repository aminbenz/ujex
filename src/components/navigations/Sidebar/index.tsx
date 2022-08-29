//icons
import {
  IoAddOutline,
  IoBulbOutline,
  IoFolderOutline,
  IoHeartOutline,
} from 'react-icons/io5';
import { Input } from '../..';
import { SearchIcon } from '../../../assets/icons';
import { Skeleton } from './skeleton';

interface PlaylistProps {
  id: string;
  name: string;
  title: string;
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
  { id: '1', title: 'Albums', name: 'albums' },
  { id: '2', title: 'Liked Songs', name: 'liked_songs' },
];
// playlists example
// const PLAYLISTS = [
//   { id: '1', title: "I See 'Colors' 💫", name: '' },
//   { id: '2', title: 'Ye-Me 🌪', name: '' },
//   { id: '3', title: 'Lalalalalalalalala 🪐', name: '' },
//   { id: '4', title: 'Teardrop ☄️ ✨ 🔥', name: '' },
// ];

const smartPlaylists = [
  { id: '1', title: 'Chill', name: 'chill' },
  { id: '2', title: 'Electronick', name: 'electronick' },
  { id: '3', title: 'For Home', name: 'for_home' },
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
    <div {...styles} className={`sidebar ${loading && 'skeleton'}`}>
      <div className="sidebar-content">
        {/* Search form */}
        <Input
          placeholder="Search..."
          leftIcon={<SearchIcon />}
          radius="md"
          height={30}
        />
        {/* library */}
        <div className="links">
          <dl>
            <dt>
              <a href="/your-library" className="link">
                your <IoFolderOutline /> library
              </a>
            </dt>
            {library.map(({ id, name, title }: PlaylistProps) => (
              <dd key={id}>
                <a href={`/${name}`} className="link">
                  {title}
                </a>
              </dd>
            ))}
          </dl>

          {/********* myPlaylists ********/}
          <dl>
            <dt>
              <a href="/playlists" className="link">
                <IoHeartOutline></IoHeartOutline> folder
              </a>
            </dt>
            {playlists?.map(({ id, name, title }: PlaylistProps) => {
              return (
                <dd key={id}>
                  <a className="link" href={`${name}`}>
                    {title}
                  </a>
                </dd>
              );
            })}
          </dl>

          {/* smartPlaylists */}
          <dl>
            <dt>
              <a href="/Smart-Playlists" className="link">
                <IoBulbOutline /> Smart Playlists
              </a>
            </dt>
            {smartPlaylists.map(({ id, name, title }: PlaylistProps) => {
              return (
                <dd key={id}>
                  <a className="link" href={`${name}`}>
                    {title}
                  </a>
                </dd>
              );
            })}
          </dl>
        </div>
        {/* add playlist */}
        <button className="btn-playlist">
          <IoAddOutline />
          New Playlist
        </button>
      </div>
    </div>
  );
};
