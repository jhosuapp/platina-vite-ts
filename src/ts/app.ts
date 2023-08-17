//Import estilos
import "../sass/main.scss";
//Import componentes
import {loadExampleHandlers} from "./components/example";

/*
*Ejecutamos las funciones cuando el sitio haya cargado
*/
window.addEventListener('load', ()=>{
    loadExampleHandlers();
});