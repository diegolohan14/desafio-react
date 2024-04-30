import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faPenToSquare, faAddressCard, faClockRotateLeft, faBell, faSitemap } from '@fortawesome/free-solid-svg-icons';

class MenuLateral extends React.Component {
  render() {
    return (
      <div className="menu-lateral">
        <a href="/Page2"><FontAwesomeIcon icon={faBuilding} className='icon'/></a>
        <a href="/"><FontAwesomeIcon icon={faPenToSquare} className='icon'/></a>
        <a href="/Page3"><FontAwesomeIcon icon={faSitemap} className='icon'/></a>
        <a href="/Page4"><FontAwesomeIcon icon={faBell} className='icon'/></a>
        <a href="/Page5"><FontAwesomeIcon icon={faClockRotateLeft} className='icon'/></a>
        <a href="/Page6"><FontAwesomeIcon icon={faAddressCard} className='icon'/></a>
      </div>
    );
  }
}

export default MenuLateral;
