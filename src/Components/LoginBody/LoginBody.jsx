import React from "react";
import "./LoginBody.css";

export default function LoginBody() {
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
            <input type="text" placeholder="Insira seu login ou email" />
          </div>

          <div className="form-group">
            <label>Senha *</label>
            <input type="password" placeholder="Insira sua senha" />
          </div>

          <div className="forgot">
            <a href="#">Esqueci minha senha</a>
          </div>

          <button type="submit" className="btn-primary">
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