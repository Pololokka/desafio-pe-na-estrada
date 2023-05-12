import TextSection from "../../Components/TextSection/Index";
import { Link } from "react-router-dom";

const CountryPage = ({ pageName, sectionTitle, sectionText, linkArray }) => {
  document.title = pageName;

  return (
    <main className="main__container">
      <TextSection sectionTitle={sectionTitle} sectionText={sectionText} />
      {linkArray?.map((element, index) => {
        return (
          <Link
            key={index}
            className="subtitulo btn__geral"
            to={element.linkPath}
          >
            {element.linkName}
          </Link>
        );
      })}
    </main>
  );
};

export default CountryPage;
