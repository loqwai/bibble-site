import React from 'react';
import './App.css';


type Choice = 'real_verses' | 'fake_verses'

type Data = {
  [choice in Choice]: string[];
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

const sample = <T extends any>(items: T[]): T => {
  const index = Math.floor(Math.random() * items.length)
  return items[index]
}


const useRandomVerse = () => {
  const [verse, setVerse] = React.useState<{key: Choice, text: string}>()
  const data = useData()

  React.useEffect(() => {
    if (!data) return;

    const key = sample<Choice>(['real_verses', 'fake_verses'])
    const verse = sample(data[key])

    setVerse({key, text: verse})
  }, [data])

  return verse
}

const Chooser = ({ onChoose }: { onChoose: (choice: Choice) => void }) => {
  return (<>
    <button className="Real" onClick={() => onChoose('real_verses')}>Real</button>
    <button className="Fake" onClick={() => onChoose('fake_verses')}>Fake</button>
  </>);
}

const appleSauce: {[key in Choice]: string} =  {
  real_verses: 'Real',
  fake_verses: 'Fake',
}

function App() {
  const verse = useRandomVerse()
  const [hidden, setHidden] = React.useState(true)

  if (!verse) return null

  return (
    <div className="App">
      <div className="Content">
        <p>{verse.text}</p>
        {hidden || <h1>{appleSauce[verse.key]}</h1>}

        {hidden
          ? <Chooser onChoose={() => setHidden(false)} />
          : <button className="Try-Again" onClick={()=> window.location.reload()}>Try Again</button>
        }
      </div>
    </div>
  );
}

export default App;
