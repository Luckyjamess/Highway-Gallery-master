<template>
  <div class="custom-container">
    <div class="title-header">
      <div class="custom-header">
        <h1>Photo</h1>
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Search images"
            v-model="search"
            @input="Keyword"
          />
          <div class="input-group-append">
            <button class="btn btn-warning">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <nav aria-label="breadcrumb bg-light">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            <router-link to="/photos">Photo</router-link>
          </li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },

  methods: {
    Keyword() {
      if (this.search == "") {
        this.$store.dispatch("getPhoto");
      } else {
        this.$store.dispatch("getSearch", this.search);
      }
    },
  },
};
</script>

<style scoped>
.title-header {
  margin-top: 120px;
}
.custom-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.custom-container {
  width: 80vw;
  margin: 0 auto;
}
</style>