<template>
  <li :key="resposta.id">
    <p class="resposta-info">
      Respondido por {{ resposta.nomeUsuario }} em {{ resposta.data }}
    </p>

    <h3>{{ resposta.conteudo }}</h3>
  </li>
</template>

<script>
export default {
  name: "CardResposta",
  props: {
    resposta: Object,
  },
};
</script>

<style scoped>
li {
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 10px 0;
  padding: 10px;
  border-radius: 8px;
}

.resposta-info {
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
}

h3 {
  font-size: 16px;
  color: #333;
  margin-top: 0;
}

</style>
