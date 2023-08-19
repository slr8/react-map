import { styled } from "styled-components";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Who from "./components/Who";
import Contact from "./components/Contact";

const Container = styled.div`
height: 100vh;
background-color: rebeccapurple;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
&::-webkit-scrollbar{
      display: none;
}
background-image: url('./img/bg.jpeg');
`
function App() {
      return (
            <Container>
                  <Hero />
                  <Who />
                  <Works />
                  <Contact />
            </Container>
      );
}

export default App;
