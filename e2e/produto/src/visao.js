import { Produto } from "./produto.js";

export class VisaoProduto {

    registrarAoSalvar = ( evento ) => {
        document.getElementById( 'salvar' ).addEventListener( 'click', evento );
    };

    desregistrarAoSalvar = ( evento ) => {
        document.getElementById( 'salvar' ).removeEventListener( 'click', evento );
    };

    produto() {
        return new Produto(
            Number( document.getElementById( 'id' ).value || 0 ),
            document.getElementById( 'descricao' ).value,
            Number( document.getElementById( 'quantidade' ).value ),
            Number( document.getElementById( 'preco' ).value ),
        );
    }

    mensagem( texto, comErro ) {
        const e = document.getElementById( 'mensagem' );
        e.classList.remove( 'sucesso', 'erro' );
        if ( ! comErro ) {
            e.classList.add( 'sucesso' );
        } else {
            e.classList.add( 'erro' );
        }
        e.innerHTML = texto;
    }

}