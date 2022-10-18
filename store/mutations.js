export default {
  brand(state, brand) {
    state.brand = brand;
    // console.log("brand mut", brand)
  },
  setSizes(state, size) {
    state.sizes = size;
    console.log("brand size", size);
  },
  filtered(state, filtered) {
    state.filteredState = filtered;
    // console.log("brand mut", filtered)
  },
};
