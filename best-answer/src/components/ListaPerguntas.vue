<template>
  <div class="conteudo">
    <h1 class="titulo-lista">Últimas perguntas</h1>
    <ul id="lista-perguntas">
      <CardPergunta v-for="item in perguntas" :pergunta="item" :key="item.id" />
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import CardPergunta from "./CardPergunta.vue";
export default {
  name: "Home",
  data() {
    return {
      perguntas: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:8096/pergunta")
      .then((response) => (this.perguntas = response.data));
  },
  components: {
    CardPergunta,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.conteudo {
  padding: 50px;
  padding-top: 20px;
  max-width: 90%;
}

ul {
  text-align: center;
  list-style-type: none;
}

.titulo-lista {
  background-color: #3f51b5;
  color: #ffffff;
  border-radius: 20px;
  margin: 10px 10px 10px 50px;
  padding: 10px 20px 10px 20px;
  text-align: left;
  max-width: 90%;
}
</style>
