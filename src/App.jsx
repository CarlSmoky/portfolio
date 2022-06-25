import './styles/main.scss';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';

export default function App() {
  
  return (
  <div className="App" >
    <Header></Header>
    <Home></Home>
    <Projects></Projects>
  </div >
  );
}