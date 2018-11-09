import Vue from 'vue'
import Router from 'vue-router'
import PrincipalPage from '@/components/PrincipalPage'
import Category from '@/components/Category'
import Catalog from '@/components/Catalog'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PrincipalPage',
      component: PrincipalPage
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/catalog',
      name: 'Catalog',
      component: Catalog
    }
  ]
})