<template>
  <li :key="resposta.id">
    <p>
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
  background-color: #ffffffff;
  border: 1px solid rgba(0, 0, 0, 0.8);
  margin: 10px 0px;
  padding: 5px 20px 5px 20px;
  text-align: left;
}

li a {
  text-decoration: none;
}

li h3 {
  font-size: 15px;
  color: #000000;
}

li p {
  font-size: 15px;
  color: #000000;
}

</style>