import { useState, useCallback } from 'react';
import ListItem from './components/ListItems';

// Questa non fa parte di useCallback
let functions = new Set()

// ListItems
let imgs = [
  {img: 'https://picsum.photos/200/300'},
  {img: 'https://picsum.photos/201/300'},
  {img: 'https://picsum.photos/202/300'},
  {img: 'https://picsum.photos/203/300'},
  {img: 'https://picsum.photos/204/300'},
  {img: 'https://picsum.photos/205/300'},
]

function App() {
  const [counter, setCounter] = useState(0);
  // const showMyName = () => console.log('Rebecca!'); <= da ottimizzare con useCallback
  const showMyName = useCallback(() => console.log('Rebecca!'), []);

  // Neppure queste due righe
  functions.add(showMyName);
  console.log(functions);

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => setCounter((counter + 1))}>Increments</button>
      <button onClick={() => showMyName()}>My name is...</button>
      <ListItem data={imgs} />
    </div>
  );
}

export default App;
