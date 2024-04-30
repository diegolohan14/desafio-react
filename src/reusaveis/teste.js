import React, { useState } from 'react';

const EmployeeRegister = () => {
  const [employee, setEmployee] = useState({
    status: 'ativo',
    name: '',
    cpf: '',
    rg: '',
    epis: [],
    activity: '',
    sex: '',
    birthdate: '',
    cargo: '',
    ca: '',
    healthCertificate: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployee((prevEmployee) => ({...prevEmployee, [name]: value }));
  };

  const handleEpiChange = (event) => {
    const { value } = event.target;
    setEmployee((prevEmployee) => ({
     ...prevEmployee,
      epis: prevEmployee.epis.includes(value)? prevEmployee.epis : [...prevEmployee.epis, value],
    }));
  };

  const handleActivityChange = (event) => {
    const { value } = event.target;
    setEmployee((prevEmployee) => ({...prevEmployee, activity: value }));
  };

  const handleSexChange = (event) => {
    const { value } = event.target;
    setEmployee((prevEmployee) => ({...prevEmployee, sex: value }));
  };

  const handleFileChange = (event) => {
    const { files } = event.target;
    setEmployee((prevEmployee) => ({...prevEmployee, healthCertificate: files[0] }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(employee);
    // Send the employee data to your API or database
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Status:
        <select name="status" value={employee.status} onChange={handleInputChange}>
          <option value="ativo">Ativo</option>
          <option value="inativo">Inativo</option>
        </select>
      </label>

      <label>
        Nome:
        <input type="text" name="name" value={employee.name} onChange={handleInputChange} />
      </label>

      <label>
        CPF:
        <input type="text" name="cpf" value={employee.cpf} onChange={handleInputChange} />
      </label>

      <label>
        RG:
        <input type="text" name="rg" value={employee.rg} onChange={handleInputChange} />
      </label>

      <label>
        EPIs:
        <div>
          <input
            type="checkbox"
            name="epi"
            value="Calçado de segurança"
            checked={employee.epis.includes('Calçado de segurança')}
            onChange={handleEpiChange}
          />
          <span>Calçado de segurança</span>
        </div>
        <button type="button" onClick={() => setEmployee((prevEmployee) => ({...prevEmployee, epis: [] }))}>
          Adicionar EPI
        </button>
      </label>

      <label>
        Atividade:
        <select name="activity" value={employee.activity} onChange={handleActivityChange}>
          <option value="Atividade 1">Atividade 1</option>
          {/* Add more options here */}
        </select>
      </label>

      <label>
        Sexo:
        <div>
          <input
            type="radio"
            name="sex"
            value="Masculino"
            checked={employee.sex === 'Masculino'}
            onChange={handleSexChange}
          />
          <span>Masculino</span>
          <input
            type="radio"
            name="sex"
            value="Feminino"
            checked={employee.sex === 'Feminino'}
            onChange={handleSexChange}
          />
          <span>Feminino</span>
        </div>
      </label>

      <label>
        Data de Nascimento:
        <input type="date" name="birthdate" value={employee.birthdate} onChange={handleInputChange} />
      </label>

      <label>
        Cargo:
        <input type="text" name="cargo" value={employee.cargo} onChange={handleInputChange} />
      </label>

      <label>
        CA:
        <input type="text" name="ca" value={employee.ca} onChange={handleInputChange} />
      </label>

      <label>
        Atestado de Saúde (opcional):
        <input type="file" name="healthCertificate" onChange={handleFileChange} />
      </label>

      <button type="submit">Salvar</button>
    </form>
  );
};

export default EmployeeRegister;