import React, { createContext, useState } from 'react';

const ButtonTextContext = createContext();

const ButtonTextProvider = ({ children }) => {
  const [buttonTexts, setButtonTexts] = useState({
    Home: 'Home',
    Cursos: 'Cursos',
    Login: 'Login',
    Soluções: 'Soluções',
    Sobre: 'Sobre',
    'Painel Admin': 'Painel Admin',
  });

  const updateButtonText = (button, text) => {
    setButtonTexts((prevButtonTexts) => ({
      ...prevButtonTexts,
      [button]: text,
    }));
  };

  return (
    <ButtonTextContext.Provider value={{ buttonTexts, updateButtonText }}>
      {children}
    </ButtonTextContext.Provider>
  );
};

export { ButtonTextContext, ButtonTextProvider };

