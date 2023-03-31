import { atom } from 'recoil';

export const trackState = atom({
  key: 'trackState',
  default: null,
});

export const trackIdState = atom({
  key: 'trackIdState',
  default: null,
});
