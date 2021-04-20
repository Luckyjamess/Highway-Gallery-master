<template>
  <div class="header">
    <video
      :class="videoClass"
      playsinline="playsinline"
      autoplay="autoplay"
      muted="muted"
      loop="loop"
    >
      <source
        src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
        type="video/mp4"
      />
    </video>
    <div class="content-header">
      <div class="font-header">
        <h1>Welcome to</h1>
        <span
          >Over 1.9 million+ high quality stock images, videos and music shared
          by our talented community.</span
        >
      </div>
      <form class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Search images"
          v-model="search"
          lazy
        />
        <div class="input-group-append">
          <button class="btn btn-warning" @click.stop.prevent="submit()">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </form>
      <!-- <a href="#galley"><i class="fas fa-arrow-down btn-custom"></i></a> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      videoClass: "vdoClass",
    };
  },
  methods: {
    submit() {
      if(this.search == ""){
        this.$store.dispatch("getPhoto");
      }else{
        this.$store.dispatch("getSearch", this.search);
      }
      this.$router.push("/photos");
    },
  },
};
</script>

<style>
.vdoClass {
  filter: blur(2px);
}
</style>