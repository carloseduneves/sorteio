
import { useState } from 'react';
import './App.css';
import SorteioNome from './components/SorteioNome.js';
import SorteioNumero from './components/SorteioNumero';

function App() {
  const [raffleName, setRaffleName] = useState(false);
  const [raffleNumber, setRaffleNumber] = useState(false);
  const openWindowNumber = () => {
   
    setRaffleName(false);
    setRaffleNumber(true);
  };
  const openWindowName = () => {
    
    setRaffleNumber(false);
    setRaffleName(true);
  };

  return (
    <div className="App">
      
      <header>
        <h1>Gerador de sorteios</h1>
      </header>
        <div className='optionsBox'>
            <p onClick={openWindowName} className='btnName'>sorteio de nomes</p>
            <p onClick={openWindowNumber}className='btnNumber'>sorteio de números</p>
        
        </div>
       
         {raffleName === true && (<main><SorteioNome/></main>)}
         {raffleNumber === true && (<main><SorteioNumero/></main>)}
        
    </div>
  );
}

export default App;
