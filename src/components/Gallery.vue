<template>
  <div class="custom-container" id="gellery">
    <stack
      :column-min-width="300"
      :gutter-width="15"
      :gutter-height="15"
      monitor-images-loaded
      class="stack"
    >
      <stack-item
        v-for="(image, i) in allImage"
        :key="i"
        style="transition: transform 300ms"
      >
        <img
          :class="styleClass"
          :src="image.urls.small"
          :alt="image.alt_description"
        />
        <div class="img-footer">
          <img class="avatar" :src="image.user.profile_image.large" alt="" />
          <div class="info">
            <span>{{ image.user.name }}</span>
            <span v-if="image.user.for_hire"
              >Avaliable for hire <i class="fas fa-check-circle"></i
            ></span>
          </div>
        </div>
      </stack-item>
    </stack>
  </div>
</template>

<script>
import { Stack, StackItem } from "vue-stack-grid";
export default {
  data() {
    return {
      styleClass: "classStack",
    };
  },
  computed: {
    allImage() {
      if (this.$store.getters.searchImage == null) {
        return this.$store.getters.allImage;
      } else {
        return this.$store.getters.searchImage.results;
      }
    },
  },
  mounted() {
    this.$store.dispatch("getPhoto");
  },

  components: {
    Stack,
    StackItem,
  },
};
</script>

<style scoped>
.classStack:hover {
  opacity: 0.5;
  filter: blur(2px);
}

.custom-container {
  width: 70vw;
  margin: 0 auto;
  padding-top: 20px;
}

.img-footer {
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 15px 8px;
  width: 100%;
  display: flex;
  align-items: center;
}

.info {
  display: flex;
  flex-direction: column;
  padding: 0 5px;
  font-weight: bold;
}
.info span:nth-child(1) {
  font-size: 17px;
  color: #2d3436;
}

.info span:nth-child(2) {
  font-size: 13px;
  color: #74b9ff;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 25px;
}
</style>