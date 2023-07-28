import { useNavigate} from 'react-router-dom';
import { useState } from 'react';

function Tela1() {
  const history = useNavigate();
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');

  const handleClick = () => {
    history.push({
      pathname: '/contenttext',
      state: {
        valor1: valor1,
        valor2: valor2
      }
    });
  };

  return (
    <div>
      <input type="text" value={valor1} onChange={(e) => setValor1(e.target.value)} />
      <input type="text" value={valor2} onChange={(e) => setValor2(e.target.value)} />
      <button onClick={handleClick}>Ir para Tela 2</button>
    </div>
  );
}

export default Tela1;
