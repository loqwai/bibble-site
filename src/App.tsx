import React from 'react';
import './App.css';

const useData = () => {
  const [data, setData] = React.useState()

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch('data.json')
      setData(await res.json())
    }

    fetchData();
  }, [])

  return data
}


function App() {
  const data = useData()

  return (
    <div className="App">
      <header className="App-header">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </header>
    </div>
  );
}

export default App;
