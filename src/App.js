import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateUser from './components/CreateUser/CreateUser'
import EventCreate from './components/Events/EventCreate'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import MyEvents from './components/MyEvents/MyEvents'
import Test from './components/TestComponents/Test'

function App() {
  const state = useSelector(state => state.appState)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/createUser' element={<CreateUser />} />
        <Route path='/myEvents' element={<MyEvents />} />
        <Route path='/eventCreate' element={<EventCreate />} />        
        <Route path='/test' element={<Test />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
