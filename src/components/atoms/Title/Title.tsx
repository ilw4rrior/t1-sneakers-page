import { TitleProps } from './types';
import { getTitleClassName } from './utils';

export const Title = ({ children, color, size }: TitleProps) => {
  const className = getTitleClassName({ color, size });

  if (size === 'large') {
    return <h1 className={className}>{children}</h1>;
  }

  if (size === 'small') {
    return <h3 className={className}>{children}</h3>;
  }

  if (size === 'min' || size === 'xmin') {
    return <h4 className={className}>{children}</h4>;
  }

  return <h2 className={className}>{children}</h2>;
};
