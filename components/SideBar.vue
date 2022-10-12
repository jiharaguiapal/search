<template>
     <v-navigation-drawer class="SideBar" app clipped permanent>
          <Search/>
          
          <div class="mt-8 px-2">
               Filter Results
          </div>
     </v-navigation-drawer>
</template>

<script>
import Search from '@/components/Search';

export default {
     name: 'SideBar',
     components: {
          Search
     }
}
</script>