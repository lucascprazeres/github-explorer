import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositórios no Github</Title>

      <Form action="/">
        <input placeholder="Digite o nome do repossitório" />
        <button>
          Pesquisar
        </button>
      </Form>

      <Repositories>
        <a href="/">
          <img
            src="https://avatars0.githubusercontent.com/u/51201126?s=400&u=62e4abe922d28596d36b0cd2479f257041af11eb&v=4"
            alt="Lucas dos Prazeres" />

          <div>
            <strong>lucascprazeres/goBarber-server</strong>
            <p>Primeiro projeto desenvolvido no bootcamp goStack 12</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="/">
          <img
            src="https://avatars0.githubusercontent.com/u/51201126?s=400&u=62e4abe922d28596d36b0cd2479f257041af11eb&v=4"
            alt="Lucas dos Prazeres" />

          <div>
            <strong>lucascprazeres/goBarber-server</strong>
            <p>Primeiro projeto desenvolvido no bootcamp goStack 12</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="/">
          <img
            src="https://avatars0.githubusercontent.com/u/51201126?s=400&u=62e4abe922d28596d36b0cd2479f257041af11eb&v=4"
            alt="Lucas dos Prazeres" />

          <div>
            <strong>lucascprazeres/goBarber-server</strong>
            <p>Primeiro projeto desenvolvido no bootcamp goStack 12</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
}

export default Dashboard;