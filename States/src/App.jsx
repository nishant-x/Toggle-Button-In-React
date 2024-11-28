import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticlePage from "./Components/ArticlePage";
import GamePage from './components/GamePage';


// for project game 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArticlePage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </Router>
  );
}

export default App;
