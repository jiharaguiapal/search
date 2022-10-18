<template>
  <v-app id="simple-search">
    <Header />
    <v-main>
      <nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header.vue";

export default {
  name: "defaultTemplate",
  components: {
    Footer,
    Header,
  },
};
</script>
