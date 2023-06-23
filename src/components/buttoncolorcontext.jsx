import React, { createContext, useState } from 'react';

const buttoncolorcontext = createContext();

export const ButtonColorProvider = ({ children }) => {
  const [buttonColor, setButtonColor] = useState('');

  const updateButtonColor = (color) => {
    setButtonColor(color);
  };

  return (
    <buttoncolorcontext.Provider value={{ buttonColor, updateButtonColor }}>
      {children}
    </buttoncolorcontext.Provider>
  );
};

export default buttoncolorcontext;
