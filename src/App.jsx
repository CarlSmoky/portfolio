import "./sass/main.scss"
import Header from './components/Header';
import About from "./components/About";
import SkillList from "./components/SkillList";
import ProjectList from './components/ProjectList';
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
  
  return (
  <div className="App" >
    <Header></Header>
    <About></About>
    <SkillList></SkillList>
    <ProjectList></ProjectList>
    <Contact></Contact>
    <Footer></Footer>
  </div >
  );
}