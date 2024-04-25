import './App.css';
import Main from "./components/main";

function App() {
  return (
    <div className="App">
      <h2>Libros</h2>
      <div className='libros-container'>
      <Main name="Cementerio de Animales" link="/petsemetary" source="semetary.jpg"/>
      <Main name="22-11-63" link="/22-11-63" source="keneddy.jpg"/>
      <Main name="Las Horas Distantes" link="/las-horas-distantes" source="lashorasdistantes.webp"/>
      <Main name="El Codigo Da Vinci" link="/codigo-davinci" source="elcodigodavinci.webp"/>
      <Main name="It (eso)" link="/it" source="it.webp"/>
      <Main name="La Quinta Ola" link="/la-quinta-ola" source="laquintaola.webp"/>
      <Main name="El Mar Infinito" link="/el-mar-infinito" source="elmarinfinito.jpg"/>
      <Main name="La Ultima Estrella" link="/la-ultima-estrella" source="laultimaestrella.webp"/>
      <Main name="Correr o Morir" link="/correr-o-morir" source="correromorir.jpg"/>
      <Main name="Prueba de Fuego" link="/prueba-de-fuego" source="pruebadefuego.jpg"/>
      <Main name="Cura Mortal" link="/cura-mortal" source="curamortal.jpg"/>
      <Main name="Virus Letal" link="/virus-letal" source="virusletal.jpg"/>
      <Main name="Codigo C.R.U.E.L" link="/codigo-cruel" source="codigocruel.webp"/>
      <Main name="Expedientes Secretos" link="/expedientes-secretos" source="expedientessecretos.webp"/>
      </div>
    </div>
  );
}

export default App;
