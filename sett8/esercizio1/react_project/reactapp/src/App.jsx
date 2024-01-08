import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import ImageClass from './components/Image'
function App() {
  const [count, setCount] = useState(0)
  let ButtonTitle = "ciao"
  let urlImage ="https://wips.plug.it/cips/paginegialle.it/magazine/cms/2022/01/cane-di-razza.jpg"
  let altTag = "immagine cane"
  return (
    <>
      <h1>Vite + React Esercizio 1</h1>

        <Button title={ButtonTitle} />
        <hr />
        <ImageClass url={urlImage} alt={altTag} />
    </>
  )
}

export default App
