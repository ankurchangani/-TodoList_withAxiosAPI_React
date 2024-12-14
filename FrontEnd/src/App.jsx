import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import './App.css'
import TodoForm from './Components/TodoForm/TodoForm'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import ViewData from './Components/Viewdata/ViewData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/todo" element={<TodoForm/>} />
      <Route path="/view" element={<ViewData/>} />
    </Routes>
  

    </>
  )
}

export default App
