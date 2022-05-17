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
      <header className="App-header">
        <Nav/>
        <Main/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Break/>
        <Contact/>
      </header>
    </div>
  );
}

export default App;
