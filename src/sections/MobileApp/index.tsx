import "./styles.scss";

export const MobileApp = () => {
  return (
    <>
      <div className="mobileContainer">
        <h1>Curta as suas músicas também no seu celular ou tablet.</h1>
        <p>Ouvir música no celular ou tablet é fácil, divertido e grátis.</p>
        <div className="mobileStoreContainer">
          <img
            src="https://www-growth.scdn.co/static/badges/svgs/apple/badge-pt.svg"
            alt="App Store"
            onClick={() =>
              window.open(
                "https://spotify.link/h5TbcGLLkhb?label=sp_cid%3Ab4628698-7361-413c-b3aa-5eb7f37b3389",
                "_blank"
              )
            }
          />
          <img
            src="https://www-growth.scdn.co/static/badges/svgs/google/badge-pt.svg"
            alt="Google Play"
            onClick={() =>
              window.open(
                "https://spotify.link/T1vKH6Kr9ib?label=sp_cid%3Ab4628698-7361-413c-b3aa-5eb7f37b3389",
                "_blank"
              )
            }
          />
          <img
            src="https://www-growth.scdn.co/static/badges/microsoft-windows/pt.png"
            alt="Microsoft"
            onClick={() =>
              window.open(
                "https://www.microsoft.com/store/p/spotify-music/9ncbcszsjrsb?cid=spotifyweb-windows10-store-direct",
                "_blank"
              )
            }
          />
        </div>
      </div>
    </>
  );
};
