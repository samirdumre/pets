import './App.css'
import { Link, BrowserRouter, Route, Routes } from "react-router-dom"
import SearchParams from './SearchParams.jsx'
import Details from './Details.jsx'

function App() {

  return (
      <BrowserRouter>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>        
      </BrowserRouter>
  )
}

export default App
