<script setup lang="ts">
const props = defineProps<{ count: number }>();
</script>

<template>
  <div class="">
    <h1>Counters {{ count }}</h1>
  </div>
</template>
