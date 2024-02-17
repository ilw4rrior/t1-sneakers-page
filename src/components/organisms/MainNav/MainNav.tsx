import { Logo } from '../../atoms/Logo/Logo';
import { HeaderCart } from '../../molecules/HeaderCart/HeaderCart';
import { MainNavMenu } from '../../molecules/MainNavMenu/MainNavMenu';
import S from './MainNav.module.scss';

export const MainNav = ({ type }: { type: 'header' | 'footer' }) => {
  const content = (
    <>
      <Logo color='white' size='default' link />
      <div className={S.container}>
        <MainNavMenu />
        {type === 'header' && <HeaderCart />}
      </div>
    </>
  );

  return type === 'header' ? (
    <header className={S.header}>{content}</header>
  ) : (
    <footer className={S.footer}>{content}</footer>
  );
};
