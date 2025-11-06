function Banner() {
  return (
    <>
      <section>

        <div>

          <div>
            <h6>MEU CARRINHO</h6>
            <h6>QUANTIDADE</h6>
            <h6>UNITÁRIO</h6>
            <h6>TOTAL</h6>
          </div>

          <div>
            <img src="" alt="" />
            <div>
              <p>Tênis Nike Revolution 6 Next Nature Masculino</p>
              <p>Cor: Vermelho / Branco</p>
              <p>Tamanho: 42</p>
            </div>
            <div>
              <div class="contador">
                <button id="menos">−</button>
                <span id="numero">0</span>
                <button id="mais">+</button>
                <a href="#" id="remover">Remover Ítem</a>
              </div>
            </div>
            <div>
              <p>R$249,00 R$249,00</p>
              <p>R$219,00 R$219,00</p>
            </div>
          </div>

          <div>
            <div>
              <h6>Cupom de desconto</h6>
              <input type="text" placeholder="Insira seu código"/>
              <button>OK</button>
            </div>
            <div>
              <h6>Calcular frete</h6>
              <input type="text" placeholder="Insira seu CEP"/>
              <button>OK</button>
            </div>
          </div>

        </div>

        <div>
          <div>
            <h6>RESUMO</h6>
          </div>
          <div>
            <p>Subtotal: R$219,00</p>
          </div>
          <div>
            <p>Frete: R$0,00</p>
          </div>
          <div>
            <p>Desconto: R$30,00</p>
          </div>
          <div>
            <p>Total: R$189,00</p>
          </div>
          <div>
            <p>ou 10x de 24,90 sem juros</p>
          </div>
        </div>
        <button id="meu-botao">Continuar</button>

      </section>

    </>
  )
}

export default Banner
