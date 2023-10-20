import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/pages/Landing';
import LoginComprador from './components/pages/Registro';
import Login from './components/pages/login';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Registro" element={<LoginComprador />} />
        <Route path="/login" element={<Login />} />

      </Routes>

    </>
  );
}

export default App;
