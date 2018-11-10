<template>
   <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card v-for="(item,i) in catalog" :key="i">
        
         <v-carousel>
            <v-carousel-item
              v-for="(item2,j) in item.images"
                :key="j"
                :src="item2"
              >
              </v-carousel-item>
              </v-carousel>
              <div layout="row" layout-align="center center">
              <div>
                <v-btn outline color="indigo">AGREGAR
                  <v-icon right dark>local_grocery_store</v-icon>
                </v-btn>
              </div>
               <div>
                <h1>${{item.saleprice}}</h1>
              </div>
              </div>
             
              <br/>
      </v-card>
      
     
        
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'Catalog',
     data: () => ({
     catalog: null
    }),
    methods:{
      getitems: function(catalog){
        this.catalog = catalog;
      },
      getjeans() {
         

        fetch("https://octopux.app/api/v1/shopity/collection", {
          body: JSON.stringify({"octopux_token":"f550a68b-21ff-4b33-aa04-bff68023acca","collection_id":"79978496118"}),
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(response => response.json())
        .then((data) => {
          this.catalog = data.catalogItems;
          console.log(this.catalog);
          
        })
      },
      update: function(evento){
            this.catalog = evento;
      }
    },
    mounted(){

       this.getjeans();
    }
    
  }
</script>