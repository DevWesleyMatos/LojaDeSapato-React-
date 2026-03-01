import "./LoginBody.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginBody() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!mail || !password) {
      setLoading(false);
      return setError("Preencha email e senha");
    }

    try {
      const response = await fetch("http://localhost:3300/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mail, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setLoading(false);
        return setError("Email ou senha inválidos");
      }

      localStorage.setItem("user", JSON.stringify(data));
      navigate("/myInformation");

    } catch (err) {
      setError("Erro interno do servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Acesse sua conta</h1>

        <p className="login-create-text">
          Não tem uma conta?
          <span
            className="login-create-link"
            onClick={() => navigate("/createAccount")}
          >
            Criar conta
          </span>
        </p>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email *</label>
            <input
              type="text"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Senha *</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Carregando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}