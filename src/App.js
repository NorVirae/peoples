import './App.css';
import Navbar from './components/Navbar';
import blog1 from './assets/images/blog-img1.jpg'

function App() {
  return (
    
    <div className="container">
{/* header section */}
      <Navbar/>

{/* main section */}
      <main>
        <div className={"card"}>
          <div className="image-place"><img className={"blog-image"} src={blog1}  alt="first blog image" /></div>
        </div>

      </main>

{/* footer section */}
      <footer>

      </footer>
      
    </div>
  
  );
}

export default App;
