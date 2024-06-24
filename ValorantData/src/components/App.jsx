import { useState, useEffect } from 'react'
import Home from './Home'
import Agents from './Agents'
import Weapons from './Weapons'
import AgentDetails from './AgentDetails'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import dataContext from './dataContext'
import WeaponDetails from './WeaponDetails'

function App() {

  const [agents, setAgents] = useState([])

  useEffect(() => {
    axios.get('https://valorant-api.com/v1/agents')
      .then(res=> setAgents(res.data.data))
  }, [])

  const [weapons, setWeapons] = useState([])

  useEffect(() => {
    axios.get('https://valorant-api.com/v1/weapons')
      .then(res => setWeapons(res.data.data))
  }, [])


  return (
    <div className="App">
      <Router>
        <dataContext.Provider value ={{
          agents,
          weapons
          
        }}>

          <nav className='nav-bar'>
            <Link to="/" className='nav-link'
            >Home</Link>
            <Link to="/agents" className='nav-link'
            >Agents</Link>
            <Link to="/weapons" className='nav-link'
            >Weapons</Link>
          </nav>

          <Routes>
            <Route path='/' element={<Home />}/>

            <Route path='/agents' element={<Agents />} />
              
            <Route path='/weapons' element={<Weapons/>}/>
            
            <Route path='/agents/:agentId' element={<AgentDetails/>}/>
            <Route path='/weapons/:weaponId' element={<WeaponDetails/>}/>
              
          </Routes>    

          <footer className='footer'>
            <h5 className='footer-header'>ValorantData</h5>
          </footer>
        </dataContext.Provider>
      </Router>
    </div>
  )
}

export default App


