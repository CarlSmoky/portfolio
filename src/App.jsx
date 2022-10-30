import React from "react";
import "./sass/main.scss";
import Header from './components/Header';
import Navbar from "./components/Navbar";
import About from "./components/About";
import ProjectList from './components/ProjectList';
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import SocialList from "./components/SocialList";
import Viewport from "./helpers/Viewport";
import { useInView } from 'react-intersection-observer';

export default function App() {
  // const { myRef, myElementVisible, } = useInView();
  const { width } = Viewport();
  const breakpoint = 800;

  const options = {
    threshold : 0.25,
  }

  const [headerRef, isHeaderVisible] = useInView(options);
  const [aboutRef, isAboutVisible] = useInView(options);
  const [skillRef, isSkillVisible] = useInView(options);
  const [projectRef, isProjectVisible] = useInView(options);
  const [contactRef, isContactVisible] = useInView(options);

  const isVisible = {
    isHeaderVisible,
    isAboutVisible,
    isSkillVisible,
    isProjectVisible,
    isContactVisible
  }

  //Without useInView
  // const myRef = useRef();
  // const [myElementVisible, setMyElementVisible] = useState();
  // console.log("myElementVisible", myElementVisible);
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     console.log('myRef', myRef.current);
  //     const entry = entries[0];
  //     // setMyElementVisible(entry.isIntersecting);
  //     // console.log('entry', entry);
  //   })
  //   observer.observe(myRef.current);
  // }, [])


  return (
    <div className="App">
      {width >= breakpoint ? <SocialList addClass="desktop" /> : ""}
      <Header headerRef={headerRef} />
      <Navbar isVisible={isVisible}/>
      <About aboutRef={aboutRef} />
      <Skills skillRef={skillRef} />
      <ProjectList projectRef={projectRef} />
      <Contact contactRef={contactRef} />
      {width >= breakpoint ? "" : <SocialList addClass="mobile" />}
    </div >
  );
}