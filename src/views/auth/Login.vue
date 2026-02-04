<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import { UserCircleIcon, ShieldCheckIcon } from "@heroicons/vue/24/solid";
import { useRouter } from "vue-router";
const router = useRouter();
import { ROUTE_NAME } from "@/router/route-name";
import { Input } from "@/components/ui/input";

const authHandle = () => {
  localStorage.clear();
  router.push({ name: ROUTE_NAME.DASHBOARD });
};
</script>

<template>
  <div class="grid gap-4 p-6 rounded-lg shadow-md w-full max-w-md">
    <div class="relative w-full">
      <Input class="py-6 pl-12" placeholder="ឈ្មោះអ្នកប្រើប្រាស់"></Input>
      <UserCircleIcon
        class="w-8 h-8 text-primary absolute left-2 top-1/2 transform -translate-y-1/2"
      ></UserCircleIcon>
    </div>
    <div class="relative w-full">
      <Input class="py-6 pl-12" placeholder="ពាក្យសម្ងាត់"></Input>
      <ShieldCheckIcon
        class="w-8 h-8 text-primary absolute left-2 top-1/2 transform -translate-y-1/2"
      ></ShieldCheckIcon>
    </div>
    <div class="flex w-full justify-between space-x-4 mt-4">
      <Button
        class="flex-1 bg-inherit text-primary hover:bg-transparent border py-5"
        >ចេញពីកម្មវិធី</Button
      >
      <Button class="flex-1 bg-none py-5 border" @click="authHandle"
        >ចូលប្រើប្រាស់</Button
      >
    </div>
    <div class="flex w-full justify-center gap-2 items-center mt-2">
      <p class="text-sm">មិនទាន់មានគណនី?</p>
      <span class="text-primary text-sm cursor-pointer hover:underline"
        >ចុះឈ្មោះ</span
      >
    </div>
  </div>
</template>
