<template>
  <div class="row">
    <div class="col-lg-4 mb-3" v-for="(item, idx) in getAllProducts" :key="idx">
      <div class="card">
        <router-link :to="{ path: '/details/' + item.id }">
          <img :src="item.photo" class="card-img-top" alt="..." />
        </router-link>
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text">
            Price: <strong>${{ item.price }}</strong>
          </p>
          <a @click="addToCartItem(item)" class="btn btn-primary"
            >Add To Cart</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "products",
  methods: {
    ...mapActions(["fetchAllProducts", "addToCart"]),

    addToCartItem(item) {
      this.addToCart(item);
    }
  },
  computed: {
    ...mapGetters(["getAllProducts"])
  },
  created() {
    this.fetchAllProducts();
  }
};
</script>

<style lang="scss" scoped></style>
