import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={[<Home />]}/>
          <Route path='/login' element={[<Login />]}/>

        </Routes> 
        {/* <Home /> */}
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
