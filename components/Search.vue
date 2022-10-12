<template>
     <v-card class="Search" width="100%" outlined>
          <v-card-title class="primary white--text">
               Search Inventory
          </v-card-title>

          <v-card-text>
               <div>
                    <v-select v-model="brand" label="Brand" :items="brands"/>
               </div>
          </v-card-text>

          <v-card-actions>
               <v-row class="pb-8 px-6" justify="end">
                    <v-btn @click="search" color="primary">Search</v-btn>
               </v-row>
          </v-card-actions>
     </v-card>
</template>

<script>
export default {
     name: 'Search',

     data() {
          return {
               brand: null
          }
     },

     computed: {
          brands() {
               return ['All'];
          }
     },

     methods: {
          search() {
               this.$router.push({ path: '/search-results' });
          }
     }
}
</script>