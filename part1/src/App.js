import './App.css';
import Mensaje from './Mensaje.js';

const Description = () => {
  return <p>
    Esta es la app del curso de fullstack Bootcamp
  </p>
}

const App = () => {
  return (
    <div className="App">
      <Mensaje color='red' message='Esta es la app'/>
      <Mensaje color='green' message='Del curso de Midudev'/>
      <Mensaje color='blue' message='De React'/>
      <Description />
    </div>
  );
}

export default App;
