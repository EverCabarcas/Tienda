<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
  
     <!-- Menú -->
      <v-list dense>
        
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>local_grocery_store</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Carrito</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>book</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-on:click="catalogo">Catálogo</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>view_list</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-on:click="categoria">Categorias</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>

    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Ever Cabarcas Test</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
        <category v-if="vcategoria == 1"></category>
        <catalog  v-if="vcatalogo == 1"></catalog>
          <!--
          <v-flex text-xs-center>
            <v-tooltip left>
              <v-btn slot="activator" :href="source" icon large target="_blank">
                <v-icon large>code</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <v-btn slot="activator" icon large href="https://codepen.io/johnjleider/pen/rJdVMq" target="_blank">
                <v-icon large>mdi-codepen</v-icon>
              </v-btn>
              <span>Codepen</span>
            </v-tooltip>
          </v-flex>
-->
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import Category from './Category';
import Catalog from './Catalog';
import Vue from 'vue';

  export default {
    name: 'PrincipalPage',
    data: () => ({
      drawer: null,
      vcarrito:0,
      vcatalogo:0,
      vcategoria:0
    }),
    props: {
      source: String
    },
    components:{
         'category':Category,
         'catalog': Catalog

    },
    methods:{
      carrito: function(){
        this.vcarrito = 1;
        this.vcatalogo = 0;
        this.vcategoria = 0;
      },
      catalogo: function(){
        this.vcarrito = 0;
        this.vcatalogo = 1;
        this.vcategoria = 0;
      },
      categoria: function(){
        this.vcarrito = 0;
        this.vcatalogo = 0;
        this.vcategoria = 1;
      }
    
    }
  }
  
  
</script>