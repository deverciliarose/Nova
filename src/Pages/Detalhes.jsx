import imagemDetalhe from "../img/imagem-detalhe.png";
import iconeTela from "../img/icone-tela.png";
import iconePulseira from "../img/icone-pulseira.png";
import iconeSensores from "../img/icone-sensores.png";
import iconeCoroa from "../img/icone-coroa.png";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef} from "react";
import "./Detalhes.css";

function Detalhes(){

    const detalhesRef = useRef(null);
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const mm = gsap.matchMedia();

        mm.add("(min-width: 769px)", () =>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: detalhesRef.current,
                start: "top center",
                end: "+=400",
                scrub: 1
            }
        });
        tl.to(".tela", {
            x:-80,
            y:-150,
            opacity:1,
            scale: 1,
            duration:1
        })
        tl.to(".pulseira",{
            x:480,
            y:-40,
            opacity:1,
            scale:1,
            duration:1
        }, "<")
        tl.to(".coroa", {
            x:-80,
            y:200,
            opacity:1,
            scale:1,
            duration:1
        }, "<")
        tl.to(".sensores",{
            x:400,
            y:350,
            opacity:1,
            scale:1,
            duration:1
        });
        });
        mm.add("(max-width:768px)", () =>{
            const tl = gsap.timeline({
                scrollTrigger:{
                    trigger: detalhesRef.current,
                    start: "top center",
                    end: "+=400",
                    scrub:1
                }
            });
            tl.to(".tela",{
                x:-30,
                y:-80,
                opacity:1,
                scale:0.7,
                duration:1
            })
            tl.to(".pulseira",{
                x:250,
                y:-20,
                opacity:1,
                scale:0.7,
                duration:1
            }, "<")
            tl.to(".coroa",{
                x:-30,
                y:100,
                opacity:1,
                scale:0.7,
                duration:1
            }, "<")
            tl.to(".sensores", {
                x:200,
                y:200,
                opacity:1,
                scale:0.7,
                duration:1
            })
        });

        return () => mm.revert();

    }, [])
    return(
        <>
         <section className="detalhes-container" id="detalhes" ref={detalhesRef}>
              <div className="component-descrição">
                <span>DESIGN PREMIUM</span>
                <h2>
                    Tecnologia e elegância em perfeita harmonia.
                </h2>
                <p>
                    A NOVA combina uma estética moderna com recurso inteligentes <br />
                    para criar uma experiências simples, elegante e intuitiva.
                </p>
              </div>
                <img src={imagemDetalhe} alt="smartwatch" className="watch" />
              <div className="component tela">
                    <img src={iconeTela} alt="tela" />
                    <h3>Tela Amoled</h3>
                    <div className="linha"></div>
              </div>
              <div className="component  pulseira">
                <img src={iconePulseira} alt="Pulseira" />
                <h3>Pulseira Premium</h3>
                <div className="linha"></div>
              </div>
              <div className="component sensores">
                <img src={iconeSensores} alt="Sensores" />
                <h3>Sensores</h3>
                <div className="linha"></div>
              </div>
              <div className="component coroa">
                <img src={iconeCoroa} alt="Coroa" />
                <h3>Coroa digital</h3>
                <div className="linha"></div>
              </div>
              
         </section>
        
        </>
    )
}
export default Detalhes