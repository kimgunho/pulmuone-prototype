import { atom } from 'recoil';

export const viewportWidthState = atom({
  key: 'viewportWidthState',
  default: {
    currentWidth: window.innerWidth,
    breakPoint: 740,
  },
});
