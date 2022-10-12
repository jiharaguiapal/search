<template>
     <v-app id="simple-search">
          <v-main>
               <nuxt/>
          </v-main>
          <Footer/>
     </v-app>
</template>

<script>
import Footer from '@/components/Footer';

export default {
     name: 'defaultTemplate',
     components: {
          Footer
     }
}
</script>