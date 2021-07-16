
import React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Navigation from './Navigation'
import HeroSection from './HeroSection'
import Card from './Card'
import Footer from './Footer';
import Login from './Login';

function App() {
  return (
    <div className="App">

<Router>

<Link to="/login"></Link>

<Home />
<Navigation />
<HeroSection />
<Card />
<Footer />
</Router>

    </div>
  );
}

export default App;
