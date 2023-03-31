import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IoFilterOutline, IoGridOutline } from 'react-icons/io5';
import { Card, DropDawn, Grid, Item, Text } from '../../components';
import { millisToString } from '../../helper';
import { Spotify } from '../../lib/spotify';

const TIME_RANGE = [
  { label: 'Last 4 weeks ', value: 'short_term' },
  { label: 'Last 6 mounths', value: 'medium_term' },
  { label: 'All time ', value: 'long_term' },
];

const SORT = [
  { label: 'Default', value: '' },
  { label: 'Popularity', value: 'popularity' },
  { label: 'Sort by name', value: 'name' },
];

const Tracks = ({ items, view }) => {
  return (
    <Grid style={{ display: view === 'row' && 'block' }}>
      {items.map(({ id, name, album, artists, duration_ms }, index) => {
        return view === 'row' ? (
          <Item
            type="track"
            order={index + 1}
            key={id}
            title={name}
            id={id}
            artistId={artists && artists[0].id}
            subtitle={artists && artists[0].name}
            image={album?.images[2].url}
            date={album?.release_date}
            duration={millisToString(duration_ms)}
            imageRadius="sm"
            icon={true}
          />
        ) : (
          <Card
            key={id}
            id={id}
            type="track"
            title={name}
            description={`${artists && artists[0].name}`}
            image={album?.images[1].url}
          />
        );
      })}
    </Grid>
  );
};
const Artists = ({ items, view }) => {
  return (
    <Grid style={{ display: view === 'row' && 'block' }}>
      {items.map(({ id, name, artist, images, followers, genres }, index) => {
        console.log('genres', artist);
        return view === 'row' ? (
          <>
            <Item
              type="artist"
              id={id}
              title={name}
              subtitle={genres?.join(', ')}
              image={images && images[2]?.url}
              icon={true}
              order={index + 1}
              key={id}
            />
          </>
        ) : (
          <Card
            type="artist"
            id={id}
            key={id}
            title={name}
            //   description={`${genres.join(', ')}`}
            image={images && images[2].url}
            imageRadius="full"
            height="auto"
            center
          />
        );
      })}
    </Grid>
  );
};

const Top = () => {
  const [myTopItems, setMyTopItems] = useState([]);
  const [selected, setSelected] = useState(TIME_RANGE[0].value);
  const [sort, setSort] = useState(SORT[0].value);
  const [view, setView] = useState<'grid' | 'row'>('grid');
  const [loading, setLoading] = useState<boolean>(false);
  const {
    query: { id },
  } = useRouter();

  const sortItems = (items: array) => {
    const sortedItems = [
      ...items.sort((a, b) => {
        if (a[sort] < b[sort]) {
          if (sort === 'name') {
            return -1;
          }
          return 1;
        }
        if (a[sort] > b[sort]) {
          if (sort === 'name') {
            return 1;
          }
          return -1;
        }
        return 0;
      }),
    ];
    return sortedItems;
  };

  //  GET Top Tracks
  const getMyTopItemsItems = async (options = { time_range: selected }) => {
    if (id === 'tracks') {
      setLoading(true);
      const topTracks = await Spotify.getMyTopTracks(options);
      setMyTopItems(sortItems(topTracks.body.items));
      setLoading(false);
    }
    if (id === 'artists') {
      setLoading(true);
      const topArtists = await Spotify.getMyTopArtists(options);
      setMyTopItems(sortItems(topArtists.body.items));
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getMyTopItemsItems();
    }
  }, [selected, id]);

  useEffect(() => {
    setMyTopItems(sortItems(myTopItems));
  }, [sort]);

  return (
    <main className="">
      <section className={`tracks ${view === 'row' && 'scroll'}`}>
        <div className="sticky">
          <div className="">
            <Text as="h2" type="gradient">
              {id === 'tracks' ? 'Your top tracks' : 'Your top artists'}
            </Text>
            <Link href={`/top/${id === 'tracks' ? 'artists' : 'tracks'}`}>
              <a className="link">
                Go to my top {id === 'tracks' ? 'artists' : 'tracks'}
              </a>
            </Link>
          </div>
          <div className="group">
            <DropDawn
              list={TIME_RANGE}
              onChange={(e) => setSelected(e.target.value)}
            />
            <DropDawn list={SORT} onChange={(e) => setSort(e.target.value)} />
            <button className="view">
              <IoGridOutline
                onClick={() => setView('grid')}
                className={`${view === 'grid' && 'active'}`}
              />
              <IoFilterOutline
                onClick={() => setView('row')}
                className={`${view === 'row' && 'active'}`}
              />
            </button>
          </div>
        </div>
        {loading ? (
          <div>loading...</div>
        ) : (
          <>
            {id === 'artists' && <Artists items={myTopItems} view={view} />}
            {id === 'tracks' && <Tracks items={myTopItems} view={view} />}
          </>
        )}
      </section>
    </main>
  );
};

export default Top;
