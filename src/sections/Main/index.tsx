import "./styles.scss";

export const Main = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="imageContainer">
          <img src="https://www-growth.scdn.co/static/download/laptop.svg" alt="Laptop" className="laptop" />
        </div>
        <div className="downloadContainer">
          <h1>Baixe o Spotify</h1>
          <p>Escute milhões de músicas e podcasts no seu dispositivo.</p>
          <button type="button">Baixar</button>
        </div>
      </div>
    </>
  );
};
