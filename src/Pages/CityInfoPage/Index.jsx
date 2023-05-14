import React from "react";
import TextSection from "../../Components/TextSection/Index";
import { Link } from "react-router-dom";

import { info } from "../../Data/textInfo";

import { useParams } from "react-router-dom";

const CityInfoPage = ({ pageName }) => {
  document.title = pageName;
  const { id } = useParams();
  const mapItems = info[id];

  return (
    <main className="main__container">
      {mapItems?.map((element, index) => {
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

export default CityInfoPage;
