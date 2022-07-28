import "./sass/main.scss"
import Header from './components/Header';
import Home from './components/Home';
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from './components/Projects';
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
  
  return (
  <div className="App" >
    <Header></Header>
    <About></About>
    <Skill></Skill>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
  </div >
  );
}