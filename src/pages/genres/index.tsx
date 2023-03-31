import { useEffect, useState } from 'react';
import { Card, Grid, Text } from '../../components';
import { Spotify } from '../../lib/spotify';

const Genres = () => {
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Get a List of Categories
  const getCategories = async () => {
    setIsLoading(true);
    try {
      const { body } = await Spotify.getCategories();
      setGenres(body.categories.items);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  if (isLoading) {
    return <div>load...</div>;
  }

  return (
    <main>
      <section>
        <Text as="h2" color="gradient">
          Genres
        </Text>
        <Grid>
          {genres.map(({ id, name, icons }) => {
            return (
              <Card
                id={id}
                key={id}
                type="genre"
                title={name}
                image={icons[0].url}
                height={210}
              />
            );
          })}
        </Grid>
      </section>
    </main>
  );
};

export default Genres;
