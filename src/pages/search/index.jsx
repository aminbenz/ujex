import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Spotify } from '../../lib/spotify';
import Category from './Category';

function Search() {
  const {
    query: { q },
  } = useRouter();
  let [searchResult, setSearchResult] = useState({});
  let [loading, setLoading] = useState(false);
  const { tracks, artists, albums, playlists } = searchResult;
  console.log(searchResult);

  const search = async () => {
    setLoading(true);

    let data = {};
    let { body } = await Spotify.search(
      q,
      ['album', 'artist', 'playlist', 'track'],
      {
        limit: 4,
      }
    );

    console.log(body);

    // loop in data and only items insde ["albums" , "tracks"...]
    for (const property in body) {
      data[property] = body[property].items;
    }

    setSearchResult(data);
    setLoading(false);
  };

  useEffect(() => {
    if (q) {
      search();
    }
  }, [q]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (
    !tracks?.length &&
    !playlists?.length &&
    !albums?.length &&
    !artists?.length
  ) {
    return <div>empty</div>;
  }

  // if (artists?.items?.length === 0) {
  //   return (
  //     <NoResults title="No Results" description="No Results Found"></NoResults>
  //   );
  // }

  return (
    <main className="search">
      <div className="search-container">
        {/** ********   best result ************** */}
        <section className="best-result">
          <div className="section-title">
            <h4 className="title">best result</h4>
          </div>
          <div className="card">
            <div className="image-container">
              <img src={`${artists[0]?.images[0].url}`} alt="" />
            </div>
            <div className="card-info">
              <div className="card-title">{artists[0]?.name}</div>
              <p className="card-desc">{artists[0]?.type}</p>
            </div>
          </div>
        </section>
        {/** ********  songs ************** */}
        {tracks.length && <Category title="songs" items={tracks} />}
        {/* change items to how display  */}
        <section className="grid-section-container">
          {artists.length ? <Category title="artists" items={artists} /> : null}
          {albums.length ? <Category title="albums" items={albums} /> : null}
          {playlists.length ? (
            <Category title="playlists" items={playlists} />
          ) : null}
          {artists.length ? (
            <Category title="profiles" items={artists} />
          ) : null}
        </section>
      </div>
    </main>
  );
}

export default Search;
