// src/App.jsx

import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import FounderListItem from './components/FounderListItem/FounderListItem.jsx';

const App = () => {
  return (
    <> 
      <Navbar />  
      <main>
        <h1>Welcome to Hyperbo.ly</h1>
        <h2>The future is firmly in front of us!</h2>
        <p>If you can't explain it to a fifth-grader, our product does it.</p>
      </main>
      <FounderListItem name="Santiago" title="CEO"/>
    </>
  );
};

export default App;
