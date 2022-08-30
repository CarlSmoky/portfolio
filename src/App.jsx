import "./sass/main.scss";
import Header from './components/Header';
import Navbar from "./components/Navbar";
import About from "./components/About";
import ProjectList from './components/ProjectList';
import Contact from "./components/Contact";


export default function App() {

  return (
    <div className="App" >
      <Header></Header>
      <Navbar></Navbar>
      <About></About>
      <ProjectList></ProjectList>
      <Contact></Contact>
    </div >
  );
}