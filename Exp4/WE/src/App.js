import logo from './logo.svg';
import './App.css';
import DisplayText from './components/DisplayText';
import ClassDisplayText from './components/ClassDisplayText';
import Counter from './components/Counter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h2>Hello guys , this is Experiment 4</h2>
      <TodoList/>  {/*Using the Counter Component*/}
    </div>
  );
}

export default App;
