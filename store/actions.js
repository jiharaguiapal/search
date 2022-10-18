export default {
  getBrand() {
    console.log("getBrands action");
    commit("SET_BRAND", res.data);
    return res.data;
  },
};
