import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

const itens = [
    <div className="menu-itens">
      <i href="/"><FontAwesomeIcon icon={faBuilding} className='item'/></i>
      <i href="/About"><FontAwesomeIcon icon={faBuilding} className='item'/></i>
      <i href="/Settings"><FontAwesomeIcon icon={faBuilding} className='item'/></i>
      <i href="/Contact"><FontAwesomeIcon icon={faBuilding} className='item'/></i>
      <i href="/Contact"><FontAwesomeIcon icon={faBuilding} className='item'/></i>
      <i href="/Contact"><FontAwesomeIcon icon={faBuilding} className='item'/></i>
      <i href="/Contact"><FontAwesomeIcon icon={faBuilding} className='item'/></i>
      <i href="/Contact"><FontAwesomeIcon icon={faBuilding} className='item'/></i>
      <i href="/Contact"><FontAwesomeIcon icon={faBuilding} className='item'/></i>
    </div>
  ];

class Itens extends React.Component {
    render() {
        return (
            <div className="itens">
        <ul className="list">
          {itens.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          <div className="menu-itens">
            <p>Item 1</p>
            <p>Item 2</p>
            <p>Item 3</p>
            <p>Item 4</p>
            <p>Item 5</p>
            <p>Item 6</p>
            <p>Item 7</p>
            <p>Item 8</p>
            <p>Item 9</p>
          </div>
        </ul>
      </div>
        );
    }
}

export default Itens;
