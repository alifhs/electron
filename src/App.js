import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <button onClick={()=>{
      window.versions.openDialog('test', 'desc');
     }}>Show Error Box</button>
  );
}

export default App;
