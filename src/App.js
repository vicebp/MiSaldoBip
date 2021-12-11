import "./App.css";
import TarjetaBip from "./components/TarjetaBip";
import TarjetaTNE from "./components/TarjetaTNE";
import Paraderos from "./components/Paraderos";
import { useState } from "react";

function App() {
  const handlerSelectorBip = () => {
    if (bipSelector) {
      setBipSelector(true);
    } else {
      setParaderoSelector(false);
      setTneSelector(false);
      setBipSelector(true);
    }
  };
  const handlerSelectorTne = () => {
    if (tneSelector) {
      setTneSelector(true);
    } else {
      setParaderoSelector(false);
      setBipSelector(false);
      setTneSelector(true);
    }
  };
  const handlerSelectorParadero = () => {
    if (paraderoSelector) {
      setParaderoSelector(true);
    } else {
      setBipSelector(false);
      setTneSelector(false);
      setParaderoSelector(true);
    }
  };
  const [bipSelector, setBipSelector] = useState(true);
  const [tneSelector, setTneSelector] = useState(false);
  const [paraderoSelector, setParaderoSelector] = useState(false);
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
        <span>|</span>
        <h3
          className={
            paraderoSelector
              ? "selector__paradero__activo"
              : "selector__paradero"
          }
          onClick={() => handlerSelectorParadero()}
        >
          Paraderos
        </h3>
      </div>

      <div className="page__content">
        {bipSelector && <TarjetaBip />}
        {tneSelector && <TarjetaTNE />}
        {paraderoSelector && <Paraderos />}
      </div>

      <footer className="footer">
        <p>
          Creado con {"<3"} por{" "}
          <a className="rrss" href="https://github.com/sergiolv">
            @SergioLV
          </a>{" "}
          y{" "}
          <a className="rrss" href="https://github.com/vicebp">
            @ViceBp
          </a>{" "}
        </p>
      </footer>
    </div>
  );
}

export default App;
