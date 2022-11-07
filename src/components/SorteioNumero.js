import {useState} from "react";

function SorteioNumero() {
  const[raffleNumb, setRaffleNumb] = useState(0);
  const[num, setNum] = useState();

  const raffle = () => {
    let results = Math.floor(Math.random() * num);
    setRaffleNumb(results)
  }

  return (
    <div>
     
           {raffleNumb !== 0 && (<div className="List">
               <h2>o número sorteado foi:</h2> <br/>
              <h1>{raffleNumb}</h1>
           </div>)}
     
        <div className="numBox">
          <h3>
              Sortear um número de 1 a
          </h3>
          <input type="number" onChange={(e) => setNum(e.target.value)}/>
          <button onClick={raffle}>sortear</button>
          
        </div>
    </div>
  )
}

export default SorteioNumero