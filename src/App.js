import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <div class='box'>
      <div class='wave -one'></div>
      <div class='wave -two'></div>
      <div class='wave -three'></div>
    </div>
      <Menu/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
