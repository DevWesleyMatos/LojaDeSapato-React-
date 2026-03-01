import "./MyInformation.css";
import { useEffect, useState } from "react";

function MyInformation() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <p>Usuário não encontrado</p>;
  }

  return (
    <div id="myInformation">
      <h3>My Information</h3>

      <div>
        <h2>Informações pessoais</h2>
        <p><strong>Nome:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.mail}</p>
        <p><strong>CPF:</strong> {user.cpf}</p>
        <p><strong>Celular:</strong> {user.cellphone}</p>
        <p><strong>Delivery ID:</strong> {user.deliveryId}</p>
      </div>
    </div>
  );
}

export default MyInformation;