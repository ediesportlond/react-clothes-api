import Clothes from "./components/Clothes"
import Header from "./components/Header"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Clothes />
      </header>
    </div>
  );
}

export default App;
