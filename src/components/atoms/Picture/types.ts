export type PictureType = 'small' | 'default' | 'large';
export type PictureImage =
  | 'shoes'
  | 'choice'
  | 'john'
  | 'anna'
  | 'mark'
  | 'carol'
  | 'maxim'
  | 'jane';

export type PictureProps = {
  size: PictureType;
  image: PictureImage;
};
