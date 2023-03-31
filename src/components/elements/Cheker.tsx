import Link from 'next/link';
import { ellipsis } from '../../helper';

const Chacker = ({ type, item, id, artistId }) => {
  return typeof item === 'object' ? (
    <Link href={item.href}>{ellipsis(item.body, 30)}</Link>
  ) : // if track
  artistId ? (
    <Link href={`/artists/${artistId}`}>{ellipsis(item, 30)}</Link>
  ) : (
    <Link href={`/${type === 'artist' ? 'artists' : 'tracks'}/${id}`}>
      {ellipsis(item, 30)}
    </Link>
  );
};

export default Chacker;
