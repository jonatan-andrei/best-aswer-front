<template>
  <div class="cadastro">
    <h1 class="titulo-pagina">Cadastro</h1>
    <div class="detalhe-cadastro">
      <div class="detalhe-cadastro-input">
        <label for="nome">Nome:</label>
        <input
          id="nome"
          class="detalhe-cadastro-input-text"
          v-model="nome"
          placeholder="Digite o seu nome"
        />
      </div>
      <div class="detalhe-cadastro-input">
        <label for="email">E-mail:</label>
        <input
          id="email"
          class="detalhe-cadastro-input-text"
          v-model="email"
          placeholder="Digite o seu e-mail"
        />
      </div>
      <div class="detalhe-cadastro-input">
        <label for="senha">Senha:</label>
        <input
          id="senha"
          type="password"
          class="detalhe-cadastro-input-text"
          v-model="senha"
          placeholder="Digite a sua senha"
        />
      </div>
      <div class="detalhe-cadastro-botao">
        <button class="botao-cadastro" @click="cadastrar">Cadastrar</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Cadastro",
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
      if (!this.nome || !this.email || !this.senha) {
        alert("Preencha todos os campos");
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

.detalhe-cadastro {
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 10px;
}

.detalhe-cadastro-input {
  margin-bottom: 20px;
}

.detalhe-cadastro-input label {
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
  color: #555;
}

.detalhe-cadastro-input-text {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

.detalhe-cadastro-botao {
  margin-top: 20px;
}

.botao-cadastro {
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

.botao-cadastro:hover {
  background-color: #5ca85c;
}
</style>
