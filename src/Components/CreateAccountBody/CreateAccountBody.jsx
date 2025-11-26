import Input from '../Input/Input'
import './CreateAccountBody.css'

function CreateAccountBody() {
  return (
    <>
        <section id='create-account-body'>
            <div id='create-account-h1'>
                <h1>Criar Conta</h1>
            </div>
            <div id='create-account-body-informations'>
                <h4>Informações Pessoais</h4>
                <hr />

                <Input
                  label="Nome Completo *"
                  type="text"
                  placeholder="Insira seu nome*"
                />

                <Input
                  label="CPF *"
                  type="text"
                  placeholder="Insira seu CPF *"
                />

                <Input
                  label="Email *"
                  type="email"
                  placeholder="Insira seu email *"
                />
                <Input
                  label="Celular *"
                  type="number"
                  placeholder="Insira seu Celular *"
                />
              
            </div>
            <div id='create-account-body-delivery'>
                <h4>Informações Pessoais</h4>
                <hr />

                <Input
                  label="Endereço *"
                  type="text"
                  placeholder="Insira seu Endereço*"
                />

                <Input
                  label="Bairro *"
                  type="text"
                  placeholder="Insira seu Bairro *"
                />

                <Input
                  label="Cidade *"
                  type="text"
                  placeholder="Insira sua Cidade *"
                />
                <Input
                  label="Cep *"
                  type="number"
                  placeholder="Insira seu Cep *"
                />
              
            </div>
            <div id='create-account-body-terms'>
              <input type="checkbox"/>
              <p>Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.</p>
            </div>
            <div id='create-account-body-button-div'>
              <button className='create-account-body-button'>Criar Conta</button>
            </div>
        </section>
    </>
  )
}

export default CreateAccountBody
