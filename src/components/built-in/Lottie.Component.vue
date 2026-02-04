<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import lottie from "lottie-web";

const props = defineProps({
  lottieData: {
    type: Object,
    default: () => {},
  },
});

const container = ref(document.createElement("div"));
let anim: any = null;
onMounted(() => {
  anim = lottie.loadAnimation({
    container: container.value,
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData: props.lottieData,
  });
});

onBeforeUnmount(() => {
  anim?.destroy();
});
</script>
<template>
  <div class="w-full h-full flex items-center justify-center">
    <div ref="container" class="lottie-box"></div>
  </div>
</template>
