import imagemLogo from "../img/imagem-logo.png";
import { LuShoppingCart, LuUserRound, LuAlignJustify } from "react-icons/lu";
import "./Navbar.css";
import { useState } from "react";

function Navbar(){
    
    const [menuAberto, setMenuAberto] = useState(false);
    const rolarPara = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth"
        })
    }
    return(
        <>
        <header>
            <nav>
                <div className="logo">
                    <img src={imagemLogo} alt="logo" className="imagem-logo" />
                <h1>NO<span>VA</span></h1>
                </div>
                <ul className={`menu ${menuAberto ? "aberto" : ""}`}>
                    <li onClick={() =>
                        {rolarPara("hero");
                        setMenuAberto(false)}}>
                        Produto
                    </li>
                    <li onClick={() => 
                        {rolarPara("detalhes");
                        setMenuAberto(false)
                        }}>
                        Recursos
                    </li>
                    <li onClick={() => 
                        {rolarPara("modelos");
                        setMenuAberto(false)
                        }}>
                        Modelos
                    </li>
                    <li onClick={() => 
                        {rolarPara("feedback");
                        setMenuAberto(false)
                        }}>
                        FAQ
                    </li>
                </ul>
                <div className="buttons-nav">
                <div className="icons">
                    <LuShoppingCart />
                    <LuUserRound />
                </div>
                <button className="menu-toggle"
                onClick={() => setMenuAberto(!menuAberto)}
                aria-label="Abrir menu"
                >
                    <LuAlignJustify />
                </button>
                </div>
            </nav>
        </header>
        
        </>
    )
}
export default Navbar