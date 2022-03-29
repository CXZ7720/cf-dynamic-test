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
  const test1 = [1,2,3,4,5]
  const test2 = [6,7,8,9,10]
  const random = Math.floor(Math.random() * 10)
  const testMap = new Map([
    ['1', 'test1'],
    ['2', 'test2']
  ])
  

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
        <p>Optional Chaining : {random > 5 ? `${[...test1, ...test2]}` : `${[...test2, ...test1]}`}</p>
        <p>FromEntries : {`1 : ${Object.fromEntries(testMap)[1]}`}</p>
        <p>FromEntries : {`2 : ${Object.fromEntries(testMap)[2]}`}</p>
        <Content  />
        <p>
          THIS IS ANOTHER BRANCH!!
        </p>
        <p>
          <Link to="/step1">Step 1</Link>
        </p>
      </header>
    </div>
  )
}

export default App
