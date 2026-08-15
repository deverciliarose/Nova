import imagemLogo from "../img/imagem-logo.png";
import {
  LuGithub,
  LuLinkedin,
  LuInstagram,
  LuArrowUp
} from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

function Footer(){

    return(
        <>
         <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <div className="logo-footer">
                        <img src={imagemLogo} alt="" />
                        <h1>NO<span>VA</span></h1>
                    </div>
                    <div className="social">
                        <a href="https://github.com/deverciliarose" target="_blank">
                            <LuGithub/>
                        </a>
                        <a href="https://www.linkedin.com/in/erc%C3%ADlia-rose-santos-5bb773263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                            <LuLinkedin/>
                        </a>
                        <a href="https://www.instagram.com/zoomtechnology1?igsh=cHZmMnExZzFncm8w" target="_blank">
                            <LuInstagram/>
                        </a>
                        <a href="https://wa.me/5599984753745" target="_blank">
                            <FaWhatsapp/>
                        </a>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="links">
                    <h3>Produtos</h3>
                    <a href="#">Recursos</a>
                    <a href="#">Modelos</a>
                    <a href="#">Avaliações</a>
                    <a href="#">Comprar</a>
                    </div>

                    <div className="links">
                        <h3>Zoom Technology</h3>
                        <a href="#">Sobre</a>
                        <a href="#">Portfólio</a>
                        <a href="#">Projetos</a>
                        <a href="#">Contato</a>
                    </div>

                     <div className="footer-contact">
                    <h3>Contato</h3>
                    <p>
                        Zoomtechonology@gmail.com
                    </p>
                    <p>
                        (99) 98475-3745
                    </p>
                    <p>
                        Brasil
                    </p>
                    <button onClick={() => {
                        window.open(
                            "https://wa.me/5599984753745",
                            "_blank"
                        )
                    }}>
                        Solicitar Projeto
                    </button>
                </div>
                </div>

               
                <div className="footer-bottom">
                    <p>
                        &copy; 2026 Zoom Technology. Todos os direitos reservados.
                    </p>
                </div>
            </div>
         </footer>
        
        </>
    )
}
export default Footer;