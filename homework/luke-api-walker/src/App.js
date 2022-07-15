import logo from './logo.svg';
import './App.css';
import { QueryForm } from './components/QueryForm';
import { DataCard } from './components/DataCard';
import {NotFound} from './components/NotFound';
import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<QueryForm setData = {setData}/>}/>
        <Route path="/:category/:id" element = {<DataCard data = {data} setData = {setData}/>}/>
        <Route path="/lost" element = {<NotFound setData = {setData}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
