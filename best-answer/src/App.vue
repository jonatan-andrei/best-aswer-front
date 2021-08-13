<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><img alt="Best Answer logo" src="./assets/best-answer-logo.png" /></router-link>
      <router-link class="grid-item" to="/">Home</router-link>
      <router-link class="grid-item" to="/perguntar"
        >Fazer uma pergunta</router-link
      >
      <router-link
        class="grid-item"
        v-if="!$root.shared.nomeUsuario"
        to="/login"
        >Login</router-link
      >
      <router-link
        class="grid-item"
        v-if="!$root.shared.nomeUsuario"
        to="/cadastro"
        >Cadastro</router-link
      >
      <div class="grid-item" v-if="$root.shared.nomeUsuario">
        Olá, {{ $root.shared.nomeUsuario }} - <a @click="logout()">Logout</a>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Best Answer",
  created() {
    document.title = "Best Answer";
  },
  methods: {
    logout: function () {
      this.$root.shared.nomeUsuario = null;
      localStorage.removeItem("jwtToken");
    },
  },
};
</script>

<style>
body {
  background-color: #e9f2ef;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
}

#nav .grid-item {
  padding: 20px;
  font-size: 25px;
  text-align: center;
  padding-top: 40px;
  font-weight: bold;
  color: #3f51b5;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #77c06c;
}
</style>
