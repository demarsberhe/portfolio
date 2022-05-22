import {Nav} from "./components/Nav/Nav";
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skills/Skills";
import {About} from "./components/About/About";
import {Break} from "./components/Main/Break";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
        <Nav/>
        <Main/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Break/>
        <Contact/>
    </div>
  );
}

export default App;
