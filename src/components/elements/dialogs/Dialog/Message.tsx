import Image from 'next/image';
import { Button } from '../../..';
// import './styles/styles.css';

interface MessageProps {
  logoSrc?: string;
  title: string;
  description: string;
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
  logoSrc,
  button,
}: MessageProps) {
  const styles = { style: { color: text, background: bg } };

  return (
    <section {...styles} className="message-dialog">
      <div className="message-dialog-container">
        {logoSrc && (
          <div className="logo">
            <Image height={80} width={80} src={logoSrc} alt="logo" />
          </div>
        )}
        <h2 className="title">{title}</h2>
        {/* <p className="description">
          <b>{PATH_NAME} </b>page <b>coming soon</b>. tap to
          {description}
        </p> */}
        {description && <p className="description">{description}</p>}
        {subdescription && <p className="subdescription">{subdescription}</p>}
        {button ? (
          button
        ) : (
          <Button as="a" href={'/'} target={'_blank'}>
            {'Home'}
          </Button>
        )}
      </div>
    </section>
  );
}
