import { Button, Message } from '../../components';

const About = () => {
  return (
    <Message
      title="Mouzikty X Mouzikty"
      button={
        <Button as="a" href="/" color="purple">
          Back Home
        </Button>
      }
      description="Mouzikty powred by Spotify API with Ujex Libary (Ujex a UI libary created by me)"
      logoSrc="/brand/logo.png"
      subdescription="This is Mouzikty Created with love By Amin Benz 💖"
    />
  );
};

export default About;
