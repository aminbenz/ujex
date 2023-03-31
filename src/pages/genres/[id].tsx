import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Card, Grid, Text } from '../../components';
import { Spotify } from '../../lib/spotify';

const Genre = () => {
  const [playlists, setPlaylists] = useState([]);
  const {
    query: { id },
    locale,
  } = useRouter();

  const getPlaylistsCategory = async () => {
    const data = await Spotify.getPlaylistsForCategory(id, {
      // country: 'tn',
      locale,
    });
    setPlaylists(data.body.playlists.items);
  };

  useEffect(() => {
    // Get a Category
    if (id) {
      getPlaylistsCategory();
    }
  }, [id]);

  return (
    <main>
      <section>
        {isNaN(id[0]) && (
          <Text as="h2" color="gradient">
            {id}
          </Text>
        )}
        <Grid>
          {playlists.map(({ id, images, name, owner }) => {
            return (
              <Card
                key={id}
                id={id}
                title={name}
                description={owner.display_name}
                image={images[0].url}
                height={210}
              ></Card>
            );
          })}
        </Grid>
      </section>
    </main>
  );
};

export default Genre;
