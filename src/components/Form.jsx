import React, { useState } from 'react';
import '../css/Form.css';

function Form() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errores, setErrores] = useState({});
  const [enviadoCorrectamente, setEnviadoCorrectamente] = useState(false);

  const autoGrow = (event) => {
    const textarea = event.target;
    textarea.style.height = '40px';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validar campos
    const erroresValidacion = {};
    if (!nombre.trim()) {
      erroresValidacion.nombre = 'El nombre es obligatorio';
    }
    if (!email.trim()) {
      erroresValidacion.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      erroresValidacion.email = 'El formato del email es inválido';
    }
    if (!mensaje.trim()) {
      erroresValidacion.mensaje = 'El mensaje no puede estar vacío';
    }

    // Actualizar estado de errores
    setErrores(erroresValidacion);

    // Si no hay errores, enviar la solicitud HTTP
    if (Object.keys(erroresValidacion).length === 0) {
      try {
        // Construye el objeto de datos a enviar
        const datos = new FormData();
        datos.append('nombre', nombre);
        datos.append('email', email);
        datos.append('mensaje', mensaje);

        // Realiza la solicitud HTTP POST al servidor PHP
        await fetch('form.php', {
          method: 'POST',
          body: datos,
        });

        // Lógica adicional después de enviar el formulario
        console.log('Formulario enviado con éxito');

        // Mostrar mensaje de enviado correctamente
        setEnviadoCorrectamente(true);

        // Limpiar el formulario (opcional)
        setNombre('');
        setEmail('');
        setMensaje('');
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
      }
    }
  };

  return (
    <div className="Form">
      {enviadoCorrectamente ? (
        <div className='msg_sended'>
          <p className='msg_sended_title'>Mensaje enviado correctamente. ¡Gracias!</p>
          <p className='msg_sended_text'> Gracias por ponerte en contacto conmigo. Recibirás una respuesta lo antes posible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              {errores.nombre && <p className="error">{errores.nombre}</p>}
            </li>
            <li>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Dirección de email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errores.email && <p className="error">{errores.email}</p>}
            </li>
            <li>
              <textarea
                onChange={(e) => {
                  autoGrow(e);
                  setMensaje(e.target.value);
                }}
                value={mensaje}
                name="mensaje"
                id="mensaje"
                placeholder="¿Cómo puedo ayudarte?"
              ></textarea>

              <button type="submit" name="submit" value="Submit">
                Enviar
              </button>
            </li>

            {errores.mensaje && <p className="error">{errores.mensaje}</p>}
          </ul>
        </form>
      )}

      <p>
        Si lo prefieres, escríbeme a <strong>hola@emedsgn.com</strong>
      </p>
    </div>
  );
}

export default Form;
