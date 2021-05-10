<template>
  <div :style="style" ref="animationConatainer"></div>
</template>

<script>
import lottie from "lottie-web";

export default {
  props: {
    options: {
      type: Object,
      required: true,
    },
    height: Number,
    width: Number,
  },

  data() {
    return {
      style: {
        width: this.width ? `${this.width}px` : "100%",
        height: this.height ? `${this.height}px` : "100%",
        overflow: "hidden",
        margin: "0 auto",
      },
    };
  },

  mounted() {
    lottie.loadAnimation({
      container: this.$refs.animationConatainer,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: this.options.animationData,
      rendererSettings: this.options.rendererSettings,
    });
  },
};
</script>
