import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import WebApp from '@twa-dev/sdk'
import PhotoUpload from "./PhotoUpload.tsx";

function App() {
  const [count, setCount] = useState(0)
  const [test, setTest] = useState('')
  // const [photo, setPhoto] = useState();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
        {/* Here we add our button with alert callback */}
      <div className="card">
        <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
          Show Alert
        </button>
      </div>
      <div className="card">
        <PhotoUpload/>
      </div>
      <div className="card">
        <button onClick={() => {
          let callback
          const a = WebApp.CloudStorage.getKeys(callback)
          setTest(JSON.stringify(a))
          console.log(test)
          console.log(callback)
        }}>
          Show Alert
        </button>
      </div>
      <div className="card">
        <textarea>{ test }</textarea>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
