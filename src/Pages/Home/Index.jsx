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
      <h1 className="titulo titulo-hover">Teste</h1>
      <TextSection sectionTitle="Sobre Nós" sectionText={homeTextIntro} />

      <TextSection
        sectionTitle="Título do Lugar 1"
        sectionText={homeTextPlace1}
      />
      <Link className="subtitulo btn__geral" to="/">
        Conheça mais sobre a França!
      </Link>

      <TextSection
        sectionTitle="Título do Lugar 2"
        sectionText={homeTextPlace2}
      />
      <Link className="subtitulo btn__geral" to="/">
        Conheça mais sobre os Estados-Unidos!
      </Link>

      <TextSection
        sectionTitle="Título do Lugar 3"
        sectionText={homeTextPlace3}
      />
      <Link className="subtitulo btn__geral" to="/">
        Conheça mais sobre a Espanha!
      </Link>
    </main>
  );
};

export default Home;
