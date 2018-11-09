<template>
   <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-carousel v-for="(item,i) in catalog" :key="i">
      <v-carousel-item
        v-for="(item2,j) in item.images"
          :key="j"
          :src="item2"
        > {{i}}
        </v-carousel-item>
        </v-carousel>
        
    </v-flex>
  </v-layout>
   <!--<ul>
    <li  v-for="(item,i) in catalog"
      :key="i">{{item.name}}
      <ul>
        <li  v-for="(item2,i) in item.images"
      :key="i">
            {{item2}}
        </li>
        </ul>  
    </li>
</ul>-->
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
      }
    },
    mounted(){
       this.getjeans();
    }
    /*data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ]
      }
    }*/
    
  }
</script>