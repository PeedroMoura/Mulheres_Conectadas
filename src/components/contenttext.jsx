import React from 'react';
import { useFirstPrismicDocument } from '@prismicio/react';

const ContentText = ({ formularioData }) => {
  const [document] = useFirstPrismicDocument();
  console.log(document);

  return <h2>Valor do formulário: {formularioData}</h2>;
};

export default ContentText;
