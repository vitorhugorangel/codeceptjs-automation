export class Produto {
  constructor(id = 0, descricao = '', quantidade = 1, preco = 1.0) {
    this.id = id
    this.descricao = descricao
    this.quantidade = quantidade
    this.preco = preco
  }

  /**
   * Retorna um array de mensagens de erro. Se tiver vazio, não há erros.
   *
   * @returns {string[]}
   */
  validar() {
    const erros = []

    if (this.descricao.length < 2) {
      erros.push('Descrição deve ter pelo menos 2 caracteres.')
    }

    if (this.quantidade <= 0) {
      erros.push('Quantidade deve ser um número positivo.')
    }

    if (this.preco <= 0) {
      erros.push('Preço deve ser um número positivo.')
    }

    if (this.preco > 5000.0) {
      erros.push('Preço não deve ser superior à R$5000,00.')
    }

    if (this.quantidade > 1000) {
      erros.push('Quantidade não deve ser superior a 1000.')
    }

    // ADICIONAR OUTRAS VALIDAÇÕES

    return erros
  }
}
