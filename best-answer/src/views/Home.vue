<template>
  <div class="home">
    <ListaPerguntas />
  </div>
</template>

<script>
// @ is an alias to /src
import ListaPerguntas from '@/components/ListaPerguntas.vue'

export default {
  name: 'Home',
  components: {
    ListaPerguntas
  }
}
</script>
