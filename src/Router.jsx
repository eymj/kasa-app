import { Routes, Route } from "react-router";
import BaseLayout from "./layouts/BaseLayout";
import Home from "./routes/Home";
import About from "./routes/About";
import Error from "./routes/Error";
import Listing from "./routes/Listing";

function Router() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route index element={<Home />} /> 
        <Route path="about" element={<About />} />
        <Route path="listings/:pid" element={<Listing />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default Router;

/*

<Route path="about" element={<About />} />
        <Route path="listings/:pid" element={<Listing />} />
        <Route path="*" element={<Error />} />

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
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
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App


  */
