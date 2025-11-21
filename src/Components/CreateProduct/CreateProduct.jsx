import { useState } from "react";
import "./CreateProduct.css";

export default function CreateProduct() {
    const [formData, setFormData] = useState({
        nome: "",
        modelo: "",
        cor: "",
        tamanho: "",
        preco: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const payload = {
            nome: formData.nome,
            modelo: formData.modelo,
            cor: formData.cor,
            tamanho: Number(formData.tamanho),
            preco: Number(formData.preco)
        };

        try {
            const response = await fetch("https://loja-de-sapato-back-java.onrender.com", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payload)
            });

            if (!response.ok) throw new Error("Erro ao salvar");

            alert("Produto cadastrado com sucesso!");

            setFormData({
                nome: "",
                modelo: "",
                cor: "",
                tamanho: "",
                preco: ""
            });

        } catch (error) {
            alert("Erro ao cadastrar produto!");
            console.error(error);
        }
    }

    return (
        <div className="create-container">
            <h1>Cadastrar Novo Produto</h1>

            <form onSubmit={handleSubmit} className="create-form">

                <label>
                    Nome do Produto
                    <input 
                        type="text"
                        name="nome"
                        placeholder="Ex: Tênis Nike Air"
                        value={formData.nome}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Modelo
                    <input 
                        type="text"
                        name="modelo"
                        placeholder="Ex: Air Max 90"
                        value={formData.modelo}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Cor
                    <input 
                        type="text"
                        name="cor"
                        placeholder="Ex: Preto / Branco"
                        value={formData.cor}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Tamanho
                    <input 
                        type="number"
                        name="tamanho"
                        placeholder="Ex: 42"
                        value={formData.tamanho}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Preço
                    <input 
                        type="number"
                        step="0.01"
                        name="preco"
                        placeholder="Ex: 199.90"
                        value={formData.preco}
                        onChange={handleChange}
                    />
                </label>

                <button type="submit" className="btn-save">
                    Salvar Produto
                </button>
            </form>
        </div>
    );
}
