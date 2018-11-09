<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3 >
      <v-card>
        <v-img v-on:click= "getjeans"
          src="https://mitienda.moda/img/categories/78993358966.jpg"
          aspect-ratio="2.4"
        >
        </v-img>
      </v-card>
       <br/>

      <v-card >
        <v-img
          src="https://mitienda.moda/img/categories/83403636854.jpg"
          aspect-ratio="2.4"
        ></v-img>
      </v-card>
       <br/>

      <v-card>
        <v-img
          src="https://mitienda.moda/img/categories/80160456822.jpg"
          aspect-ratio="2.4"
        ></v-img>
      </v-card>
       <br/>

      <v-card>
        <v-img
          src="https://mitienda.moda/img/categories/83403440246.jpg"
          aspect-ratio="2.4"
        ></v-img>
      </v-card>
       <br/>

      <v-card>
        <v-img
          src="https://mitienda.moda/img/categories/83252379766.jpg"
          aspect-ratio="2.4"
        ></v-img>
      </v-card>
       <br/>

      <v-card>
        <v-img
          src="https://mitienda.moda/img/categories/83478380662.jpg"
          aspect-ratio="2.4"
        ></v-img>
      </v-card>
       <br/>

      <v-card>
        <v-img
          src="https://mitienda.moda/img/categories/79978496118.jpg"
          aspect-ratio="2.4"
        ></v-img>
      </v-card>
       <br/>

      <v-card>
        <v-img
          src="https://mitienda.moda/img/categories/83403341942.jpg"
          aspect-ratio="2.4"
        ></v-img>
      </v-card>
       <br/>

      <v-card>
        <v-img
          src="https://mitienda.moda/img/categories/79000338550.jpg"
          aspect-ratio="2.4"
        ></v-img>
      </v-card>
       <br/>

      <v-card>
        <v-img
          src="https://mitienda.moda/img/categories/78993653878.jpg"
          aspect-ratio="2.4"
        ></v-img>
      </v-card>
       <br/>

      <v-card>
        <v-img
          src="https://mitienda.moda/img/categories/78993719414.jpg"
          aspect-ratio="2.4"
        ></v-img>
      </v-card>
       <br/>

      <v-card>
        <v-img
          src="https://mitienda.moda/img/categories/79000404086.jpg"
          aspect-ratio="2.4"
        ></v-img>
      </v-card>
       <br/>
    </v-flex>
    
  </v-layout>
</template>

<script>

import Catalogo from './Catalog';

  export default {
    name: 'Category',
    data: () => ({
     catalogItems: null,
     flag: 0
    }),
    components:{
      'catalog':Catalogo
    },
    methods:{
      
    clickMe() {
      
        fetch("https://octopux.app/api/v1/shopity/collection", {
          body: JSON.stringify({"octopux_token":"f550a68b-21ff-4b33-aa04-bff68023acca","collection_id":"79978496118"}),
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(response => response.json())
        .then((data) => {
          this.catalogItems = data.catalogItems;
          console.log(this.catalogItems);
          //this.$emit('catalogoItems',data.catalogItems);
        })
    },
  
       getjeans() {
         this.flag = 1;

        fetch("https://octopux.app/api/v1/shopity/collection", {
          body: JSON.stringify({"octopux_token":"f550a68b-21ff-4b33-aa04-bff68023acca","collection_id":"79978496118"}),
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(response => response.json())
        .then((data) => {
          this.catalogItems = data.catalogItems;
          //console.log(this.catalogItems);
          this.$emit('catalogoItems',this.catalogItems);
        })
      }
    }
    
    }
</script>