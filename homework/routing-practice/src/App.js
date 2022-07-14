import logo from './logo.svg';
import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import {useParams} from "react-router";
import './App.css';

const Home = (props) => {
  return(
    <h1>Welcome</h1>
  );
}

const InputPage = (props) => {
  const {input} = useParams();
  if(isNaN(+input)){
    return(
      <h1>The word is: {input}</h1>
    );
  }else{
    return(
      <h1>The number is: {input}</h1>
    );
  }
}

const InputColors = (props) => {
  const {input, txtColor, bgColor} = useParams();
  const styling = {
    color: txtColor,
    backgroundColor: bgColor
  }
  if(isNaN(+input)){
    return(
      <h1 style = {styling}>The word is: {input}</h1>
    );
  }else{
    return(
      <h1 style = {styling}>The number is: {input}</h1>
    );
  }
}
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/:input' element = {<InputPage/>}/>
        <Route path='/:input/:txtColor/:bgColor' element = {<InputColors/>}/>
      </Routes>
    </div>
  );
}

export default App;
