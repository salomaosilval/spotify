import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";

import "./styles.scss";

export const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="footerLinksContainer">
          <div>
            <img
              src="https://res.cloudinary.com/dv61ldehl/image/upload/v1683135021/Spotify_Logo_RGB_White_wpsxgs.png"
              alt="Logotipo do Spotify"
              className="footerLogo"
              onClick={() => window.open("https://open.spotify.com/", "_blank")}
            />
          </div>
          <div className="footerLinks">
            <ul>
              <li>Empresa</li>
              <li>Sobre</li>
              <li>Empregos</li>
              <li>For The Record</li>
            </ul>
            <ul>
              <li>Comunidades</li>
              <li>Para artistas</li>
              <li>Desenvolvedores</li>
              <li>Publicidade</li>
              <li>Investidores</li>
              <li>Fornecedores</li>
            </ul>
            <ul>
              <li>Links Úteis</li>
              <li>Suporte</li>
              <li>Player da Web</li>
              <li>Aplicativo móvel grátis</li>
            </ul>
          </div>
          <div className="socialContainer">
            <img
              src="https://res.cloudinary.com/dv61ldehl/image/upload/v1681501309/1161953_instagram_icon_qt9cqi.png"
              alt="Instagram Logotipo"
              className="socialImage"
              onClick={() => window.open("https://www.instagram.com/spotifybrasil/", "_blank")}
            />
            <img
              src="https://res.cloudinary.com/dv61ldehl/image/upload/v1681501309/104501_twitter_bird_icon_uirxug.png"
              alt="Twitter Logotipo"
              className="socialImage"
              onClick={() => window.open("https://twitter.com/SpotifyBrasil", "_blank")}
            />
            <img
              src="https://res.cloudinary.com/dv61ldehl/image/upload/v1681501309/104498_facebook_icon_ux34p5.png"
              alt="Facebook Logotipo"
              className="socialImage"
              onClick={() => window.open("https://www.facebook.com/SpotifyBrasil/", "_blank")}
            />
          </div>
        </div>
        <div className="legalInfos">
          <ul>
            <li>Legal</li>
            <li>Central de privacidade</li>
            <li>Política de privacidade</li>
            <li>Cookies</li>
            <li>Sobre anúncios</li>
          </ul>
          <div>
            <div className="subsectionInfo">
              <BiWorld />
              <span>Brasil (Português)</span>
            </div>
            <div className="subsectionInfo">
              <AiOutlineCopyrightCircle />
              <span>2023 Spotify AB</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
