<template>
  <div class="login">
    <h1 class="titulo-pagina">Login</h1>
    <div class="detalhe-login">
      <div class="detalhe-login-input">
        <label for="email">E-mail:</label>
        <input
          id="email"
          type="email"
          v-model="email"
          placeholder="Digite o seu e-mail"
          class="detalhe-login-input-text"
        />
      </div>
      <div class="detalhe-login-input">
        <label for="senha">Senha:</label>
        <input
          id="senha"
          type="password"
          v-model="senha"
          placeholder="Digite a sua senha"
          class="detalhe-login-input-text"
        />
      </div>
      <div class="detalhe-login-botao">
        <button class="botao-login" @click="login">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      senha: "",
      token: "",
      rotaSucesso: "",
    };
  },
  methods: {
    login: function () {
      if (!this.email) {
        alert("Digite seu e-mail");
        return;
      }
      if (!this.senha) {
        alert("Digite sua senha");
        return;
      }
      const body = {
        email: this.email,
        senha: this.senha,
      };
      axios.post("http://localhost:8096/login", body).then(
        (response) => this.salvarToken(response),
        () => alert('Senha incorreta')
      );
    },
    salvarToken(response) {
      this.token = response.data.token;
      localStorage.setItem("jwtToken", this.token);
      this.$root.shared.nomeUsuario = response.data.nomeUsuario;
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.login {
  padding: 50px;
  max-width: 400px;
  margin: 20px auto;
}

.titulo-pagina {
  background-color: #3f51b5;
  color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.detalhe-login {
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 10px;
}

.detalhe-login-input {
  margin-bottom: 20px;
}

.detalhe-login-input label {
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
  color: #555;
}

.detalhe-login-input-text {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

.detalhe-login-botao {
  margin-top: 20px;
}

.botao-login {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #77c06c;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.botao-login:hover {
  background-color: #5ca85c;
}
</style>
