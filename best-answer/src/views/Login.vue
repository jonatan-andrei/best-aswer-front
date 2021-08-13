<template>
  <div class="login">
    <h1 class="titulo-pagina">Login</h1>
    <div class="detalhe-login">
      <div class="detalhe-login-input">
        <h4>E-mail:</h4>
        <input
          class="detalhe-login-input-text"
          v-model="email"
          placeholder="Digite o seu e-mail"
        />
      </div>
      <div class="detalhe-login-input">
        <h4>Senha:</h4>
        <input
          type="password"
          v-model="senha"
          class="detalhe-login-input-text"
          placeholder="Digite a sua senha"
        />
      </div>
      <div class="detalhe-login-botao">
        <button class="botao-login" v-on:click="login">Login</button>
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
        alert("Digite seu email");
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
  padding: 100px;
  padding-top: 20px;
  max-width: 80%;
  margin: 10px 10px 10px 50px;
}

.titulo-pagina {
  background-color: #3f51b5;
  color: #ffffff;
  border-radius: 20px;
  padding: 10px 20px 10px 20px;
  text-align: center;
  font-size: 24px;
}

.detalhe-login {
  background-color: #ffffffff;
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 5px 20px 5px 20px;
  border-radius: 10px;
}

.detalhe-login-input {
  margin: 20px;
  margin-bottom: 30px;
}

.detalhe-login-input-text {
  width: 100%;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  font-size: max(16px, 1em);
  font-family: inherit;
  padding: 0.25em 0.5em;
  background-color: #fff;
  border-radius: 10px;
}

.detalhe-login-botao {
  margin: 30px;
}

.botao-login {
  width: 30%;
  position: relative;
  display: block;
  height: 36px;
  border-radius: 18px;
  background-color: #77c06c;
  border: solid 1px transparent;
  color: #fff;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  justify-content: center;
  display: block;
  margin: 0 auto;
}
</style>
