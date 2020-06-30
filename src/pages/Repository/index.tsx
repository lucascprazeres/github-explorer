import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';

import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/28929274?v=4"
            alt="avatar"
          />
          <div>
            <strong>Rocketseat/Unform</strong>
            <p>Descrição do Repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1807</strong>
            <span>Stars</span>
          </li>

          <li>
            <strong>49</strong>
            <span>Forks</span>
          </li>

          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="asuadjsudj">
          <div>
            <strong>ashhiah</strong>
            <p>uaeeyuady</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
