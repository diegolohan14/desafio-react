// AlternarElementos.jsx
import React, { useState } from 'react';
import TabelaFuncionarios from './TabelaFuncionarios';
import CadastroFuncionario from './CadastroFuncionario';

const AlternarElementos = () => {
    const [mostrarTabelaFuncionarios, setMostrarTabelaFuncionarios] = useState(true);

    const alternarElementos = () => {
        setMostrarTabelaFuncionarios(!mostrarTabelaFuncionarios);
    };

    return (
        <div>
        {mostrarTabelaFuncionarios ? (
            <TabelaFuncionarios onClick={alternarElementos} />
        ) : (
            <CadastroFuncionario onClick={alternarElementos} />
        )}
        </div>
    );
};

export default AlternarElementos;
