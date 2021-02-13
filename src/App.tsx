import { stringify } from 'querystring';
import React from 'react';
import './App.css';


type Type = 'real_verses' | 'fake_verses'

type Data = {
  [type in Type]: string[];
};

const useData = () => {
  const [data, setData] = React.useState<Data>()

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch('data.json')
      setData(await res.json())
    }

    fetchData();
  }, [])

  return data
}
//const foo = <T, >(x: T) => x;
const randomChoice = <T extends any>(items: T[]): T => {
  const index = Math.floor(Math.random() * items.length)
  return items[index]
}


const useRandomChoice = () => {
  const [choice, setChoice] = React.useState<{key: string, verse: string}>()
  const data = useData()

  React.useEffect(() => {
    if (!data) return;

    const key = randomChoice<Type>(['real_verses', 'fake_verses'])
    const verse = randomChoice(data[key])

    setChoice({key, verse})
  }, [data])

  return choice
}

function App() {
  const choice = useRandomChoice()
  const [hidden, setHidden] = React.useState(true)

  return (
    <div className="App">
      <div className="Content">
        <p>{choice?.verse}</p>
        {hidden || <h1>{choice?.key}</h1>}

        {hidden
          ? <button className="Reveal" onClick={() => setHidden(false)}>Reveal</button>
          : <button className="Try-Again" onClick={()=>window.location.reload()}>Try Again</button>
        }
      </div>
    </div>
  );
}

export default App;
