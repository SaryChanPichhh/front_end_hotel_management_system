<script setup lang="ts">
import Input from "@/components/ui/input/Input.vue";
import Button from "@/components/ui/button/Button.vue";
import { Spinner } from "@/components/ui/spinner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AdjustmentsHorizontalIcon } from "@heroicons/vue/24/solid";
import Label from "@/components/ui/label/Label.vue";
</script>
<template>
  <div class="w-full h-full p-3">
    <div class="flex gap-2">
      <div class="flex-1">
        <div class="flex gap-2">
          <Input
            class="flex-1 border-primary focus:border-inherit focus:border-0"
            placeholder="ស្វែងរក​ (ឈ្មោះ លេខកូដ ឬលេខទូរសព្ទ)"
          ></Input
          ><AdjustmentsHorizontalIcon
            class="w-10 h-10 text-primary cursor-pointer"
          ></AdjustmentsHorizontalIcon>
        </div>
      </div>
      <div class="flex-1"></div>
      <Dialog class="flex">
        <DialogTrigger class="px-6 bg-primary text-white rounded-sm"
          >បង្កើតអ្នកផ្គត់ផ្គង់</DialogTrigger
        >
        <DialogContent class="max-w-3xl">
          <DialogHeader>
            <DialogTitle class="text-center mb-10"
              >បង្កើតអ្នកផ្គត់ផ្គង់</DialogTitle
            >
            <DialogDescription>
              <div class="space-y-4">
                <Label>ឈ្មោះអ្នកផ្គត់ផ្គង់</Label> <Input></Input>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  </div>
</template>
