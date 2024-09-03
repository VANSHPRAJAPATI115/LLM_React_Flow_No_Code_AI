// src/App.js
import React from 'react';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <PipelineToolbar />
      <PipelineUI />
      
    </div>
  );
}

export default App;
