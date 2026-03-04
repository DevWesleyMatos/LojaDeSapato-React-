import "./MyInformation.css";
import { useEffect, useState } from "react";

const emptyDelivery = {
  address: "",
  neighborhood: "",
  city: "",
  state: "",
  zip_code: ""
};

function MyInformation() {
  const [user, setUser] = useState(null);
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const storedUser = localStorage.getItem("user");
      if (!storedUser) return;

      try {
        const parsedUser = JSON.parse(storedUser);
        const response = await fetch(`http://localhost:3300/api/users/${parsedUser.id}`);
        
        if (!response.ok) throw new Error("Não foi possível carregar os dados.");

        const data = await response.json();
        
        // Garante que delivery nunca seja nulo no estado para evitar erros nos inputs
        setUser({
          ...data,
          delivery: data.delivery || { ...emptyDelivery }
        });
      } catch (err) {
        console.error("Erro ao buscar usuário:", err);
        setFetchError("Erro ao carregar informações.");
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (field, value) => {
    setUser(prev => ({ ...prev, [field]: value }));
  };

  const handleDeliveryChange = (field, value) => {
    setUser(prev => ({
      ...prev,
      delivery: { ...prev.delivery, [field]: value }
    }));
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3300/api/users/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user) // Enviamos o objeto user completo com o delivery atualizado
      });

      if (!response.ok) throw new Error("Erro ao atualizar.");

      const updatedData = await response.json();

      setUser({
        ...updatedData,
        delivery: updatedData.delivery || { ...emptyDelivery }
      });

      setEdit(false);
      alert("Informações atualizadas com sucesso!");
    } catch (error) {
      alert("Erro ao salvar alterações.");
    } finally {
      setLoading(false);
    }
  };

  if (fetchError) return <div className="error-message">{fetchError}</div>;
  if (!user) return <p className="loading">Carregando...</p>;

  // Lógica para verificar se o endereço existe e tem conteúdo real
  const hasAddress = user.delivery && user.delivery.address && user.delivery.address.trim() !== "";

  return (
    <div id="myInformation" className={loading ? "opacity-50" : ""}>
      <header className="info-header">
        <h3>Minhas Informações</h3>
        <button className="edit-btn" onClick={() => setEdit(!edit)}>
          {edit ? "Cancelar" : "Editar Perfil"}
        </button>
      </header>

      <hr />

      <section className="info-section">
        <h2>Dados Pessoais</h2>
        <div className="fields-grid">
          {edit ? (
            <>
              <div className="input-group">
                <label>Nome Completo</label>
                <input value={user.name || ""} onChange={e => handleChange("name", e.target.value)} />
              </div>
              <div className="input-group">
                <label>E-mail</label>
                <input value={user.mail || ""} onChange={e => handleChange("mail", e.target.value)} />
              </div>
              <div className="input-group">
                <label>CPF</label>
                <input value={user.cpf || ""} onChange={e => handleChange("cpf", e.target.value)} />
              </div>
              <div className="input-group">
                <label>Celular</label>
                <input value={user.cellphone || ""} onChange={e => handleChange("cellphone", e.target.value)} />
              </div>
            </>
          ) : (
            <div className="display-data">
              <p><strong>Nome:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.mail}</p>
              <p><strong>CPF:</strong> {user.cpf}</p>
              <p><strong>Celular:</strong> {user.cellphone}</p>
            </div>
          )}
        </div>
      </section>

      <section className="info-section">
        <h2>Endereço de Entrega</h2>
        <div className="fields-grid">
          {edit ? (
            <>
              <input placeholder="CEP" value={user.delivery.zip_code} onChange={e => handleDeliveryChange("zip_code", e.target.value)} />
              <input placeholder="Endereço" value={user.delivery.address} onChange={e => handleDeliveryChange("address", e.target.value)} />
              <input placeholder="Bairro" value={user.delivery.neighborhood} onChange={e => handleDeliveryChange("neighborhood", e.target.value)} />
              <input placeholder="Cidade" value={user.delivery.city} onChange={e => handleDeliveryChange("city", e.target.value)} />
              <input placeholder="Estado" value={user.delivery.state} onChange={e => handleDeliveryChange("state", e.target.value)} />
            </>
          ) : (
            <div className="display-data">
              {hasAddress ? (
                <>
                  <p><strong>Rua:</strong> {user.delivery.address}</p>
                  <p><strong>Bairro:</strong> {user.delivery.neighborhood}</p>
                  <p><strong>Cidade:</strong> {user.delivery.city} - {user.delivery.state}</p>
                  <p><strong>CEP:</strong> {user.delivery.zip_code}</p>
                </>
              ) : (
                <p className="no-data">Nenhum endereço cadastrado.</p>
              )}
            </div>
          )}
        </div>
      </section>

      {edit && (
        <div className="actions">
          <button className="save-btn" onClick={handleUpdate} disabled={loading}>
            {loading ? "Salvando..." : "Salvar Alterações"}
          </button>
        </div>
      )}
    </div>
  );
}

export default MyInformation;