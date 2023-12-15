<template>
  <li :key="pergunta.id" class="card-pergunta">
    <router-link :to="`/pergunta/${pergunta.id}`" class="pergunta-link">
      <h3 class="titulo-pergunta">{{ pergunta.titulo }}</h3>
    </router-link>
    <p class="pergunta-info">
      <span v-if="pergunta.quantidadeRespostas === 1" class="quantidade-respostas">1 resposta</span>
      <span v-else class="quantidade-respostas">{{ pergunta.quantidadeRespostas }} respostas</span>
      - Data: {{ pergunta.data }} - Categoria: {{ pergunta.descricaoCategoria }}
    </p>
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
.card-pergunta {
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 10px;
  padding: 15px;
  border-radius: 8px;
  transition: transform 0.2s ease-in-out;
}

.card-pergunta:hover {
  transform: scale(1.02);
}

.pergunta-link {
  text-decoration: none;
}

.titulo-pergunta {
  font-size: 18px;
  color: #3f51b5;
  margin-bottom: 5px;
}

.pergunta-info {
  font-size: 14px;
  color: #555;
}

.quantidade-respostas {
  font-weight: bold;
}
</style>
