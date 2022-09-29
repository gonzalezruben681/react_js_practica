import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import Greetingf from './components/pure/greetingF';
import TaskListComponent from './containers/task_list';
import ContactsComponent from './containers/contacts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name="Rubén"></Greeting> */}
        {/* Componente de ejemplo funcional  */}
        {/* <Greetingf name="Rubén"></Greetingf> */}
        {/* Componente de listado de tareas  */}
        {/* <TaskListComponent></TaskListComponent> */}
        <ContactsComponent></ContactsComponent>
      </header>
    </div>
  );
}

export default App;
