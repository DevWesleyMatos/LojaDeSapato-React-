import "./LoginBody.css";
import { useState,useEffect } from "react";

export default function LoginBody() {
    const [mail,setMail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)

const handleLogin = async (e) => {
  e.preventDefault(); // 🔥 impede o reload da página
  setError("");
  setLoading(true);

  if (!password || !mail) {
    setLoading(false);
    return setError("Preencha email e senha");
  }

  try {
    const response = await fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mail, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      setLoading(false);
      return setError(data.error || "Erro ao fazer login");
    }

    console.log("Login efetuado com sucesso", data);
    window.location.href = "/";

  } catch (err) {
    console.error(err);
    setError("Erro interno do servidor");
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Acesse sua conta</h1>
        <p className="subtitle">
          Novo cliente? Então registre-se <a href="#">aqui</a>.
        </p>

        <form>
          <div className="form-group">
            <label>Login *</label>
            <input 
            type="text" 
            placeholder="Insira seu login ou email"
            value={mail}
            onChange={(e) => setMail(e.target.value)} />
          </div>

          <div className="form-group">
            <label>Senha *</label>
            <input 
            type="password" 
            placeholder="Insira sua senha" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="forgot">
            <a href="#">Esqueci minha senha</a>
          </div>

          <button type="submit" className="btn-primary" onClick={handleLogin}>
            Acessar Conta
          </button>

          <div className="divider">Ou faça login com</div>

          <div className="social-login">
            <button type="button" className="btn-social google">G</button>
            <button type="button" className="btn-social facebook">f</button>
          </div>
        </form>
      </div>

      <div className="login-image">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
          alt="Tênis"
        />
      </div>
    </div>
  );
}