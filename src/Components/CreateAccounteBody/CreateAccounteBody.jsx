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
                        label="Nome Completo"
                        type="text"
                        placeholder="Insira seu nome"
                    />
                </div>
            </section>
        </>
    )
}
export default CreateAccounteBody