<template>
  <div>
    <div class="container">
      <div v-if="item" class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img :src="item.photo" class="card-img" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">
                {{ item.description }}
              </p>
              <button class="btn btn-success" @click="addToCartItem(item)">
                Add Item
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2 v-else>Loading</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Details",
  data() {
    return {
      item: null
    };
  },
  computed: {
    ...mapGetters(["getCart"])
  },
  methods: {
    ...mapActions(["fetchAllProducts", "addToCart"]),

    addToCartItem(item) {
      this.addToCart(item);
    },

    fetchItem() {
      var self = this;
      axios
        .get("http://localhost:3000/item/" + this.$route.params.id)
        .then(res => {
          self.item = res.data;
        });
    }
  },
  mounted() {
    this.fetchItem();
  }
};
</script>

<style lang="scss" scoped></style>
