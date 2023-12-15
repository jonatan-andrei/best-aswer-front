<template>
  <div class="content">
    <!-- <h1 class="list-title">Últimas Perguntas</h1> -->
    <ul class="question-list">
      <CardPergunta v-for="question in perguntas" :pergunta="question" :key="question.id" />
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

<style scoped>
.content {
  padding: 20px;
  max-width: 90%;
  margin: 0 auto;
}

ul.question-list {
  list-style-type: none;
  padding: 0;
}

.list-title {
  background-color: #3f51b5;
  color: #ffffff;
  border-radius: 8px;
  margin: 10px 0;
  padding: 10px;
  text-align: center;
}

/* Style for CardPergunta component (adjust as needed) */
.question-list {
  display: flex;
  flex-wrap: wrap; 
  justify-content:space-around; 
  
}
</style>
