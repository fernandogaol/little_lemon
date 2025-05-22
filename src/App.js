import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import ItalianDesserts from './ItalianDesserts';
import FeedbackForm from './FeedbackForm';

function Home() {
  return (
    <div>
      <h2>Welcome to Little Lemon Restaurant</h2>
      <p>Explore our delicious menu and enjoy your stay!</p>
    </div>
  );
}

function Form() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    console.log("form received");
  }
 
  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}> 
        <fieldset>
          <div className='field'>
            <label>Name:</label>
            <input 
            id="name"
            type='text' 
            placeholder='name' 
            name='name'
            value={name}
            onChange ={(e) => setName(e.target.value)}/>
          </div>
          <button disabled={!name} type='submit'>Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{ padding: '10px', background: '#eee' }}>
          <Link to="/" style={{ marginRight: 15 }}>Home</Link>
          <Link to="/desserts" style={{ marginRight: 15 }}>Desserts</Link>
          <Link to="/form">Form</Link>
          <Link to="/form2">Feedback Form</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/desserts" element={<ItalianDesserts />} />
          <Route path="/form" element={<Form />} />
          <Route path="/form2" element={<FeedbackForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
