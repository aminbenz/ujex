export const Skeleton = () => {
  return (
    <div className="sidebar skeleton">
      <div className="sidebar-content">
        <div className="links">
          <dl>
            <dt>
              <span className="link">your library</span>
            </dt>
            <dd>
              <span className="link"></span>
            </dd>
            <dd>
              <span className="link"></span>
            </dd>
          </dl>

          {/********* myPlaylists ********/}
          <dl className="">
            <dt className="">
              <span className="link">folder</span>
            </dt>
            <dd>
              <span className="link"></span>
            </dd>
            <dd>
              <span className="link"></span>
            </dd>
          </dl>

          <dl>
            <dt>
              <span className="link">Smart Playlists</span>
            </dt>
            <dd>
              <span className="link"></span>
            </dd>
            <dd>
              <span className="link"></span>
            </dd>
            <dd>
              <span className="link"></span>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};
