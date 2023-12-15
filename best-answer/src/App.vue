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
        Olá, {{ $root.shared.nomeUsuario }} - <a @click="logout()">&nbsp;Logout</a>
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
  background-color: #f6f6f6;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content:space-evenly;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

#nav img {
  max-width: 150px;
}

#nav .grid-item {
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #3f51b5;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

#nav .grid-item:hover,
#nav a.router-link-exact-active {
  color: #77c06c;
}

#nav .grid-item:last-child {
  display: flex;
  align-items: center;
}

#nav .grid-item a {
  color: #3f51b5;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

#nav .grid-item a:hover {
  color: #77c06c;
}

#nav .grid-item.logout {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#nav .grid-item.logout a {
  margin-top: 5px;
  color: #3f51b5;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

#nav .grid-item.logout a:hover {
  color: #77c06c;
}


</style>
