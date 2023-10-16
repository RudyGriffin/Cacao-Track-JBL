import React, { useState } from 'react';
import './App.css'; // Asegúrate de importar tu archivo de estilos

import Image from './Image.png'; // Asegúrate de que la capitalización sea exacta y que la ruta sea correcta

const TuComponente = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [showFieldError, setShowFieldError] = useState(false);
  const [showCheckboxError, setShowCheckboxError] = useState(false);

  const contrasenaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleCorreoChange = (e) => {
    setCorreo(e.target.value);
  };

  const handleUsuarioChange = (e) => {
    setUsuario(e.target.value);
  };

  const handleContrasenaChange = (e) => {
    setContrasena(e.target.value);
  };

  const handleConfirmarContrasenaChange = (e) => {
    setConfirmarContrasena(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleRegistroClick = () => {
    if (
      nombre === '' ||
      correo === '' ||
      usuario === '' ||
      contrasena === '' ||
      confirmarContrasena === '' ||
      !isChecked ||
      !contrasenaRegex.test(contrasena) ||
      contrasena !== confirmarContrasena
    ) {
      setShowFieldError(true);
      setShowCheckboxError(!isChecked);
      setTimeout(() => {
        setShowFieldError(false);
        setShowCheckboxError(false);
      }, 3000);
      return; // Detiene el registro si hay campos obligatorios vacíos o la contraseña no cumple con los requisitos
    }

    // Resto de la lógica de registro
    window.location.href = '/ruta-de-tu-pagina';
  };

  return (
    <div className="container">
      <div>
        <div className="image" style={{ backgroundImage: `url(${Image})` }}></div>
        <div className="card">
          <div className="text1">Eres Productor? Registrate acá!</div>
          <div className="divider-horizontal"></div>
          <button className="button">
            <span className="icon"></span> Registrarse
          </button>
        </div>
      </div>

      <div className="side-content">
        <div className="text2">Registrate como comprador.</div>
        <div className="text3">Comience ingresando sus datos</div>
        <div style={{ height: '50px' }}></div>
        <div className="input-group">
          <div className="text4">Nombre completo</div>
          <input className="input" type="text" placeholder="Su Nombre" value={nombre} onChange={handleNombreChange} />
          <div className="text4">Correo electrónico</div>
          <input className="input" type="text" placeholder="Correo Electrónico" value={correo} onChange={handleCorreoChange} />
          <div className="text4">Nombre de usuario</div>
          <input className="input" type="text" placeholder="Crea un nombre de Usuario" value={usuario} onChange={handleUsuarioChange} />
          <div style={{ display: 'flex', alignItems: 'center', height: '30px' }}>
          <div className="text4">Contraseña</div>
          <div className="text4" title="La contraseña debe tener al menos una mayúscula, una minúscula, un número y un carácter especial, y debe ser de al menos 12 caracteres de longitud.">    ?</div>
          </div>
          <input className="input" type="password" placeholder="Crea Contraseña" value={contrasena} onChange={handleContrasenaChange} />
          <div className="text4">Confirme su contraseña</div>
          <input className="input" type="password" placeholder="Confirmar Contraseña" value={confirmarContrasena} onChange={handleConfirmarContrasenaChange} />
        </div>

        {showFieldError && <div className="error-message">Por favor, complete todos los campos y asegúrese de que la contraseña cumpla con los requisitos.</div>}
        {showCheckboxError && <div className="error-message">Es necesario aceptar los Términos y Condiciones para registrarse.</div>}

        <div style={{ height: '10px' }}></div>
        <div style={{ display: 'flex', alignItems: 'center', height: '30px' }}>
          <input type="checkbox" className="checkbox" style={{ marginRight: '10px' }} checked={isChecked} onChange={handleCheckboxChange} />
          <div className="text9">Acepto los Términos y la Política de Privacidad.</div>
        </div>

        <button className="button" style={{ top: '715px', width: '468px' }} onClick={handleRegistroClick}>
          <span className="icon"></span> Registrarse
        </button>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '30px' }}>
          <div className="text10" style={{ marginRight: '5px' }}>¿Ya tienes una cuenta? </div>
          <div className="text11" style={{ marginLeft: '5px' }}>Acceder</div>
        </div>
      </div>
    </div>
  );
};

export default TuComponente;
