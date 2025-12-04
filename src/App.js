import "./styles/global.scss";
import { Header } from "./components/Header/Header";
import { Audio } from "./components/Audio/Audio";

function App() {
  return (
    <>
      <div className="background"></div>
      <div>
        <Header />
        <Audio />
      </div>
    </>
  );
}

export default App;
