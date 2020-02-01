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
              <h5 class="card-title">{{item.title}}</h5>
              <p class="card-text">
               {{item.description}}
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
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
export default {
  name: "Details",
  data() {
    return {
      item: null
    };
  },
  methods: {
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
    this.fetchItem()
  },
};
</script>

<style lang="scss" scoped></style>
