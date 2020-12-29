import Proyectos from './components/proyectos/Proyectos';

import ProyectoState from './context/proyectos/proyectoState';
import TareaState from './context/tareas/tareaState';


function App() {
  return (
    <ProyectoState>
      <TareaState>
        <div className="App">
          <Proyectos />
        </div>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
