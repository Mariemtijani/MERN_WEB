import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './app/auth/Register';
import Home from './app/home/Home';

function App() {
  return (
    <main className="App">
      <Routes>
      <Route path='/' element={<Home />}/>
        <Route path='/signUp' element={<Register />}/>
      </Routes>
    </main>
  );
}

export default App;
