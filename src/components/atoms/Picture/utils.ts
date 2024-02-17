import S from './Picture.module.scss';
import Shoes from './images/shoes.jpg';

import Choice from './images/choice.jpg';

import John from './images/team_john.jpg';
import Anna from './images/team_anna.jpg';
import Mark from './images/team_mark.jpg';
import Carol from './images/team_carol.jpg';
import Maxim from './images/team_maxim.jpg';
import Jane from './images/team_jane.jpg';
import { PictureImage, PictureType } from './types';

export const getPictureClassName = (type: PictureType) => {
  const types = {
    small: S.picture_small,
    large: S.picture_large,
    default: S.picture,
  };
  return types[type];
};

export const getSrcAndAlt = (image: PictureImage) => {
  const srcAndAlt = {
    shoes: {
      src: Shoes,
      alt: 'shoes',
    },
    choice: {
      src: Choice,
      alt: 'shoe choice',
    },
    john: {
      src: John,
      alt: 'John',
    },
    anna: {
      src: Anna,
      alt: 'Anna',
    },
    mark: {
      src: Mark,
      alt: 'Mark',
    },
    carol: {
      src: Carol,
      alt: 'Carol',
    },
    maxim: {
      src: Maxim,
      alt: 'Maxim',
    },
    jane: {
      src: Jane,
      alt: 'Jane',
    },
  };

  return srcAndAlt[image];
};


