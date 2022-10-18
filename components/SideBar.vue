<template>
  <v-navigation-drawer class="SideBar" app clipped permanent>
    <Search />

    <div class="mt-8 px-2">
      Filter Results
      <v-select
        v-model="selectedSize"
        label="Sizes"
        :items="sizeList"
        item-text="size"
        item-value="id"
        multiple
        chips
      />
    </div>
    <v-card-actions>
      <v-row class="pb-8 px-6" justify="end">
        <v-btn @click="getSelected" color="primary">Search</v-btn>
      </v-row>
    </v-card-actions>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapState } from "vuex";

import Search from "@/components/Search";

export default {
  name: "SideBar",
  components: {
    Search,
  },

  data() {
    return {
      selectedSize: null,
    };
  },

  computed: {
    ...mapGetters({
      brand: "allBrand",
    }),
    ...mapState({ sizeList: "sizes" }),
  },
  methods: {
    getSelected() {
      let filteredBySize = [];
      for (let index = 0; index < this.brand.length; index++) {
        const element = this.brand[index];
        if (this.selectedSize.includes(element.size)) {
          filteredBySize.push(element);
        }
      }
      this.$store.commit("brand", filteredBySize);
    },
    getFilteredBrand() {
      let selectedBrand = this.brand;
      return selectedBrand;
    },
  },
};
</script>
