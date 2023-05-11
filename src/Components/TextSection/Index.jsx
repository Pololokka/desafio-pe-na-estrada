import "./Styles.css";

const TextSection = ({ sectionTitle, sectionText }) => {
  return (
    <section className="section__container">
      <h2 className="subtitulo subtitulo-hover">{sectionTitle}</h2>
      {sectionText?.map((element, index) => {
        return (
          <p className="texto" key={index}>
            {element}
          </p>
        );
      })}
    </section>
  );
};

export default TextSection;
