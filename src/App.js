// import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import News from './Components/News';

function App() {
  return (
    <>
      <Navbar/>
      <News pageSize={9}/>
      <Footer/>
      
    </>
  );
}

export default App;
