<template>
  <div class="cadastro">
    <h1 class="titulo-pagina">Cadastro</h1>
    <div class="detalhe-cadastro">
      <div class="detalhe-cadastro-input">
        <h4>Nome:</h4>
        <input
          class="detalhe-cadastro-input-text"
          v-model="nome"
          placeholder="Digite o seu nome"
        />
      </div>
      <div class="detalhe-cadastro-input">
        <h4>E-mail:</h4>
        <input
          class="detalhe-cadastro-input-text"
          v-model="email"
          placeholder="Digite o seu e-mail"
        />
      </div>
      <div class="detalhe-cadastro-input">
        <h4>Senha:</h4>
        <input
          type="password"
          v-model="senha"
          class="detalhe-cadastro-input-text"
          placeholder="Digite a sua senha"
        />
      </div>
      <div class="detalhe-cadastro-botao">
        <button class="botao-cadastro" v-on:click="cadastrar">Cadastrar</button>
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
      nome: "",
      email: "",
      senha: "",
      token: "",
      rotaSucesso: "",
    };
  },
  methods: {
    cadastrar: function () {
      if (!this.nome) {
        alert("Digite seu nome");
        return;
      }
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
        nome: this.nome,
      };
      axios.post("http://localhost:8096/cadastro", body).then(
        (response) => this.salvarToken(response),
        (error) => alert(error)
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
.cadastro {
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

.detalhe-cadastro {
  background-color: #ffffffff;
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 5px 20px 5px 20px;
  border-radius: 10px;
}

.detalhe-cadastro-input {
  margin: 20px;
  margin-bottom: 30px;
}

.detalhe-cadastro-input-text {
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

.detalhe-cadastro-botao {
  margin: 30px;
}

.botao-cadastro {
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
