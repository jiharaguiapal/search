<template>
  <v-card class="Search" width="100%" outlined>
    <v-card-title class="primary white--text"> Search Inventory </v-card-title>
    <v-card-text>
      <div>
        <v-select
          v-model="brand"
          label="Brands"
          :items="brands"
          item-text="brand"
          return-object
          multiple
          persistent-hint
          chips
        />
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
import { mapState, mapGetters } from "vuex";

export default {
  name: "Search",
  props: {
    result: {
      type: String,
    },
  },
  data() {
    return {
      brand: null,
      sizesArr: [],
    };
  },

  computed: {
    ...mapState(["brandState"]),
    brands() {
      return this.brandState;
    },
    ...mapGetters({
      brandFiltered: "allBrand",
    }),
  },

  methods: {
    search() {
      this.$store.commit("brand", this.brand);
      this.getSizes();
      //  this.$store.commit("brand", this.brand);
      this.$router.push({ path: "/search-results" });
    },
    getSizes() {
      let sizes = [];
      for (let index = 0; index < this.brandFiltered.length; index++) {
        const element = this.brand[index];
        if (!sizes.includes(element.size)) {
          sizes.push(element.size);
        }
      }
      this.$store.commit("setSizes", sizes);
    },
  },
};
</script>
