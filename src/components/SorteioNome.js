import {useState, useRef} from 'react';
import './SorteioNome.css'

function SorteioNome() {
  const [raffleName, setRaffleName] = useState('');
  const [names] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const reference = useRef(null);

 const pushName = (e) => {
    e.preventDefault();
    names.push(nameInput);
  
    reference.current.focus();

    setNameInput("");

  }
  const raffle = () => {
    if(names.length === 0){
      alert('insira nomes');
      return;
    }
    const raffle = Math.floor(Math.random() * names.length);


    setRaffleName(names[raffle].toUpperCase());

    let indexFind = names.indexOf(names[raffle]);
    names.splice(indexFind, 1);

   
  }
  return (
    <div>
       
        <div className='window'>
        <button onClick={raffle}>sortear</button>
            <form onSubmit={pushName} className='form'>
              <span>Sorteio de nomes</span>
              <input type="text" onChange={(e) => setNameInput(e.target.value)} ref={reference} value={nameInput}/>
              <button>inserir nome</button>
              
              
              {names.map((itens, i) => 
                <p key={i} className='ListNames'>{itens}</p>
              )}
            </form>
           
           
            {raffleName !== '' && (<div className='List'>
              <h2>O resultado é:</h2><h1>{raffleName}</h1>
            </div>)}
        </div>
    </div>
  )
}

export default SorteioNome