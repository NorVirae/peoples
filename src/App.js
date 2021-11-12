import './App.css';
import Card, { Card1, Card2, Card3, Card4, Card5, Card6 } from './components/Card';
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
        <div className={"row-flex"}>
            <Card2/>
            <Card3/>
            <Card4/>
        </div>

        <div className={"row-flex"}>
          <Card5/>
          <Card6/>
        </div>


      </main>

    </div>

{/* footer section */}
      <footer>

      </footer>
      
    </div>
  
  );
}

export default App;
