import React from 'react';
import { IoHeartOutline } from 'react-icons/io5';

const Category = ({ title, items }) => {
  if (!items) {
    return <div>No results</div>;
  }

  return (
    <section className={`songs ${'_' + title}`}>
      <div className="songs-container">
        <div className="section-title">
          <h4 className="name">{title}</h4>
          <a href="/shwo-as">more</a>
        </div>
        <div className="songs-items">
          {items?.map((item) => {
            let { id, artists, images, type, name, album, owner } = item;
            return (
              <section className="songs-content" key={id}>
                <div className="left">
                  <div className="image-container">
                    <img
                      src={images ? images[0]?.url : album?.images[0]?.url}
                      alt=""
                    />
                  </div>
                  <div className="info">
                    {type !== 'artist' && (
                      <h4 className="music-name">{name}</h4>
                    )}
                    <h4 className="artist-name">
                      {title === 'artists' || title === 'profiles' ? name : ''}
                      {title === 'playlists' && owner.display_name}
                      {/* {title === 'songs' || ('albums' && artists[0]?.name)} */}
                    </h4>
                  </div>
                </div>
                {/* left section end */}
                {title === 'songs' && (
                  <div className="right">
                    <IoHeartOutline></IoHeartOutline>
                    <span>2:17</span>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Category;
