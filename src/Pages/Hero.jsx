import smartwatch from "../img/hero-img.png";
import smartwatchLado from "../img/imagem1.png"
import smartwatchFundo from "../img/hero-img2.png";
import smartwatchEsquerdo from "../img/lado-esquerdo.png";
import item1 from "../img/item1.png";
import item2 from "../img/item2.png";
import item3 from "../img/item3.png";
import item4 from "../img/item4.png";
import item5 from "../img/item5.png";
import {LuArrowRight} from "react-icons/lu";
import "./Hero.css"
import { useLayoutEffect, useState } from "react";
function Hero(){

    const [imagemSelecionada, setImagemSelecionada] = useState(smartwatch);
    const [classeImagem, setClasseImagem] = useState("");
    
    const avisoDemostração = () =>{
        alert(
            "Esta página foi desenvolvida como uma demonstração de interface e experiência do produto." +
            "As funcionalidades, integrações e recursos apresentados podem ser personalizados de acordo com as necessidades do contratante." +
            "Interessado neste projeto? Entre em contato."
        )
    }
    return(
        <>
        <section  className="hero" id="hero">
            <div className="hero-container">
            <div className="hero-sloga">
                <ul>
                    <li>Performance</li>
                    <li>Conectividade</li>
                    <li>Durabilidade</li>
                </ul>
                <h2>Tecnologia que acompanha cada momento.</h2>
                <p>Seja durante o treino, no trabalho ou em um momento de descanso,
                    a NOVA se adapta á sua rotina e mantém as informações que importam
                    sempre por perto.
                </p>

                <button 
                className="btn-hero"
                onClick={avisoDemostração}>Comprar <LuArrowRight /></button>
            </div>
            <div className="smartwatch-container">
                <div className="smartwatch-image">
                 <img className="smartwatch frente"
                      src={imagemSelecionada} 
                      alt="Smartwatch frente" />
                </div>
                      <div className="btn-container">
                        <button onClick={() =>
                             setImagemSelecionada(smartwatch)
                            }
                             >
                            1
                        </button>
                    
                        <button onClick={() => 
                            setImagemSelecionada(smartwatchFundo)
                            }
                            >
                            2
                        </button>
                        <button onClick={() => 
                            setImagemSelecionada(smartwatchEsquerdo)
                           }
                            >
                            3
                        </button>
                      </div>
            </div>
            </div>
            <div className="detalhes">
            <div className="componentes">
                <div className="componente">
                    <img src={item1} alt="" />
                    <h2>Tela inteligente</h2>

                    <div className="tooltip">
                        Informações importantes de forma clara e intuitiva.
                    </div>
                </div>
                <div className="componente">
                    <img src={item2} alt="" />
                    <h2>Monitoramento Cardíaco</h2>

                    <div className="tooltip">
                        Acompanhe sua frequência cardíaca durante o dia.
                    </div>
                </div>
                <div className="componente">
                    <img src={item3} alt="" />
                    <h2>Contagem de Passos</h2>

                    <div className="tooltip">
                        Mantenha-se ativo e acompanhe sua evolução.
                    </div>
                </div>
                <div className="componente">
                    <img src={item4} alt="" />
                    <h2>Bateria de longa duração</h2>

                    <div className="tooltip">
                       Criado para acompanhar sua rotina.
                    </div>
                </div>
                <div className="componente">
                    <img src={item5} alt="" />
                    <h2>Notificações inteligentes</h2>

                    <div className="tooltip">
                         Mensagens, chamadas e alertas direto no seu pulso.
                    </div>
                </div>
            </div>
        </div>
        </section>
        
        
        </>
    )
}
export default Hero