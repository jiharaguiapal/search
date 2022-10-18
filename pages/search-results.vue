<template>
  <v-row class="SearchResultsPage">
    <SideBar />
    <v-container fluid>
      <div class="d-flex flex-wrap">
        <v-card
          v-for="(tire, idx) in brand"
          :key="idx"
          class="mx-auto my-6"
          max-width="374"
        >
          <v-img height="" :src="require('assets/' + tire.img)"></v-img>

          <v-card-text>
            <v-list-item>
              <v-list-item-content>
                <div class="text-overline mb-0">
                  {{ "Price" }}
                </div>

                <v-chip class="text-h6" color="primary" label>
                  {{ formatAmount(tire.price) }}
                </v-chip>
                <div class="text-overline mb-0">
                  {{ "Brand" }}
                </div>
                <v-list-item-title class="text-h6 mb-4">
                  {{ tire.brand }}
                </v-list-item-title>
                <div class="text-overline mb-0">
                  {{ "Name" }}
                </div>

                <v-list-item-title class="text-h6 mb-4">
                  {{ tire.name }}
                </v-list-item-title>
                <div class="text-overline mb-0">
                  {{ "Size" }}
                </div>

                <v-list-item-title class="text-h6 mb-4">
                  {{ tire.size }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-text>
        </v-card>
      </div>
    </v-container>
  </v-row>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import SideBar from "@/components/SideBar";

export default {
  name: "SearchResultsPage",
  components: {
    SideBar,
  },
  data() {
    return {};
  },

  computed: {
    ...mapState(["brand"]),
  },

  methods: {
    formatAmount(amount) {
      return new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "Php",
      }).format(amount);
    },
  },
};
</script>
