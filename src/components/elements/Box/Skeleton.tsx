type Props = {};

const Skeleton = (props: Props) => {
  return (
    <>
      <div className="section-artist skeleton">
        <div className="artist-img">
          <span></span>
        </div>
        <div className="ele"></div>
      </div>
      <div className="section-artist skeleton">
        <div className="artist-img">
          <span></span>
        </div>
        <div className="ele"></div>
      </div>
    </>
  );
};

export default Skeleton;
