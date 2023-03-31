type Props = {};

const Skeleton = (props: Props) => {
  return (
    <>
      <div className="rectangle skeleton">
        <div className="artist-img">
          <span></span>
        </div>
        <div className="ele"></div>
      </div>
      <div className="rectangle skeleton">
        <div className="artist-img">
          <span></span>
        </div>
        <div className="ele"></div>
      </div>
    </>
  );
};

export default Skeleton;
