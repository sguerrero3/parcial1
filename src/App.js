import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './components/logIn';
import CarList from './components/carList';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/cars" element={<CarList />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
