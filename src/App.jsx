import { useEffect, useState } from 'react'
import './App.css'
import { UseReducer } from './components/UseReducer';
import { UseRef } from './components/UseRef';
import { UseMemo } from './components/UseMemo';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Count is ${count}`;
  }, [count]);

  return (
    <>
      <h2>Practica de hoks</h2>
      <hr />
      <div className="card">
        <h2>Ejercicio useState</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <hr />
      </div>
      <UseReducer />
      <hr />
      <h2>Ejercicio useRef</h2>
      <UseRef count={count} setCount={setCount}/>
      <hr />
      <h2>Ejercicio useMemo</h2>
      <UseMemo count={count} setCount={setCount}/>
    </>
  )
}

export default App
