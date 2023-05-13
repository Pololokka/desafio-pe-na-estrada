import React from "react";
import { useParams } from "react-router-dom";

import TextSection from "../../Components/TextSection/Index";
import { Link } from "react-router-dom";
import { details } from "../../Data/textDetail";

const CityPage = ({ pageName, sectionTitle, sectionText, pageInfo }) => {
  document.title = pageName;
  const { id } = useParams();
  const teste = details[id];

  console.log(teste);

  return (
    <main className="main__container">
      <p className="texto">isso é : {id}</p>
      <TextSection sectionTitle={sectionTitle} sectionText={sectionText} />
      {teste?.map((element, index) => {
        return (
          <React.Fragment key={index}>
            <TextSection
              sectionTitle={element.sectionTitle}
              sectionText={element.sectionText}
            />
            <Link className="subtitulo btn__geral" to={element.linkPath}>
              {element.linkName}
            </Link>
          </React.Fragment>
        );
      })}
    </main>
  );
};

export default CityPage;
