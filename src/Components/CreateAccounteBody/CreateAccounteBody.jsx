import Input from '../Input/Input'
import './CreateAccounteBody.css'

function CreateAccounteBody() {
    return (
        <>
            <section id='create-account-Body'>
                <div id='create-account-h1'>
                    <h1>Criar Conta</h1>
                </div>
                <div id='create-account-informations'>
                    <h4>Informações Pessoais</h4>
                    <hr />

                    <Input
                        label="Nome Completo *"
                        type="text"
                        placeholder="Insira seu nome"
                    />
                    <Input
                        label="CPF *"
                        type="text"
                        placeholder="Insira seu CPF"
                    />
                    <Input
                        label="E-mail *"
                        type="email"
                        placeholder="Insira seu email"
                    />
                    <Input
                        label="Celular *"
                        type="text"
                        placeholder="Insira seu celular"
                    />
                </div>
                <div id='create-account-informations'>
                    <h4>Informações de Entrega</h4>
                    <hr />

                    <Input
                        label="Endereço *"
                        type="text"
                        placeholder="Insira seu endereço"
                    />
                    <Input
                        label="Bairro *"
                        type="text"
                        placeholder="Insira seu bairro"
                    />
                    <Input
                        label="Cidade *"
                        type="text"
                        placeholder="Insira sua cidade"
                    />
                    <Input
                        label="CEP *"
                        type="text"
                        placeholder="Insira seu CEP"
                    />
                    <Input
                        label="Complemento *"
                        type="text"
                        placeholder="Insira complemento"
                    />
                </div>
                <div id='create-account-label'>
                    <label id='label'>
                        <input type="checkbox" />
                        Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência dos envios pode variar de acordo com a interação do cliente.
                    </label>
                </div>
                <div id='create-account-button'>
                    <button id='button'>
                        Criar Conta
                    </button>
                </div>
            </section>
        </>
    )
}
export default CreateAccounteBody