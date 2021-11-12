import './App.css';
import Card, { Card1, Card2 } from './components/Card';
import Navbar from './components/Navbar';

function App() {
  return (
    
    <div className="container">
{/* header section */}
    <div className="flex-wrapper">
      <Navbar/>
      
{/* main section */}
      <main>
        <Card1/>
        <Card2/>

      </main>

    </div>

{/* footer section */}
      <footer>

      </footer>
      
    </div>
  
  );
}

export default App;
