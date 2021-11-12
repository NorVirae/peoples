import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
  return (
    
    <div className="container">
{/* header section */}
    <div className="flex-wrapper">
      <Navbar/>
      
{/* main section */}
      <main>
        <Card/>

      </main>

    </div>

{/* footer section */}
      <footer>

      </footer>
      
    </div>
  
  );
}

export default App;
