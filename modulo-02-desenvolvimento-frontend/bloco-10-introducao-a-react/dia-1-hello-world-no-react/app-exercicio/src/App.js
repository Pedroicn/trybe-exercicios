import './App.css';
import Task from './componentes/task';
// exercicio 1
const array = ['JAVASCRIPT', 'CSS', 'REACT', 'HTML']
const elem = array.map((element) => Task(element))
function App() {
  return (
     elem
  );
}

export default App;
