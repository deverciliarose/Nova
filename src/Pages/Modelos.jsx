import modelo1 from "../img/Modelo1.png";
import modelo2 from "../img/Modelo2.png";
import modelo3 from "../img/Modelo3.png";
import modelo4 from "../img/Modelo4.png";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";
import "./Modelos.css";


function Modelos(){

const el = useRef();
const tl = useRef();

useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() =>{
        tl.current = gsap.timeline({
            scrollTrigger:{
                trigger: ".modelos",
                scrub: true,
                start: "top 850px",
                end: "bottom 950px"
            }
        })
        .fromTo("#modelo-1", {
            opacity:0,
            y: 160
        },{
            opacity:1,
            y:0
        })
        .fromTo("#modelo-2", {
            opacity:0,
            y: 160
        },{
            opacity:1,
            y:0
        })
        .fromTo("#modelo-3", {
            opacity:0,
            y: 160
        },{
            opacity:1,
            y:0
        })
        .fromTo("#modelo-4", {
            opacity:0,
            y: 160
        },{
            opacity:1,
            y:0
        })
    })
}, el)
   
    return(
        <>
        <section className="modelos" id="modelos" ref={el}>
            <div className="modelo" id="modelo-1">
                <img src={modelo1} alt="modelo verde" />
                <h3> Forest Green</h3>
                <p>Estilo Marcante</p>
            </div>
            <div className="modelo" id="modelo-2">
                <img src={modelo2} alt="modelo branco" />
                <h3>Polar White</h3>
                <p>Visual Minimalista</p>
            </div>
            <div className="modelo" id="modelo-3">
                <img src={modelo3} alt="modelo azul" />
                <h3>Ocean Blue</h3>
                <p>Sofisticação moderna</p>
            </div>
            <div className="modelo" id="modelo-4">
                <img src={modelo4} alt="modelo preto" />
                <h3> Midnight </h3>
                <p>Elegância atemporal</p>
            </div>
        </section>
        </>
    )
}

export default Modelos;