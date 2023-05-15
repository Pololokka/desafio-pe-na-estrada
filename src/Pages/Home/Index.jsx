import TextSection from "../../Components/TextSection/Index";
import { Link } from "react-router-dom";

import {
  homeTextIntro,
  homeTextPlace1,
  homeTextPlace2,
  homeTextPlace3,
} from "../../Data/texts";

const Home = () => {
  document.title = "Pé na Estrada!";

  return (
    <main className="main__container">
      <h1 className="titulo titulo-hover">Pé Na Estrada</h1>
      <TextSection sectionTitle="Sobre Nós" sectionText={homeTextIntro} />

      <TextSection sectionTitle="França" sectionText={homeTextPlace1} />
      <Link className="subtitulo btn__geral" to="/franca">
        Conheça mais sobre a França!
      </Link>

      <TextSection sectionTitle="Estados-Unidos" sectionText={homeTextPlace2} />
      <Link className="subtitulo btn__geral" to="/eua">
        Conheça mais sobre os Estados-Unidos!
      </Link>

      <TextSection sectionTitle="Espanha" sectionText={homeTextPlace3} />
      <Link className="subtitulo btn__geral" to="/espanha">
        Conheça mais sobre a Espanha!
      </Link>
    </main>
  );
};

export default Home;
