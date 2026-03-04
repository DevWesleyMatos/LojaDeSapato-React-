import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Input from '../Input/Input'
import './CreateAccountBody.css'

function CreateAccountBody() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    mail: "",
    cellphone: "",
    password: "",
    address: "",
    neighborhood: "",
    city: "",
    zip_code: "",
    state: ""
  })

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {

      if (
        !formData.name ||
        !formData.mail ||
        !formData.password ||
        !formData.cpf
      ) {
        setLoading(false)
        return setError("Preencha os campos obrigatórios")
      }

      let deliveryId = null

      const hasAddress =
        formData.address &&
        formData.neighborhood &&
        formData.city &&
        formData.zip_code &&
        formData.state

      if (hasAddress) {
        const deliveryResponse = await fetch("http://localhost:3300/api/delivery-address", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            address: formData.address,
            neighborhood: formData.neighborhood,
            city: formData.city,
            zip_code: formData.zip_code,
            state: formData.state
          })
        })

        const deliveryData = await deliveryResponse.json()

        if (!deliveryResponse.ok) {
          setLoading(false)
          return setError("Erro ao criar endereço")
        }

        deliveryId = deliveryData.id
      }

      const userResponse = await fetch("http://localhost:3300/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          mail: formData.mail,
          password: formData.password,
          cpf: formData.cpf,
          cellphone: formData.cellphone,
          deliveryId: deliveryId
        })
      })

      const userData = await userResponse.json()

      if (!userResponse.ok) {
        setLoading(false)
        return setError(userData.error || "Erro ao criar usuário")
      }

      navigate("/login")

    } catch (err) {
      setError("Erro interno do servidor")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id='create-account-body'>
      <form onSubmit={handleSubmit}>

        <div id='create-account-h1'>
          <h1>Criar Conta</h1>
        </div>

        <div id='create-account-body-informations'>
          <h4>Informações Pessoais</h4>
          <hr />

          <Input
            label="Nome Completo *"
            type="text"
            placeholder="Insira seu nome"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />

          <Input
            label="CPF *"
            type="text"
            placeholder="Insira seu CPF"
            value={formData.cpf}
            onChange={(e) => handleChange("cpf", e.target.value)}
          />

          <Input
            label="Email *"
            type="email"
            placeholder="Insira seu email"
            value={formData.mail}
            onChange={(e) => handleChange("mail", e.target.value)}
          />

          <Input
            label="Celular"
            type="text"
            placeholder="Insira seu celular"
            value={formData.cellphone}
            onChange={(e) => handleChange("cellphone", e.target.value)}
          />

          <Input
            label="Senha *"
            type="password"
            placeholder="Crie uma senha"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </div>

        <div id='create-account-body-delivery'>
          <h4>Endereço (Opcional)</h4>
          <hr />

          <Input
            label="Endereço"
            type="text"
            placeholder="Insira seu endereço"
            value={formData.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />

          <Input
            label="Bairro"
            type="text"
            placeholder="Insira seu bairro"
            value={formData.neighborhood}
            onChange={(e) => handleChange("neighborhood", e.target.value)}
          />

          <Input
            label="Cidade"
            type="text"
            placeholder="Insira sua cidade"
            value={formData.city}
            onChange={(e) => handleChange("city", e.target.value)}
          />

          <Input
            label="Estado"
            type="text"
            placeholder="Insira seu estado"
            value={formData.state}
            onChange={(e) => handleChange("state", e.target.value)}
          />

          <Input
            label="CEP"
            type="text"
            placeholder="Insira seu CEP"
            value={formData.zip_code}
            onChange={(e) => handleChange("zip_code", e.target.value)}
          />
        </div>

        {error && <p className="create-account-error">{error}</p>}

        <div id='create-account-body-button-div'>
          <button
            type="submit"
            className='create-account-body-button'
            disabled={loading}
          >
            {loading ? "Criando..." : "Criar Conta"}
          </button>
        </div>

      </form>
    </section>
  )
}

export default CreateAccountBody