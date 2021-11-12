import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
  return (
    
    <div className="container">
{/* header section */}
      <Navbar/>

{/* main section */}
      <main>
        <Card/>
      </main>

{/* footer section */}
      <footer>

      </footer>
      
    </div>
  
  );
}

export default App;
