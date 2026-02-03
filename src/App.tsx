import s from "./App.module.scss";
import { Header } from "./components/Header/Index";
import { Services } from "./components/Services/Index";
import { Title } from "./components/Title/Index";

function App() {
  return (
    <div>
      <div className={s.background}>
        <Header />
        <Title />
      </div>
      <Services />
    </div>
  );
}

export default App;
