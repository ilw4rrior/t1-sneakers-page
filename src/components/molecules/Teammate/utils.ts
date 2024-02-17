import { TeammateImage } from './types';

export const getInfoByImage = (image: TeammateImage) => {
  const info = {
    john: {
      name: 'John',
      position: 'Designer',
    },
    anna: {
      name: 'Anna',
      position: 'Developer',
    },
    mark: {
      name: 'Mark',
      position: 'Designer',
    },
    carol: {
      name: 'Carol',
      position: 'Developer',
    },
    maxim: {
      name: 'Maxim',
      position: 'Administrator',
    },
    jane: {
      name: 'Jane',
      position: 'Developer',
    },
  };

  return info[image];
};
