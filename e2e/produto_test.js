Feature('Cadastrar um produto no site')

const TELA_INICIAL = 'http://127.0.0.1:5500/e2e/produto/produto.html'
const TAM_MIN_NOME = 2
const CAMPO_DESCRICAO = '#descricao'
const CAMPO_QUANTIDADE = '#quantidade'
const CAMPO_PRECO = '#preco'
const BOTAO_SALVAR = '#salvar'

Before(({ I }) => {
  I.amOnPage(TELA_INICIAL)
})

Scenario(
  'Cadastro de produto com menos que a quantidade mínima de carcteres',
  ({ I }) => {
    I.fillField(CAMPO_DESCRICAO, 'B')
    I.fillField(CAMPO_QUANTIDADE, '2')
    I.fillField(CAMPO_PRECO, '100')
    I.click(BOTAO_SALVAR)
    I.see('Descrição deve ter pelo menos 2 caracteres')
  },
)

Scenario('Tabuleiro inicia vazio', ({ I }) => {
  I.amOnPage('http://127.0.0.1:5500/e2e/produto/produto.html')
  I.fillField(CAMPO_DESCRICAO, 'Boneco')
  I.fillField(CAMPO_QUANTIDADE, '0')
  I.fillField(CAMPO_PRECO, '100')
  I.click(BOTAO_SALVAR)
  I.see('Quantidade deve ser um número positivo.')
})

Scenario('Tabuleiro inicia vazio', ({ I }) => {
  I.fillField(CAMPO_DESCRICAO, 'Boneco')
  I.fillField(CAMPO_QUANTIDADE, '1001')
  I.fillField(CAMPO_PRECO, '100')
  I.click(BOTAO_SALVAR)
  I.see('Quantidade não deve ser superior a 1000.')
})

Scenario('Tabuleiro inicia vazio', ({ I }) => {
  I.fillField(CAMPO_DESCRICAO, 'Boneco')
  I.fillField(CAMPO_QUANTIDADE, '1001')
  I.fillField(CAMPO_PRECO, '0.00')
  I.click(BOTAO_SALVAR)
  I.see('Preço deve ser um número positivo.')
})

Scenario('Tabuleiro inicia vazio', ({ I }) => {
  I.fillField(CAMPO_DESCRICAO, 'Boneco')
  I.fillField(CAMPO_QUANTIDADE, '1001')
  I.fillField(CAMPO_PRECO, '5500.00')
  I.click(BOTAO_SALVAR)
  I.see('Preço não deve ser superior à R$5000,00.')
})
