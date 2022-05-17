import {Nav} from "./components/Nav/Nav";
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <Main/>
        <Skills/>
      </header>
    </div>
  );
}

export default App;
