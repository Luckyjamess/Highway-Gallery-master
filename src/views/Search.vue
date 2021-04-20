<template>
  <div id="search">
    <Navbar />
    <TitlePage />
    <Gallery />
  </div>
</template>

<script>
import Gallery from "@/components/Gallery";
import TitlePage from "@/components/TitlePage";
import Navbar from "@/components/Navbar";

export default {
  components: {
    Gallery,
    TitlePage,
    Navbar
  },
};
</script>

<style scoped>

</style>