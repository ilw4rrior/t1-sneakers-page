import { Title } from '../../atoms/Title/Title';
import { Teammate } from '../../molecules/Teammate/Teammate';
import S from './Team.module.scss';
export const Team = () => {
  return (
    <div className={S.container}>
      <Title color='white' size='default'>
        Our team
      </Title>
      <div className={S.team}>
        <div>
          <Teammate image='maxim' />
          <Teammate image='mark' />
        </div>
        <div className={S.padding}>
          <Teammate image='anna' />
          <Teammate image='john' />
        </div>
        <div>
          <Teammate image='jane' />
          <Teammate image='carol' />
        </div>
      </div>
    </div>
  );
};
