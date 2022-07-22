import './App.css';
import Main from './views/Main';
import {Route, Routes} from 'react-router-dom';
import UpdateForm from './views/UpdateForm';



function App() {
  return (
    <div className = "App">
      <Routes>
        <Route element = {<Main/>} path = "/authors" />
        <Route element = {<UpdateForm/>} path = "/authors/:id/edit" />
      </Routes>
    </div>

  );
}

export default App;
