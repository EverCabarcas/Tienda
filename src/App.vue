<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Category from '@/components/Category';
import Catalog from '@/components/Catalog';
import PrincipalPage from '@/components/PrincipalPage'

export default {
  name: 'app',
  components:{
         'principalpage':PrincipalPage,
         'catalog':Catalog,
         'category':Category
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>