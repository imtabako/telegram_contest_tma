import { useState } from 'react'
import './App.css'

import WebApp from '@twa-dev/sdk'
import PhotoUpload from "./PhotoUpload.tsx";

function App() {
  const [count, setCount] = useState(0)
  const [test, setTest] = useState('')
  const [test2, setTest2] = useState('')
  // const [photo, setPhoto] = useState();

  return (
    <>
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
          WebApp.CloudStorage.getKeys((error, keys) => {
            if (error !== null) {
              console.error('error: ', keys)
              return
            }

            WebApp.CloudStorage.getItems(keys!, (error, result) => {
              if (error !== null) {
                console.error('error: ', keys)
                return
              }
              setTest(JSON.stringify(result))
              setTest2(result![0])
              console.log(result)
            })
          })
        }}>
          Show Alert
        </button>
      </div>
      <div className="card">
        <textarea>{ test }</textarea>
      </div>
      <div className="card">
        <label>{ test2 }</label>
      </div>
    </>
  )
}

export default App
