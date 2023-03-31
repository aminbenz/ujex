import { getProviders, signIn, useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Button, Message } from '../components';

interface ProviderProps {
  name: string;
  id: string;
}

const Login = ({ providers }) => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/');
    }
  }, [session]);

  if (session) return <div>loading...</div>;

  return (
    <main>
      <Head>
        <title>Login - Spotify</title>
      </Head>
      <Message
        logoSrc="/logo/spotify.png"
        title="Spotify X Mouzikty"
        description="Login With Spotify To Get Started."
        subdescription="This is A Demo Website I named Mouzikty Created With Love By Amin Benz 💖"
        button={Object.values(providers).map(({ name, id }: ProviderProps) => (
          <div key={id}>
            <Button
              bg={'#1DB954'}
              onClick={() => signIn(id, { callbackUrl: '/' })}
            >
              Login with {name}
            </Button>
          </div>
        ))}
      />
    </main>
  );
};

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
