import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App'


const Step1Component = React.lazy(() => import('./routes/step1'));
const Step2Component = React.lazy(() => import('./routes/step2'));
const Step3Component = React.lazy(() => import('./routes/step3'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="step1" element={<Suspense fallback={<div>Loading...</div>}><Step1Component /></Suspense>} />
      <Route path="step2" element={<Suspense fallback={<div>Loading...</div>}><Step2Component /></Suspense>} />
      <Route path="step3" element={<Suspense fallback={<div>Loading...</div>}><Step3Component /></Suspense>} />
    </Routes>
    </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
