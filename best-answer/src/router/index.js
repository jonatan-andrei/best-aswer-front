import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PerguntaDetalhe from '../views/PerguntaDetalhe.vue'
import Login from '../views/Login.vue'
import Cadastro from '../views/Cadastro.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/perguntar',
    name: 'Fazer uma pergunta',
    component: () => import(/* webpackChunkName: "about" */ '../views/FazerPergunta.vue')
  },
  {
    path: '/pergunta/:id',
    name: 'Pergunta',
    component: PerguntaDetalhe
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
