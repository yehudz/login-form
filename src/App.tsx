import Login from './components/views/Login'
import Dashboard from './components/views/Dashboard'
import appContext from './context/appContext'
import { useState, useContext } from 'react'
const App = ()=> {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  return(
    <appContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      {!isLoggedIn ? <Login /> : <Dashboard />}
    </appContext.Provider>
  )
}

export default App