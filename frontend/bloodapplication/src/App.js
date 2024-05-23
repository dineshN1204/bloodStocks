import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import AuthProvider from './components/AuthProvider';
import AddBlood from './components/AddBlood';
import Profile from './components/Profile';
import RequiredAuth from './components/RequiredAuth';
import NoMatch from './components/NoMatch';
import Blood from './components/Blood';

function App() {
  return (
    <div className="App">
    <AuthProvider>
     <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blood' element={<Blood/>}/>
      <Route path='*' element={<NoMatch/>}/>
      <Route path='/addblood' element={
      <RequiredAuth>
      <AddBlood/>
      </RequiredAuth>
      }/>
      <Route path='/profile' element={<RequiredAuth><Profile/></RequiredAuth>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
     </Routes>
     </AuthProvider>
    </div>
  );
}

export default App;