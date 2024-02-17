import { Title } from '../../components/atoms/Title/Title';
import { Products } from '../../components/organisms/Products/Products';
import { Filter } from '../../components/organisms/Filter/Filter';
import { MainNav } from '../../components/organisms/MainNav/MainNav';
import { Hero } from '../../components/organisms/Hero/Hero';
import { GenericTemplate } from '../../components/templates/GenericTemplate/GenericTemplate';
import S from './CatalogPage.module.scss';
import { AboutTemplate } from '../../components/templates/AboutTemplate/AboutTemplate';
import { About } from '../../components/organisms/About/About';
import { ProductSelection } from '../../components/organisms/ProductSelection/ProductSelection';
import { TeamTemplate } from '../../components/templates/TeamTemplate/TeamTemplate';
import { Team } from '../../components/organisms/Team/Team';
import { Faq } from '../../components/organisms/Faq/Faq';
export const CatalogPage = () => {
  return (
    <div className={S.container}>
      <GenericTemplate color='purple' padding='min'>
        <MainNav type='header' />
      </GenericTemplate>

      <GenericTemplate color='purple' padding='medium'>
        <Hero />
      </GenericTemplate>

      <GenericTemplate color='white' padding='small'>
        <Title color='grey' size='default'>
          Catalog
        </Title>
        <div className={S.catalog}>
          <Filter />
          <Products />
        </div>
      </GenericTemplate>

      <AboutTemplate>
        <About />
      </AboutTemplate>

      <GenericTemplate color='white' padding='small'>
        <ProductSelection />
      </GenericTemplate>

      <TeamTemplate>
        <Team />
      </TeamTemplate>

      <GenericTemplate color='white' padding='xsmall'>
        <Faq />
      </GenericTemplate>

      <GenericTemplate color='black' padding='min'>
        <MainNav type='footer' />
      </GenericTemplate>
    </div>
  );
};
