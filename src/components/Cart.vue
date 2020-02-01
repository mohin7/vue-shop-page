<template>
  <div>
    <ul class="list-group">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <strong>Product title</strong>
        <span class="badge badge-primary badge-pill">Price</span>
      </li>
      <li
        v-for="(item, idx) in getCart"
        :key="idx"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        {{ item.title }}
        <button @click="removeCartItem(idx)" class="btn btn-danger btn-sm">
          x
        </button>
        <span class="badge badge-primary badge-pill">{{ item.price }}</span>
      </li>
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <strong>Total price of {{ getCart.length }} product</strong>
        <span class="badge badge-primary badge-pill">${{ totalPrice }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Cart",
  computed: {
    ...mapGetters(["getCart"]),

    // total Price
    totalPrice() {
      let total = 0;
      this.getCart.forEach(item => {
        total = total + parseFloat(item.price);
      });
      return total.toFixed(2);
    }
  },
  methods: {
    ...mapActions(["removeCart"]),
    removeCartItem(item) {
      return this.removeCart(item);
    }
  }
};
</script>

<style lang="scss" scoped></style>
