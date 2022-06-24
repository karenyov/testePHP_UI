import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import MarcaListView from '../views/marca/MarcaListView.vue'
import MarcaNewView from '../views/marca/MarcaNewView.vue'
import MarcaEditView from '../views/marca/MarcaEditView.vue'
import MarcaInfoView from '../views/marca/MarcaInfoView.vue'

import EletrodomesticoListView from '../views/eletrodomestico/EletrodomesticoListView.vue'
import EletrodomesticoNewView from '../views/eletrodomestico/EletrodomesticoNewView.vue'
import EletrodomesticoEditView from '../views/eletrodomestico/EletrodomesticoEditView.vue'
import EletrodomesticoInfoView from '../views/eletrodomestico/EletrodomesticoInfoView.vue'

import PageNotFoundView from '../views/PageNotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/marca',
    name: 'MarcaList',
    component: MarcaListView
  },
  {
    path: '/marca/add',
    name: 'MarcaNew',
    component: MarcaNewView
  },
  {
    path: '/marca/edit/:id',
    name: 'MarcaEdit',
    component: MarcaEditView
  },
  {
    path: '/marca/info/:id',
    name: 'MarcaInfo',
    component: MarcaInfoView
  },
  {
    path: '/eletrodomestico',
    name: 'EletrodomesticoList',
    component: EletrodomesticoListView
  },
  {
    path: '/eletrodomestico/add',
    name: 'eletrodomesticoNew',
    component: EletrodomesticoNewView
  },
  {
    path: '/eletrodomestico/edit/:id',
    name: 'eletrodomesticoEdit',
    component: EletrodomesticoEditView
  },
  {
    path: '/eletrodomestico/info/:id',
    name: 'eletrodomesticoInfo',
    component: EletrodomesticoInfoView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFoundView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
