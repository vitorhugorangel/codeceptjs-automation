import { ControladoraProduto } from "./controladora.js";

const ctrl = new ControladoraProduto();
window.addEventListener( "load", ctrl.configurar );
window.addEventListener( "unload", ctrl.desconfigurar );
