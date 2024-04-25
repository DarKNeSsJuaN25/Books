import React from "react";
import '../styles/libro.css'
import { RiStarSFill } from "react-icons/ri";

const Libro = (props) => {
    return (
        <section className="libro">
            <h2>{props.nombre}</h2>
            <div className="bigcontainer">
                <div className={props.orientacion}>
                    <img src={require(`../images/${props.url}`)} alt="22-11-63"/>
                </div>
                <div className="secondcontainer">
                    <p>Personajes Favoritos: {props.personajes}</p>
                    <p>Frase Favorita: {props.frases}</p>
                    <p>Duración: {props.duracion}</p>
                    <p>Páginas: {props.paginas}</p>
                    <div className="estrellas">
                        <p>Estrellas:</p>
                        {Array.from({ length: props.estrellas }).map((_, index) => (
                            <RiStarSFill key={index} color="red" size="3em" id="estrella"/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}   

export default Libro;
