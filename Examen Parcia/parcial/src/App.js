import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        
        <form>
          <input type="text" placeholder="Nombre y Apellidos" /><br></br>
          <input type="email" placeholder="Dirección de correo electrónico" /><br></br>
          <input type="tel" placeholder="Número de teléfono" /><br></br> <br></br>
          <select>
            <option value="">Selecciona tipo de partición</option>
            <option value="Opción 1">Asistente</option>
            <option value="Opción 2">Expositor</option>
            <option value="Opción 3">Voluntario</option>
          </select><br></br> <br></br> <br></br> 
          <textarea placeholder="Coloca tus preguntas adicionales:" /> 
          <br></br>
          <br></br>
          <label>
            Confirmar asistencia:
            <input type="checkbox" />
          </label>
          <br></br>
          <br></br>
          <br></br>
          <button type="submit">Enviar registro de participación</button>
        </form>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
