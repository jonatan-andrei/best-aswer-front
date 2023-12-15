<template>
  <div class="perguntar">
    <div v-if="$root.shared.nomeUsuario">
      <h1 class="titulo-pagina">Fazer pergunta</h1>
      <div class="detalhe-pergunta">
        <div class="detalhe-pergunta-input">
          <h4>Título da pergunta:</h4>
          <input
            class="detalhe-pergunta-input-titulo"
            v-model="titulo"
            placeholder="Digite o título da sua pergunta"
          />
        </div>
        <div class="detalhe-pergunta-input">
          <h4>Descrição da pergunta:</h4>
          <textarea
            rows="4"
            class="detalhe-pergunta-input-descricao"
            v-model="descricao"
            placeholder="Descreva sua pergunta"
          ></textarea>
        </div>
        <div class="detalhe-pergunta-input">
          <h4>Categoria da pergunta:</h4>
          <select class="detalhe-pergunta-input-select" v-model="categoria">
            <option value="1">Conselhos</option>
            <option value="2">Cultura</option>
            <option value="3">Curiosidades</option>
            <option value="4">Educação</option>
            <option value="5">Entretenimento</option>
            <option value="6">Esportes</option>
            <option value="7">Religião</option>
            <option value="8">Saúde</option>
            <option value="9">Tecnologia</option>
          </select>
        </div>
        <div class="detalhe-pergunta-botao">
          <button class="botao-perguntar" @click="perguntar">Perguntar</button>
        </div>
      </div>
    </div>
    <div v-else class="pergunta-usuario-deslogado">
      Faça login ou cadastre-se para continuar
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Perguntar",
  data() {
    return {
      titulo: "",
      descricao: "",
      categoria: "",
    };
  },
  methods: {
    perguntar() {
      if (!this.titulo) {
        alert("Digite o título da sua pergunta");
        return;
      }
      if (!this.categoria) {
        alert("Selecione a categoria da sua pergunta");
        return;
      }

      const config = {
        headers: { Authorization: `${this.getToken()}` },
      };
      const body = {
        titulo: this.titulo,
        descricao: this.descricao,
        idCategoria: this.categoria,
      };
      axios.post("http://localhost:8096/pergunta", body, config)
        .then((response) => this.redirecionarUsuario(response))
        .catch((error) => alert(error));
    },
    redirecionarUsuario(response) {
      this.$router.push("/pergunta/" + response.data);
    },
    getToken() {
      return localStorage.getItem("jwtToken") || "";
    },
  },
};
</script>

<style scoped>
.perguntar {
  padding: 20px;
  max-width: 800px;
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

.detalhe-pergunta {
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 15px;
  border-radius: 10px;
}

.detalhe-pergunta-input {
  margin: 20px 0;
}

.detalhe-pergunta-input-titulo,
.detalhe-pergunta-input-descricao,
.detalhe-pergunta-input-select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  font-family: inherit;
  background-color: #fff;
  margin-bottom: 10px;
}

.detalhe-pergunta-botao {
  margin-top: 20px;
}

.botao-perguntar {
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

.botao-perguntar:hover {
  background-color: #5ca85c;
}

.pergunta-usuario-deslogado {
  margin: 20px;
  text-align: center;
  font-size: 18px;
  color: #3f51b5;
}
</style>
