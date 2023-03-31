import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button } from '../components';

let seconds = 5;

function FourOhFour() {
  const [count, setCount] = useState(seconds);
  let location = useRouter();

  useEffect(() => {
    setTimeout(() => {
      location.push('/');
    }, count * 1000);

    const id = setInterval(() => setCount((oldCount) => oldCount - 1), 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div style={{ height: '80vh' }}>
      <section className="message-dialog">
        <div className="message-dialog-container">
          <h1 className="">404 - Error Page Not Found</h1>
          <p className="description">
            <b>{location.asPath.slice(1)} </b>page <b>coming soon</b>. tap to
            button to back home, after {seconds} seconds : <b>{count}</b>
          </p>
          <Link href="/">
            <Button as="a">Home</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default FourOhFour;
