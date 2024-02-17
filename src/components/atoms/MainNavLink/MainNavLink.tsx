import S from './MainNavLink.module.scss';

type HeaderLinkProps = {
  href: string;
  children: React.ReactNode;
};

export const MainNavLink = ({ href, children }: HeaderLinkProps) => {
  return (
    <a className={S.link} href={href}>
      {children}
    </a>
  );
};
