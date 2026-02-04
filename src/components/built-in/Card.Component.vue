<script setup lang="ts">
import { ref } from "vue";
export interface CardProps {
  icon: object;
  title: string;
  content: string;
}
///square-arrow-out-up-right
import { SquareArrowOutUpRight } from "lucide-vue-next";
const props = defineProps<CardProps>();
</script>
<template>
  <div class="flex flex-col gap-10 p-3 rounded-xl border border-primary">
    <div class="flex justify-between">
      <div class="">
        <component :is="icon" class="text-gray-500 w-12 h-12" />
      </div>
      <SquareArrowOutUpRight class="text-gray-800"></SquareArrowOutUpRight>
    </div>
    <div class="flex flex-col gap-1">
      <div class="font-bold text-gray-600">{{ props.title }}</div>
      <div class="font-bold text-primary text-2xl">{{ props.content }}</div>
    </div>
  </div>
</template>
