import "./styles.scss";

export const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <img
          src="https://res.cloudinary.com/dv61ldehl/image/upload/v1683135021/Spotify_Logo_RGB_White_wpsxgs.png"
          alt="Logotipo do Spotify"
          className="headerLogo"
          onClick={() => window.open("https://open.spotify.com/", "_blank")}
        />
        <div className="headerLinks">
          <a href="">Premium</a>
          <a href="">Suporte</a>
          <a href="">Baixar</a>
          <div className="separator"></div>
          <a href="">Entrar</a>
          <a href="">Inscrever-se</a>
        </div>
      </div>
    </>
  );
};
