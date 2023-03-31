import Image from 'next/image';
// import './styles/styles.css';

interface MessageProps {
  logo?: string;
  logoSrc?: string;
  title?: string;
  description?: string;
  subdescription?: string;
  gap?: number;
  bg?: string;
  text?: string;
  height?: 'full' | 'default' | 'sm' | 'md' | 'lg';
  button?: React.ReactElement;
}

export function Message({
  title,
  bg,
  text,
  description,
  subdescription,
  logo,
  logoSrc,
  button,
}: MessageProps) {
  const styles = { style: { color: text, background: bg } };

  return (
    <section {...styles} className="message-dialog">
      <div className="message-dialog-container">
        {logo && (
          <div className="logo">
            <Image height={80} width={80} src={logo} alt="logo" />
          </div>
        )}
        <h2 className="title">{title}</h2>
        {/* <p className="description">
          <b>{PATH_NAME} </b>page <b>coming soon</b>. tap to
          {description}
        </p> */}
        {description && <p className="description">{description}</p>}
        {button && button}
        {subdescription && <p className="subdescription">{subdescription}</p>}
      </div>
    </section>
  );
}
