<template>
     <v-row class="SearchResultsPage">
          <SideBar/>
          <v-container fluid>
               <div class="pa-4">
                    Showing Results
               </div>
          </v-container>
          
     </v-row>
</template>

<script>
import SideBar from '@/components/SideBar';

export default {
     name: 'SearchResultsPage',
     components: {
          SideBar
     }
}
</script>