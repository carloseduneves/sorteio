import {useState, useRef, useEffect} from 'react';

function Sorteio() {

  let [nameList, setNameList] = useState([])
  const [nameInput, setNameInput] = useState("");

  const reference = useRef(null);

  useEffect(() => {

    e.preventDefault();

    setNameList([...nameInput, nameInput])
    console.log(nameList);
    console.log(nameInput);
  
    reference.current.focus();
    
    setNameInput("");
  })
  const raffle = () => {
    console.log(nameList);
  }
  return (
    <div>
        <h1>Gerador de sorteios</h1>
        <div className='window'>
            <form onSubmit={useEffect}>
              <span>Sorteio de nomes</span>
              <input type="text" onChange={(e) => setNameInput(e.target.value)} ref={reference} value={nameInput}/>
              <button>inserir nome</button>
              
              {nameList.map((itens) => <li>{itens}</li>)}
            </form>
            <button onClick={raffle}>sortear</button>
        </div>
    </div>
  )
}

export default Sorteio