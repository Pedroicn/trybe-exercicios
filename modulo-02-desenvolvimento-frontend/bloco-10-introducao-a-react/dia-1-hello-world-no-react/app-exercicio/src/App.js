import './App.css';
// import Task from './componentes/task';
// // exercicio 1
// const array = ['JAVASCRIPT', 'CSS', 'REACT', 'HTML']
// const elem = array.map((element) => Task(element))
// function App() {
//   return (
//      elem
//   );
// }

// export default App;
import Hearder from './componentes/Header';
import Content from './componentes/Content';
import Footer from './componentes/Footer';
function App() {
  return (
    <div>
      <Hearder/>
      <Content/>
      <Footer/>
    </div>
     
  );
}

export default App;
