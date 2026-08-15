import imagemPrice from "../img/imagem-price.png"
import "./Price.css";

function Price(){

    const avisoDemostração = () =>{
        alert(
            "Esta página foi desenvolvida como uma demonstração de interface e experiência do produto." +
            "As funcionalidades, integrações e recursos apresentados podem ser personalizados de acordo com as necessidades do contratante." +
            "Interessado neste projeto? Entre em contato."
        )
    }
    return(
        <>
         <section className="price-section">
            <div className="imagem-price">
                <img src={imagemPrice} alt="" />
            </div>
            <div className="price-info">
            <h2 className="price-title">
                smartwatch NOVA
            </h2>
            <span className="price-subtitle">
                A partir de
            </span>

            <h1 className="price">
                R$ 499,90
            </h1>

            <p className="installments">
                ou 12x de R$: 41,66 sem juros
            </p>

            <div className="benefits">
                <div>
                    🚚
                    Frete grátis
                </div>
                <div>
                    ✅ 
                    Garantia de 12 meses
                </div>
                <div>
                    📦
                    Entrega rápida
                </div>

                <button onClick={avisoDemostração}>
                    Comprar Agora
                </button>
            </div>
            </div>
         </section>
        
        </>
    )
}

export default Price;