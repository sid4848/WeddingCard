import logo from "./logo.svg";
import "./App.css";
import { Navbar, Header, Features } from "./containers";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Features></Features>
    </div>
  );
}

export default App;
