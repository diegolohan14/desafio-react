import React from 'react';

const TabelaFuncionarios = ({ onClick }) => {
    const funcionarios = [
        {
            nome: 'Daniel Alves da Silva',
            cpf: '000.000.000-99',
            status: 'Ativo',
            cargo: 'Cargo 1'
        },
        {
            nome: 'Giselle Torres Lopes',
            cpf: '000.000.000-88',
            status: 'Inativo',
            cargo: 'Cargo 2'
        },
        {
            nome: 'Ana Bispo dos Santos',
            cpf: '000.000.000-99',
            status: 'Inativo',
            cargo: 'Cargo 1'
        },
        {
            nome: 'Regina Elisa Souza',
            cpf: '000.000.000-99',
            status: 'Ativo',
            cargo: 'Cargo 3'
        }
    ];

    const funcionariosAtivos = 2;
    const totalFuncionarios = 4;

    const Funcionario = ({ funcionario }) => (
        <div className="funcionario">
            <div>
                <td>{funcionario.nome}</td>
                <div className="funcionario-info">
                    <td>{funcionario.cpf}</td>
                    <td>{funcionario.status}</td>
                    <td>{funcionario.cargo}</td>
                </div>
            </div>
            <button>•••</button>
        </div>
    );

    const FuncionariosLista = ({ funcionarios }) => (
        <div className="table">
            {funcionarios.map((funcionario, index) => (
                <Funcionario key={index} funcionario={funcionario} />
            ))}
        </div>
    );

    return (
        <div className="tabela-funcionario">
            <div className="title">
                <h1 className="title1">Funcionário(s)</h1>
            </div>
            <button className="botao-adicionar" onClick={onClick}>+ Adicionar Funcionário</button>
            <div className="filtro-ativos">
                <div>
                    <button className="ver-ativos">Ver apenas ativos</button>
                    <button className="Limpar-filtros">Limpar filtros</button>
                </div>
                <p className="ativo">Ativos {funcionariosAtivos}/{totalFuncionarios}</p>
            </div>
            <FuncionariosLista funcionarios={funcionarios} />
        </div>
    );
}

export default TabelaFuncionarios;
