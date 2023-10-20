import React from 'react';
import './landing.css';
import cacaoImage from '../../img/cacao.jpg'; 
import logoImage from '../../img/logo.png'; 
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="image" style={{ backgroundImage: `url(${cacaoImage})` }}></div>
      <div className="image1" style={{ backgroundImage: `url(${logoImage})` }}></div>
      <div className="card">
        <p className="text">Seguridad y control del campo a la mesa</p>
      </div>
      <div className="buttons">
        <button className="text"><Link to="/Registro">Iniciar</Link></button>
        <button className="text">Soluciones</button>
        <button className="text">Partners</button>
        <button className="text">Contacto</button>
      </div>
    </div>
  );
}

export default Landing;

