import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route } from 'wouter';
import Libro from './components/libro';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Router = () => (
  <div>
    <Route path='/' component={App}/>
    <Route path='/22-11-63'>
      {()=>(
        <Libro
            nombre="22/11/63"
            url="221163-1.jpg"
            personajes="Jake Epping/George Amberson, Sadie"
            frases="'El pasado es obstinado.'"
            duracion="07/04/24 - 16/04/24"
            paginas="859"
            orientacion="firstcontainer-v"
          />
      )}
    </Route>
    <Route path='/petsemetary'>
      {()=>(
        <Libro
            nombre="Cementerio de Animales"
            url="petsemetary-1.jpg"
            personajes="Louis, Rachel, Ellen, Jud"
            frases="'El hombre cultiva lo que puede, y lo cuida.'"
            duracion="21/04/24 - 24/04/24"
            paginas="483"
            orientacion="firstcontainer-h"
          />
      )}
    </Route>
    <Route path='/las-horas-distantes'>
      {()=>(
        <Libro
            nombre="Las Horas Distantes"
            url="horasdistantes1.jpg"
            personajes="Percy Blythe, Juniper Blythe, Meredith, Thomas Cavill"
            frases="'Una vida esta comprendida entre dos acontecimientos: la vida y la muerte, y la muerte debe quedar registrada.'"
            orientacion="firstcontainer-h"
            duracion="Agosto 2021 - 05/04/2024"
            paginas="627"
            estrellas="4"
          />
      )}
    </Route>
    <Route path='/codigo-davinci'>
      {()=>(
        <Libro
            nombre="El Codigo Da Vinci"
            url="codigodavinci1.jpg"
            personajes="Robert Langdon, Sophie Neveu"
            frases="'Tu eres el Santo Grial, Sophie.'"
            orientacion="firstcontainer-h"
            duracion="Agosto 2017 - Septiembre 2017"
            paginas="650"
            estrellas="5"
          />
      )}
      </Route>
  </div>
)

root.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>
);

