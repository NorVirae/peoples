import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';

function App() {
  return (
    
      <>

        <Routes>
          <Route path="/" exact element={<Home/>} />
        </Routes>

      </>
  
  );
}

export default App;
