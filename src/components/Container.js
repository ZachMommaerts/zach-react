import styled from "styled-components";
import Start from "./Start";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Div = styled.div`

`

export default function Container() {
  return(
    <Div>
      <Start />
      <About />
      <Projects />
      <Contact />
    </Div>
  )    
}