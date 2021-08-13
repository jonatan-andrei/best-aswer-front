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
          />
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
          <button class="botao-perguntar" v-on:click="perguntar">
            Perguntar
          </button>
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
      getToken() {
        return localStorage.getItem("jwtToken") || "";
      },
      titulo: "",
      descricao: "",
      categoria: "",
      token: "",
    };
  },
  methods: {
    perguntar: function () {
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
      axios.post("http://localhost:8096/pergunta", body, config).then(
        (response) => this.redirecionarUsuario(response),
        (error) => alert(error)
      );
    },
    redirecionarUsuario(response) {
      this.$router.push("/pergunta/" + response.data);
    },
  },
};
</script>

<style scoped>
.perguntar {
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

.detalhe-pergunta {
  background-color: #ffffffff;
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 5px 20px 5px 20px;
  border-radius: 10px;
}

.detalhe-pergunta-input {
  margin: 20px;
  margin-bottom: 30px;
}

.detalhe-pergunta-input-titulo {
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

.detalhe-pergunta-input-descricao {
  width: 98%;
  min-height: 100px;
  font-size: 16px;
  font-size: max(16px, 1em);
  font-family: inherit;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #ccc;
}

.detalhe-pergunta-input-select {
  width: 100%;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  font-size: max(16px, 1em);
  font-family: inherit;
  background-color: #fff;
  border-radius: 10px;
}

.detalhe-pergunta-botao {
  margin: 30px;
}

.botao-perguntar {
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

.pergunta-usuario-deslogado {
  margin: 50px;
  text-align: center;
  font-size: 28px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #3f51b5;
}
</style>
