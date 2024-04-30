import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const CadastroFuncionario = ({ onClick }) => {
    const [funcionario, definirFuncionario] = useState({
        status: 'ativo',
        name: '',
        sex: '',
        cpf: '',
        birthdate: '',
        rg: '',
        cargo: '',
        epis: [],
        activity: '',
        safetyshoes: '',
        ca: '',
        healthCertificate: null,
    });
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        definirFuncionario((funcionarioAnterior) => ({...funcionarioAnterior, [name]: value }));
    };
    
    const handleEpiChange = (event) => {
        const { value } = event.target;
        definirFuncionario((funcionarioAnterior) => ({
            ...funcionarioAnterior,
            epis: funcionarioAnterior.epis.includes(value)? funcionarioAnterior.epis : [...funcionarioAnterior.epis, value],
        }));
    };
    
    const handleActivityChange = (event) => {
        const { value } = event.target;
        definirFuncionario((funcionarioAnterior) => ({...funcionarioAnterior, activity: value }));
    };
    
    const handlesafetyshoesChange = (event) => {
        const { value } = event.target;
        definirFuncionario((funcionarioAnterior) => ({...funcionarioAnterior, safetyshoes: value }));
    };
    
    const handleSexChange = (event) => {
        const { value } = event.target;
        definirFuncionario((funcionarioAnterior) => ({...funcionarioAnterior, sex: value }));
    };
    
    const handleFileChange = (event) => {
        const { files } = event.target;
        definirFuncionario((funcionarioAnterior) => ({...funcionarioAnterior, healthCertificate: files[0] }));
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(funcionario);
        // Send the funcionario data to your API or database
    };

    return (
        <div className="tabela-funcionario">
            <div className="title">
                <div className="title1">
                    <a href="/" onClick={ onClick }><FontAwesomeIcon icon={faArrowLeft} className='icon2'/></a>
                    <h1 className="title2">Adicionar Funcionário</h1>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="box">
                    <label>
                        O trabalhador está ativo ou inativo?
                        <select name="status" value={funcionario.status} onChange={handleInputChange}>
                        <option value="ativo">Ativo</option>
                        <option value="inativo">Inativo</option>
                        </select>
                    </label>
                </div>

                <div className="box">
                    <div className="box-separador1">
                        <label>
                            Nome
                            <input type="text" name="name" value={funcionario.name} onChange={handleInputChange} />
                        </label>

                        <label>
                            Sexo
                            <div>
                                <input
                                    type="radio"
                                    name="sex"
                                    value="Feminino"
                                    checked={funcionario.sex === 'Feminino'}
                                    onChange={handleSexChange}
                                />
                                <span>Feminino</span>
                                <input
                                    type="radio"
                                    name="sex"
                                    value="Masculino"
                                    checked={funcionario.sex === 'Masculino'}
                                    onChange={handleSexChange}
                                />
                                <span>Masculino</span>
                            </div>
                        </label>
                    </div>

                    <div className="box-separador1">
                        <label>
                            CPF
                            <input type="number" name="cpf" value={funcionario.cpf} onChange={handleInputChange} />
                        </label>

                        <label>
                            Data de Nascimento<br></br>
                            <input type="date" name="birthdate" value={funcionario.birthdate} onChange={handleInputChange} />
                        </label>
                    </div>

                    <div className="box-separador2">
                        <label>
                            RG
                            <input type="number" name="rg" value={funcionario.rg} onChange={handleInputChange} />
                        </label>

                        <label>
                            Cargo
                            <input type="text" name="cargo" value={funcionario.cargo} onChange={handleInputChange} />
                        </label>
                    </div>
                </div>

                <div className="box">
                    <label>
                        <div className="box-epi">
                            Quais EPIs o trabalhador usa na atividade?
                            <div>
                                <input
                                    type="checkbox"
                                    name="epi"
                                    value="Não usa EPI"
                                    checked={funcionario.epis.includes('Não usa EPI')}
                                    onChange={handleEpiChange}
                                />
                                <span>O trabalhador não usa EPI.</span>
                            </div>
                        </div>
                    </label>

                    <div className="box-epi-usa">
                        <div className="box-epi-usa1">
                            <label>
                                Selecione a atividade:
                                <select name="activity" value={funcionario.activity} onChange={handleActivityChange}>
                                <option value="Atividade 1">Atividade 1</option>
                                {/* Add more options here */}
                                </select>
                            </label>

                            <div className="box-epi-usa2">
                                <label>
                                    Selecione o EPI:
                                    <select name="safetyshoes" value={funcionario.safetyshoes} onChange={handlesafetyshoesChange}>
                                    <option value="calçado de segurança">calçado de segurança</option>
                                    {/* Add more options here */}
                                    </select>
                                </label>
                                <label>
                                    Informe o número do CA:
                                    <input type="number" name="ca" value={funcionario.ca} onChange={handleInputChange} />
                                </label>
                                <label>
                                    <button type="button" onClick={() => definirFuncionario((funcionarioAnterior) => ({...funcionarioAnterior, epis: [] }))}>
                                    Adicionar EPI
                                    </button>
                                </label>
                            </div>
                        </div>
                        <button type='button'>Adicionar outra atividade</button>
                    </div>
                </div>

                <div className="box">
                    <label>
                        Adicione Atestado de Saúde (opcional):
                        <input type="file" name="healthCertificate" onChange={handleFileChange} />
                    </label>
                </div>

                <button onClick={ onClick } type="submit">Salvar</button>
            </form>
        </div>
    );
};

export default CadastroFuncionario;
