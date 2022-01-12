import { VisaoProduto } from "./visao.js";

export class ControladoraProduto {

    constructor() {
        this.visao = new VisaoProduto();
    }

    configurar = () => {
        this.visao.registrarAoSalvar( this.salvar );
    };

    desconfigurar = () => {
        this.visao.desregistrarAoSalvar( this.salvar );
    };

    salvar = ( e ) => {
        e.preventDefault();
        const p = this.visao.produto();
        const erros = p.validar();
        if ( erros.length > 0 ) {
            this.visao.mensagem( erros.join( '<br />' ), true );
            return;
        }
        this.visao.mensagem( 'Sucesso!' );
    };

}