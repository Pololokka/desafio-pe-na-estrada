import React from "react";

import TextSection from "../../Components/TextSection/Index";
import { Link } from "react-router-dom";

const CountryPage = ({ pageName, sectionTitle, sectionText, linkArray }) => {
  document.title = pageName;

  return (
    <main className="main__container">
      <TextSection sectionTitle={sectionTitle} sectionText={sectionText} />
      {linkArray?.map((element, index) => {
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

export default CountryPage;
