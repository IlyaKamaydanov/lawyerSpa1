import s from "./App.module.scss";
import { AboutCompany } from "./components/AboutCompany/Index";
import { Header } from "./components/Header/Index";
import { Lawyers } from "./components/Lawyers/Index";
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
      <AboutCompany />
      <Lawyers />
    </div>
  );
}

export default App;
