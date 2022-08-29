// const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'https://changeme.com';
const PAGE = 1;

const requests = {
  fetchTrending: `${BASE_URL}/trending?page=${PAGE}`,
  fetchTracks: `${BASE_URL}/songs?link=changeme`,
};

export default requests;
