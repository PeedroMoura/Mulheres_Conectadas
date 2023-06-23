import React, { useState } from 'react';

import ContentText from './contenttext';
import Admin from './AdminPanel';

const gerenciaform = () => {
  const [formularioData, setFormularioData] = useState('');
  const handleFormularioDataChange = (value) => {
    console.log('Valor do formulário atualizado:', value);
    setFormularioData(value);
  };

  return (
    <div>
      <Admin setFormularioData={handleFormularioDataChange} />
      <ContentText formularioData={formularioData} />
    </div>
  );
};

export default gerenciaform;
