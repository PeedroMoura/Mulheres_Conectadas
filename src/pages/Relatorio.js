import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import db from '../config/firebase';

const ChartPage = () => {

const [ carregando, setCarregando ] = useState(false);

const [etnia, setEnia ] = useState([
  {name: 'Branco', Pessoas: 0, pv: 2400, amt: 2400},
  {name: 'Preto', Pessoas: 0, pv: 2400, amt: 2400},
  {name: 'Pardo', Pessoas: 0, pv: 2400, amt: 2400},
  {name: 'Amarelo', Pessoas: 0, pv: 2400, amt: 2400},
  {name: 'Indígena', Pessoas: 0, pv: 2400, amt: 2400},
]);

const [genero, setGenero ] = useState([
  {name: 'Masculino', Pessoas: 0, pv: 2400, amt: 2400},
  {name: 'Feminino', Pessoas: 0, pv: 2400, amt: 2400},
  {name: 'Outros', Pessoas: 0, pv: 2400, amt: 2400},
]);

// ============================
const buscarEtnia = async() => {

  etnia[0]['Pessoas'] = (await getDocs(query(collection(db, 'usuarios'), where('etnia', '==', 'branco')))).size;
  etnia[1]['Pessoas'] = (await getDocs(query(collection(db, 'usuarios'), where('etnia', '==', 'preto')))).size;
  etnia[2]['Pessoas'] = (await getDocs(query(collection(db, 'usuarios'), where('etnia', '==', 'pardo')))).size;
  etnia[3]['Pessoas'] = (await getDocs(query(collection(db, 'usuarios'), where('etnia', '==', 'amarelo')))).size;
  etnia[4]['Pessoas'] = (await getDocs(query(collection(db, 'usuarios'), where('etnia', '==', 'indigena')))).size;

  setEnia(etnia)
  setCarregando(true)
}
// =====
const buscarGenero = async() => {

  genero[0]['Pessoas'] = (await getDocs(query(collection(db, 'usuarios'), where('genero', '==', 'masculino')))).size;
  genero[1]['Pessoas'] = (await getDocs(query(collection(db, 'usuarios'), where('genero', '==', 'feminino')))).size;
  genero[2]['Pessoas'] = (await getDocs(query(collection(db, 'usuarios'), where('genero', '==', 'outro')))).size;
  
  setGenero(genero)
  setCarregando(true)
}
// ===============================================
useEffect(() => {
  (async () => {
    await buscarEtnia();
    await buscarGenero();
  })()
}, []);
// ===============================================
const renderBarChart = (
  <BarChart width={1200} height={700} data={etnia}>
    <XAxis dataKey="name" stroke="#8884d8" />
    <YAxis />
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="Pessoas" fill="#8884d8" barSize={50} />
  </BarChart>
);

const renderBarChart1 = (
  <BarChart width={1200} height={700} data={genero}>
    <XAxis dataKey="name" stroke="#8884d8" />
    <YAxis />
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="Pessoas" fill="#8884d8" barSize={50} />
  </BarChart>
);

  return (
    <div style={{display:'flex', width:'100vw', justifyContent:'center', alignItems:'center', paddingTop:20, flexDirection:'column'}}>
      {renderBarChart}
      {renderBarChart1}
    </div>
  );
};

export default ChartPage;