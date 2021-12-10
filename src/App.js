import "./App.css";
import TarjetaBip from "./components/TarjetaBip";
import { useState } from "react";

function App() {
  const handlerSelectorBip = () => {
    if (bipSelector) {
      setBipSelector(true);
    } else {
      setTneSelector(false);
      setBipSelector(true);
    }
  };
  const handlerSelectorTne = () => {
    if (tneSelector) {
      setTneSelector(true);
    } else {
      setBipSelector(false);
      setTneSelector(true);
    }
  };
  const [bipSelector, setBipSelector] = useState(true);
  const [tneSelector, setTneSelector] = useState(false);
  return (
    <div className="App">
      <div className="navbar">
        <h1 className="title">
          <span>MiSaldoBip</span>
        </h1>
        <p className="about">Acerca</p>
      </div>
      <div className="selector__tarjeta">
        <h3
          className={bipSelector ? "selector__bip__activo" : "selector__bip"}
          onClick={() => handlerSelectorBip()}
        >
          Bip
        </h3>
        <span>|</span>
        <h3
          className={tneSelector ? "selector__tne__activo" : "selector__tne"}
          onClick={() => handlerSelectorTne()}
        >
          Pase
        </h3>
      </div>
      <div className="page__content">{bipSelector && <TarjetaBip />}</div>
    </div>
  );
}

export default App;
