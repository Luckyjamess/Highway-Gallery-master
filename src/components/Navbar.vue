<template>
  <nav class="navbar navbar-expand-lg navbar-light shadow fixed-top">
    <router-link to="/" class="navbar-brand"
      ><strong>HIGH</strong>WAY</router-link
    >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <!-- <li class="nav-item active" v-if="user ==''">
          <router-link to="/login" class="nav-link">Please Login</router-link>
        </li> -->
        <li class="nav-item active" v-if="user != ''">
          <div class="nav-link">{{ user }}</div>
        </li>
        <li class="nav-item active">
          <router-link to="/photos" class="nav-link">Photo</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Video</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Vector</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      user:'Please Login'
    }
  },
  created() {
    this.user = this.$store.getters.user
    console.log("Create Navbar Page");
    console.log(this.user);
  },
  computed(){
    this.user = this.$store.getters.user
  },
  mounted() {
    // this.user = this.$store.getters.user
    this.user = this.$store.getters.user
  },
};
</script>

<style>
</style>