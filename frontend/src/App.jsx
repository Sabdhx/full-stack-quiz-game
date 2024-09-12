import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from './pages/SignIn';
import SignUp from './pages/Signup';
import HomePage from './pages/LoggedIn';
import Result from './pages/Result';
import AdminPanel from './pages/quizeMaking';
import Deleting from './pages/Deleting';
import Leaderboard from './pages/chartBoard';



function App() {
  const [count, setCount] = useState(0);
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} /> 
        <Route path="/signIn" element={<SignIn />} />
        <Route path='/signUp' element={<SignUp/>} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/adminPanel" element={<AdminPanel />} />
        <Route path="/deleting" element={<Deleting />} />     
        <Route path="/ChartBoard" element={ <Leaderboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;