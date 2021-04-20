<template>
  <div id="home">
    <Navbar />
    <Header />
    <Gallery />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";
export default {
  name: "Home",
  components: {
    Header,
    Gallery,
    Navbar
  },
  created() {
    
    this.user = this.$store.getters.user
  },
  data() {
    return {
      name: "",
      email:"",
      user:""
      
    }
  },
  mounted(){
    // this.user = this.$store.getters.user
    if (this.user == "") {
      window.location = "#/login"
    }
  }
};
</script>

<style>
</style>