<template>
  <div>
    <div class="pergunta-dados" v-if="$root.shared.nomeUsuario">
      <h1 class="titulo-pergunta">{{ pergunta.titulo }}</h1>
      <p class="detalhe-pergunta">
        {{ pergunta.descricao }} <br /><br />
        Data: {{ pergunta.data }} - Categoria: {{ pergunta.descricaoCategoria }}
      </p>
      <h2 class="quantidade-respostas" v-if="pergunta.quantidadeRespostas === 1">
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
        <button class="botao-responder" @click="responder">Responder</button>
      </div>
    </div>
    <div class="pergunta-usuario-deslogado" v-else>
      Faça login ou cadastre-se para continuar
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardResposta from "@/components/CardResposta.vue";

export default {
  name: "PerguntaDetalhe",
  data() {
    return {
      nome: "",
      email: "",
      senha: "",
      token: "",
      rotaSucesso: "",
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
    this.atualizarDados();
  },
  methods: {
    responder() {
      if (this.resposta) {
        const body = {
          idPergunta: this.id,
          conteudo: this.resposta,
        };
        const config = {
          headers: { Authorization: `${this.getToken()}` },
        };
        axios.post("http://localhost:8096/resposta", body, config).then(() => {
          this.atualizarDados();
          this.resposta = "";
        });
      } else {
        alert("Digite sua resposta");
      }
    },
    atualizarDados() {
      const config = {
        headers: { Authorization: `${this.getToken()}` },
      };

      axios.get("http://localhost:8096/pergunta/" + this.id, config).then((response) => {
        this.pergunta = response.data;
      });
    },
    getToken() {
      return localStorage.getItem("jwtToken") || "";
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
  padding: 20px;
  max-width: 800px;
  margin: 20px auto;
}

.titulo-pergunta {
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
  text-align: left;
  border-radius: 10px;
}

textarea {
  width: 100%;
  min-height: 100px;
  font-size: 16px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.botao-responder {
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

.botao-responder:hover {
  background-color: #5ca85c;
}

.pergunta-usuario-deslogado {
  margin: 20px;
  text-align: center;
  font-size: 18px;
  color: #3f51b5;
}
</style>
