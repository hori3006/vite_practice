import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import './App.css'
import Hobby from "./components/Hobby/Hobby"
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom"



function App () {
  return (
    <Router>
    <div className="App">
      <Header/>
      <main>
        <Routes>
           <Route path="/" element={<Hero />} />
           <Route path="/hobby" element={<Hobby />} />
       </Routes>
      </main>
    </div>
    </Router>
  )
}

export default App