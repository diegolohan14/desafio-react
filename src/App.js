import './App.css';
import MenuLateral from './reusaveis/MenuLateral';
import Itens from './reusaveis/Itens';
import Perfil from './reusaveis/Perfil';
import AlternarElementos from '../src/reusaveis/AlternarElementos';

const ContextPage = () => {
  return (
  <div className="page">
    <MenuLateral />
    <div className="container">
      <Itens />
      <div className="menu-funcionarios">
        <Perfil />
        <AlternarElementos />
      </div>
    </div>
  </div>
  );
};

export default ContextPage;