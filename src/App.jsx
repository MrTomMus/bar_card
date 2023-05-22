import { Routes, Route } from 'react-router-dom';
import './App.module.css';
import classes from './App.module.css'
import Menu from './menu/Menu';
import Main from './main/Main';
import { useState } from 'react';




function App() {

  let [state, setState] = useState({})

  

  return (
    <div className={classes.wrapper}>
        <Routes>
          <Route path='/' element={<Main setState={setState} state={state}/>}/>
          <Route path='/menu' element={<Menu state={state} setState={setState}/>}/>
        </Routes>    
    </div>
  );
}

export default App;
