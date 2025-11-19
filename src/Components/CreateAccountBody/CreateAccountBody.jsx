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
              
            </div>
        </section>
    </>
  )
}

export default CreateAccountBody
