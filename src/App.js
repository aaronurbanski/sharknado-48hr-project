import './App.css';
import 'fontsource-roboto';
import SetBackground from './components/SetBackground';
import DenseAppBar from './components/GetLocation';



function App() {
  return (
    <div className="App">
      <DenseAppBar/>
      <SetBackground/>
    </div>
  );
}

export default App;
