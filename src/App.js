import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="Contact" element={<Contact />} />
        
        

        </Route>
    </Routes>
    </>
  );
}

export default App
