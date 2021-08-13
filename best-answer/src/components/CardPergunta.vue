<template>
  <li :key="pergunta.id">
    <router-link :to="`/pergunta/${pergunta.id}`">
      <h3>{{ pergunta.titulo }}</h3>
    </router-link>
    <p>
        <span class="quantidade-respostas" v-if="pergunta.quantidadeRespostas == 1">1 resposta</span>
        <span class="quantidade-respostas" v-else>{{ pergunta.quantidadeRespostas}} respostas </span>
        - Data: {{ pergunta.data }} - Categoria: {{ pergunta.descricaoCategoria }} </p>
  </li>
</template>

<script>
export default {
  name: "CardPergunta",
  props: {
    pergunta: Object,
  }
};
</script>

<style scoped>

li {
  background-color: #ffffffff;
  border: 1px solid rgba(0, 0, 0, 0.8);
  margin: 10px;
  padding: 5px 20px 5px 20px;
  text-align: left;
}

li a {
  text-decoration: none;
}

li h3 {
    font-size: 18px;
    color: #3f51b5;
}

li p {
    font-size: 15px;
    color: #3f51b5;
}

.quantidade-respostas {
    font-weight: bold;
}
</style>