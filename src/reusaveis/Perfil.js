import React from 'react';
import MinhaImagem from '../imagem-Perfil_vazio.jpg';

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit suscipit porttitor. Suspendisse ex lorem,
rhoncus nec ante eu, venenatis aliquam turpis. Nulla facilisi. Curabitur nec mattis dolor. Nulla finibus
bibendum ligula tempus vehicula. Ut at tristique libero, nec efficitur dui. Aliquam erat volutpat. Fusce quam sem,
tempus nec justo eget, luctus scelerisque velit. Nam sollicitudin purus urna, vitae ornare neque tincidunt vel.
Proin ac lacinia erat, et commodo felis. Phasellus tempor tellus eu vulputate tempus.`;

class Perfil extends React.Component {
    render() {
        return (
            <div className="perfil-funcionario">
                <p className="text">{text}</p>
                <img src={MinhaImagem} alt="Imagem Funcionário" />
            </div>
        );
    }
}

export default Perfil;
