import { useRouter } from 'next/router';
import React from 'react';

const Track = () => {
  const { query } = useRouter();
  return <div>Track age track ID is: {query.id}</div>;
};

export default Track;
