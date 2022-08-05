import "./sass/main.scss";
import Header from './components/Header';
import Navbar from "./components/Navbar";
import About from "./components/About";
import SkillList from "./components/SkillList";
import ProjectList from './components/ProjectList';
import Contact from "./components/Contact";


export default function App() {

  return (
    <div className="App" >
      <Header></Header>
      <Navbar></Navbar>
      <About></About>
      <SkillList></SkillList>
      <ProjectList></ProjectList>
      <Contact></Contact>
    </div >
  );
}