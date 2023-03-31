import Image from 'next/image';

interface UserProps {
  name: string;
  avatar?: string;
  type?: string;
  style?: any;
}

// https://cdn4.iconfinder.com/data/icons/man-6/48/man-03-512.png

export const UserHeader = ({ name, avatar, type, ...rest }: UserProps) => {
  return (
    <div className="user-header" {...rest}>
      <div className="image-container">
        <Image
          height={100}
          width={100}
          src={avatar || ''}
          alt="user avatar image"
        />
      </div>
      <div className="user-info">
        {type && (
          <div className="user-type">
            <h4>{type}</h4>
          </div>
        )}
        <h2 className="username">{name}</h2>
        <button className="icon" aria-label="edit">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="19" cy="12" r="1"></circle>
            <circle cx="5" cy="12" r="1"></circle>
          </svg>
        </button>
      </div>
    </div>
  );
};
