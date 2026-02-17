import s from "./App.module.scss";
import { AboutCompany } from "./components/AboutCompany/Index";
import { Footer } from "./components/Footer/Index";
import { Header } from "./components/Header/Index";
import { Lawyers } from "./components/Lawyers/Index";
import { Reviews } from "./components/Reviews/Index";
import { Services } from "./components/Services/Index";
import { Title } from "./components/Title/Index";
import { Useful } from "./components/Useful/Index";

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
      <Reviews />
      <Useful />
      <Footer />
    </div>
  );
}

export default App;
