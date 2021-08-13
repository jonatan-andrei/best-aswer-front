<template>
  <div>
    <div class="pergunta-dados" v-if="$root.shared.nomeUsuario">
      <h1 class="titulo-pergunta">{{ pergunta.titulo }}</h1>
      <p class="detalhe-pergunta">
        {{ pergunta.descricao }} <br /><br />
        Data: {{ pergunta.data }} - Categoria: {{ pergunta.descricaoCategoria }}
      </p>
      <h2 class="quantidade-respostas" v-if="pergunta.quantidadeRespostas == 1">
        1 resposta
      </h2>
      <h2 class="quantidade-respostas" v-else>
        {{ pergunta.quantidadeRespostas }} respostas
      </h2>
      <ul>
        <CardResposta
          v-for="item in pergunta.respostas"
          :resposta="item"
          :key="item.id"
        />
      </ul>
      <div class="area-resposta" v-if="!pergunta.usuarioLogadoRespondeu">
        <textarea
          rows="4"
          v-model="resposta"
          placeholder="Digite sua resposta aqui"
        ></textarea>
        <button class="botao-responder" v-on:click="responder">
          Responder
        </button>
      </div>
    </div>
    <div class="pergunta-usuario-deslogado" v-else>Faça login ou cadastre-se para continuar</div>
  </div>
</template>

<script>
import axios from "axios";
import CardResposta from "@/components/CardResposta.vue";
export default {
  name: "PerguntaDetalhe",
  data() {
    return {
      getToken() {
        return localStorage.getItem("jwtToken") || "";
      },
      pergunta: {},
      id: null,
      resposta: "",
      respostaPublicada: false,
    };
  },
  components: {
    CardResposta,
  },
  created() {
    this.id = this.$route.params.id;
  },
  mounted() {
    const config = {
      headers: { Authorization: `${this.getToken()}` },
    };

    axios
      .get("http://localhost:8096/pergunta/" + this.id, config)
      .then((response) => (this.pergunta = response.data));
  },
  methods: {
    responder: function () {
      if (this.resposta) {
        const body = {
          idPergunta: this.id,
          conteudo: this.resposta,
        };
        const config = {
          headers: { Authorization: `${this.getToken()}` },
        };
        axios
          .post("http://localhost:8096/resposta", body, config)
          .then(() => this.atualizarDados());
      } else {
        alert('Digite sua resposta')
      }
    },
    atualizarDados() {
      const config = {
        headers: { Authorization: `${this.getToken()}` },
      };

      axios
        .get("http://localhost:8096/pergunta/" + this.id, config)
        .then((response) => (this.pergunta = response.data));
    },
  },
};
</script>

<style scoped>
ul {
  padding: 0;
  list-style-type: none;
}

.pergunta-dados {
  padding: 50px;
  padding-top: 20px;
  max-width: 90%;
  margin: 10px 10px 10px 50px;
}

.titulo-pergunta {
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
  text-align: left;
}

textarea {
  width: 98%;
  min-height: 100px;
  font-size: 16px;
  font-size: max(16px, 1em);
  font-family: inherit;
  padding: 0.25em 0.5em;
  background-color: #fff;
  border-radius: 10px;
}

.botao-responder {
  width: 100%;
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
}

.pergunta-usuario-deslogado {
  margin: 50px;
  text-align: center;
  font-size: 28px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #3f51b5;
}
</style>