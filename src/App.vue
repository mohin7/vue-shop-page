<template>
  <div id="app">
    <Navbar />
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-8">
          <router-view />
        </div>
        <div class="col-lg-4">
          <Cart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Cart from "@/components/Cart";
export default {
  name: "App",
  components: {
    Navbar,
    Cart
  }
};
</script>
<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.min.css";
</style>
