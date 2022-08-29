import { Button } from '../../..';

const NoTracks = () => {
  return (
    <article className="msg" style={{ display: 'grid', placeItems: 'center' }}>
      <div className="article-container">
        <div className="music-svg-logo" />
        <h2>No tracks</h2>
        <p>Playlist Tracks appear here.</p>
        <Button as="a" href="/">
          Find Music
        </Button>
      </div>
    </article>
  );
};

export default NoTracks;
