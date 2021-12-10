import "./App.css";
import Bip from "./components/Bip";

function App() {
  const navbar_style = {
    backgroundColor: "black",
  };
  return (
    <div className="App">
      <div className="navbar" styles={navbar_style}>
        <h1 className="title">
          <span>MiSaldoBip</span>
        </h1>
        <p className="about">Acerca</p>
      </div>
      <div className="selector__tarjeta">
        <h3 className="selector__bip">Bip</h3>
        <span>|</span>
        <h3 className="selector__pase">Pase</h3>
      </div>
      <div className="page__content">
        <Bip />
      </div>
    </div>
  );
}

export default App;
