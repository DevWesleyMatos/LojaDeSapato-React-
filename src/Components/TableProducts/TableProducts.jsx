import { useEffect, useState } from "react";
import "./TableProducts.css";

export default function TableProducts() {

    const [produtos, setProdutos] = useState([]);
    const [editId, setEditId] = useState(null);
    const [editData, setEditData] = useState({
        nome: "",
        modelo: "",
        cor: "",
        tamanho: "",
        preco: ""
    });

    async function carregarProdutos() {
        const response = await fetch("https://loja-de-sapato-back-java.onrender.com");
        const data = await response.json();
        setProdutos(data);
    }

    useEffect(() => {
        carregarProdutos();
    }, []);

    function iniciarEdicao(produto) {
        setEditId(produto.id);
        setEditData({
            nome: produto.nome,
            modelo: produto.modelo,
            cor: produto.cor,
            tamanho: produto.tamanho,
            preco: produto.preco
        });
    }

    async function salvarEdicao(id) {
        await fetch(`https://loja-de-sapato-back-java.onrender.com/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(editData)
        });

        setEditId(null);
        carregarProdutos();
    }

    async function deletarProduto(id) {
        const confirmacao = confirm("Deseja realmente excluir este produto?");
        if (!confirmacao) return;

        await fetch(`https://loja-de-sapato-back-java.onrender.com/${id}`, {
            method: "DELETE"
        });

        carregarProdutos();
    }

    return (
        <div className="table-container">
            <h2>Gerenciar Produtos</h2>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Modelo</th>
                        <th>Cor</th>
                        <th>Tamanho</th>
                        <th>Preço</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {produtos.map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>

                            <td>
                                {editId === p.id ? (
                                    <input
                                        value={editData.nome}
                                        onChange={(e) =>
                                            setEditData({ ...editData, nome: e.target.value })
                                        }
                                    />
                                ) : (
                                    p.nome
                                )}
                            </td>

                            <td>
                                {editId === p.id ? (
                                    <input
                                        value={editData.modelo}
                                        onChange={(e) =>
                                            setEditData({ ...editData, modelo: e.target.value })
                                        }
                                    />
                                ) : (
                                    p.modelo
                                )}
                            </td>

                            <td>
                                {editId === p.id ? (
                                    <input
                                        value={editData.cor}
                                        onChange={(e) =>
                                            setEditData({ ...editData, cor: e.target.value })
                                        }
                                    />
                                ) : (
                                    p.cor
                                )}
                            </td>

                            <td>
                                {editId === p.id ? (
                                    <input
                                        type="number"
                                        value={editData.tamanho}
                                        onChange={(e) =>
                                            setEditData({ ...editData, tamanho: e.target.value })
                                        }
                                    />
                                ) : (
                                    p.tamanho
                                )}
                            </td>

                            <td>
                                {editId === p.id ? (
                                    <input
                                        type="number"
                                        value={editData.preco}
                                        onChange={(e) =>
                                            setEditData({ ...editData, preco: e.target.value })
                                        }
                                    />
                                ) : (
                                    `R$ ${p.preco.toFixed(2)}`
                                )}
                            </td>

                            <td className="actions">
                                {editId === p.id ? (
                                    <>
                                        <button className="save" onClick={() => salvarEdicao(p.id)}>Salvar</button>
                                        <button className="cancel" onClick={() => setEditId(null)}>Cancelar</button>
                                    </>
                                ) : (
                                    <>
                                        <button className="edit" onClick={() => iniciarEdicao(p)}>Editar</button>
                                        <button className="delete" onClick={() => deletarProduto(p.id)}>Excluir</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}
