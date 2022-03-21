import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Link } from 'react-router-dom'
import {
  graphql, loadQuery, useLazyLoadQuery, useQueryLoader
} from 'react-relay'
import RelayEnvironment from './relayEnvironment';
import { Content } from './Content'
import { ContentQuery } from './__generated__/ContentQuery.graphql'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
          
        </p>
        <Content  />
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <Link to="/step1">Step 1</Link>
        </p>
      </header>
    </div>
  )
}

export default App
