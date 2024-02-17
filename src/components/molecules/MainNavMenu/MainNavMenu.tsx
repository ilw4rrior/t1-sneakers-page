import { MainNavLink } from '../../atoms/MainNavLink/MainNavLink';
import S from './MainNavMenu.module.scss';
export const MainNavMenu = () => {
  const items = [
    'Catalog',
    'About us',
    'Product selection',
    'Our team',
    'Shipping and payment',
    'Contacts',
  ];
  return (
    <nav className={S.nav}>
      <ul className={S.menu}>
        {items.map((item, index) => (
          <li key={index}>
            <MainNavLink href='#'>{item}</MainNavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
