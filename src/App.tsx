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

interface Verse {
  key: Choice;
  text: string;
}

const useRandomVerse = ():[Verse | undefined, () => void] => {
  const [verse, setVerse] = React.useState<Verse>()
  const data = useData()

  const reset = () => setVerse(undefined)

  React.useEffect(() => {
    if (!data) return;
    if (verse) return;

    const key = sample<Choice>(['real_verses', 'fake_verses'])
    const text = sample(data[key])

    setVerse({key, text})
  }, [data, verse])

  return [verse, reset]
}

const Chooser = ({ onChoose }: { onChoose: (choice: Choice) => void }) => {
  return (<>
    <button className="Real" onClick={() => onChoose('real_verses')}>Real</button>
    <button className="Fake" onClick={() => onChoose('fake_verses')}>Fake</button>
  </>);
}

const RealReveal = () => (
  <div>
    <h1>Real</h1>
    <img src="real.jpg" alt="buddy christ"></img>
  </div>
)

const FakeReveal = () => (
  <div>
    <h1>Fake</h1>
    <img src="fake.jpg" alt="the charletan"></img>
  </div>
)

const appleSauce: {[key in Choice]: JSX.Element} =  {
  real_verses: <RealReveal />,
  fake_verses: <FakeReveal />,
}

function App() {
  const [verse, resetVerse] = useRandomVerse()
  const [hidden, setHidden] = React.useState(true)

  const reset = () => {
    setHidden(true)
    resetVerse();
  }

  if (!verse) return null

  return (
    <div className="App">
      <div className="Content">
        <p>{verse.text}</p>
        {hidden || appleSauce[verse.key]}

        {hidden
          ? <Chooser onChoose={() => setHidden(false)} />
          : <button className="Try-Again" onClick={reset}>Try Again</button>
        }
      </div>
    </div>
  );
}

export default App;
