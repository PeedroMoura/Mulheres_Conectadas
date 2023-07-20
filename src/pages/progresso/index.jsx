import  React from 'react';
import CircularProgress from '@mui/material/CircularProgress';


function Progresso() {
  // Porcentagem de aulas assistidas
  const porcentagemAulasAssistidas = 75;

  return (
    <div style={{ textAlign: 'center', marginTop: '30px', marginBottom:'80px',height:'200px' }}>
      <h2 style={{ marginBottom: '20px' }}>Progresso do Curso</h2>
      <CircularProgress variant="determinate" size={200} thickness={10} value={porcentagemAulasAssistidas} />
      <p>{porcentagemAulasAssistidas}% de aulas assistidas</p>
    </div>
  );
}

export default Progresso;