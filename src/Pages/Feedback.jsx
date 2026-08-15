import { useState, useEffect} from "react";
import { LuStar } from "react-icons/lu";
import Avatar from "../img/Avatar.png";
import "./Feedback.css";

function Feedback(){
    
    const [nome, setNome] = useState("");
    const [estrela, setEstrela] = useState(0);
    const [abrirModal, setAbrirModal] = useState(false);
    const [comentario, setComentario] = useState("");
    const [foto, setFoto] = useState("");
    const [feedback, setFeedback] = useState(() => {
        try{
        const dados = localStorage.getItem("feedback");
        return dados ? JSON.parse(dados) : [];
        }catch(error){
             console.error(error);
             return [];
        }
    });
    
    useEffect(() => {
        localStorage.setItem(
            "feedback",
            JSON.stringify(feedback)
        )
    }, [feedback]);
    

    return(
        <>
         <section className="feedback" id="feedback">

            <div className="feedback-header">
                <h2> O que nossos clientes dizem</h2>

                <button onClick={() => setAbrirModal(true)}>
                    Deixar avaliação
                </button>
            </div> 

            <div className="feedback-cards">

                {feedback.map((item, index) => (
                    <div className="card" key={index}>

                        <img src={item.foto || Avatar} alt="" />
                        
                        <div className="card-conteudo">
                        <h3>{item.nome}</h3>

                        <div className="card-estrela">
                            {[...Array(item.estrela)].map((_, i) => (
                                <LuStar key={i}/>
                            ))}
                        </div>
                        <p>{item.comentario}</p>
                        </div>
                    </div>
                ))}
            </div>

         </section>

         {abrirModal && (
            <div className="modal-container">
                <div className="modal">
                    <button className="fechar"
                    onClick={() => setAbrirModal(false)}>
                        X
                    </button>

                    <h2>Deixe sua avaliação</h2>
                   
                    <label>Foto</label>
                    <input
                     type="file"
                     accept="image/*"
                     onChange={(e) => {
                        const file = e.target.files[0];

                        if(!file) return;

                        const reader = new FileReader();

                        reader.onload = () => {
                            setFoto(reader.result);
                        }

                        reader.readAsDataURL(file);
                     }} />
                     <label>Avaliação</label>
                     <button className="estrelas">
                        {[1,2,3,4].map((item) =>(
                            <LuStar
                               key={item}
                               size={30}
                               onClick={() => setEstrela(item)}
                               className={item <= estrela ? "ativa" : ""}
                            />
                        ))}
                     </button>
                     <label>Nome</label>
                     <input 
                     type="text"
                     placeholder="Digite seu nome"
                     value={nome}
                     onChange={(e) => setNome(e.target.value)} />


                    <label>Comentário</label>
                    <textarea 
                        rows="5" 
                        placeholder="Conte como foi a experiência"
                        value={comentario}
                        onChange={(e) => setComentario(e.target.value)}
                    ></textarea>

                    <button 
                    className="btn-enviar"
                    onClick={() => {

                        const novoFeedback = {
                            nome,
                            foto,
                            estrela,
                            comentario
                        }

                        setFeedback([...feedback, novoFeedback]);

                        setComentario("");
                        setFoto("");
                        setComentario("");
                        setEstrela(0)

                        setAbrirModal(false);
                    }}
                    >
                        Enviar Avaliação
                    </button>
                </div>
            </div>
         )}
        </>
    )
}
export default Feedback;