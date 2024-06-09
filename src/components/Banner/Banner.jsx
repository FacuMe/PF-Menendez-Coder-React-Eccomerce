import "./banner.css";

const Banner = () => {
  return (
    <div className="banner d-flex justify-content-center align-items-center">
      <div className="img-banner d-flex justify-content-center align-items-center"></div>
      <div className="banner-overlay"></div>
      <h1 className="title">Booklify Libros</h1>
    </div>
  );
};
export default Banner;
