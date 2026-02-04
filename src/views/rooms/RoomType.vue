<script setup lang="ts">
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowDownTrayIcon } from "@heroicons/vue/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";
import { Plus } from "lucide-vue-next";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-vue-next";
import { cn, formatDateTime } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useRoomTypeStore } from "@/stores/roomTypeStore";
import { ref, computed, onMounted } from "vue";
import type { RoomTypeModel } from "@/models/roomType_model";

const roomTypeStore = useRoomTypeStore();

onMounted(() => {
  roomTypeStore.initData();
});
</script>

<template>
  <div class="w-full h-full flex flex-col pt-3 px-3">
    <div class="flex w-full h-12 gap-1 items-center">
      <div class="relative flex-grow">
        <MagnifyingGlassIcon class="absolute left-2.5 top-2.5 h-5 w-5" />
        <input class="rounded-md w-[50vw] p-2 pl-10 border border-gray-300" placeholder="ស្វែងរកប្រភេទបន្ទប់" />
      </div>
      <Dialog>
        <form>
          <DialogTrigger as-child>
            <button variant="outline"
              class="rounded-md flex-none p-2 px-2 border border-gray-300 flex items-center gap-2 justify-center">
              <Plus class="w-5 h-5" />
              បង្កើតប្រភេទបន្ទប់
            </button>
          </DialogTrigger>
          <DialogContent class="sm:max-w-[700px] !animate-none">
            <DialogHeader>
              <DialogTitle>បង្កើតប្រភេទបន្ទប់</DialogTitle>
            </DialogHeader>
            <div class="flex gap-8">
              <div class="grid gap-3">
                <div class="flex gap-1">
                  <Label for="name-1" class="w-[130px]">លេខកូដ៖</Label>
                  <input class="w-full p-1.5 border border-primary rounded-sm" id="code" name="code"
                    :default-value="roomTypeStore.generateAutoCode()" readonly @mousedown.prevent />
                </div>
                <div class="flex gap-1">
                  <Label for="name-1" class="w-[130px]">បរិយាយ៖</Label>
                  <input class="w-full p-1.5 border border-primary rounded-sm" id="name-1" name="name"
                    default-value="Pedro Duarte" />
                </div>
                <div class="flex gap-1">
                  <Label for="name-1" class="w-[130px]">ឈ្មោះហូតែល៖</Label>
                  <input class="w-full p-2 border border-primary rounded-sm" id="name-1" name="name"
                    default-value="Pedro Duarte" />
                </div>
                <div class="flex gap-1">
                  <Label for="name-1" class="w-[130px]">ឈ្មោះហូតែល៖</Label>
                  <input class="w-full p-2 border border-primary rounded-sm" id="name-1" name="name"
                    default-value="Pedro Duarte" />
                </div>
                <div class="flex gap-1">
                  <Label for="name-1" class="w-[130px]">ឈ្មោះហូតែល៖</Label>
                  <input class="w-full p-2 border border-primary rounded-sm" id="name-1" name="name"
                    default-value="Pedro Duarte" />
                </div>
              </div>
              <div class="grid gap-3">
                <div class="flex gap-1">
                  <Label for="name-1" class="w-[130px]">ប្រភេទបន្ទប់៖</Label><input
                    class="w-full p-1.5 border border-primary rounded-sm" id="name-1" name="name"
                    default-value="Pedro Duarte" />
                </div>
                <div class="flex gap-1">
                  <Label for="name-1" class="w-[130px]">ឈ្មោះហូតែល៖</Label>
                  <input class="w-full p-2 border border-primary rounded-sm" id="name-1" name="name"
                    default-value="Pedro Duarte" />
                </div>
                <div class="flex gap-1">
                  <Label for="name-1" class="w-[130px]">ឈ្មោះហូតែល៖</Label>
                  <input class="w-full p-2 border border-primary rounded-sm" id="name-1" name="name"
                    default-value="Pedro Duarte" />
                </div>
                <div class="flex gap-1">
                  <Label for="name-1" class="w-[130px]">ឈ្មោះហូតែល៖</Label>
                  <input class="w-full p-2 border border-primary rounded-sm" id="name-1" name="name"
                    default-value="Pedro Duarte" />
                </div>
                <div class="flex gap-1">
                  <Label for="name-1" class="w-[130px]">ឈ្មោះហូតែល៖</Label>
                  <input class="w-full p-2 border border-primary rounded-sm" id="name-1" name="name"
                    default-value="Pedro Duarte" />
                </div>
              </div>
            </div>
            <DialogFooter>
              <DialogClose as-child>
                <Button variant="outline"> បោះបង់ </Button>
              </DialogClose>
              <Button type="submit"> យល់ព្រម </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>

      <button class="rounded-md flex-none p-2 px-2 border border-gray-300 flex items-center gap-2 justify-center">
        <ArrowDownTrayIcon class="w-5 h-5" />
        របាយការណ៍
      </button>
    </div>
    <div class="mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ល.រ</TableHead>
            <TableHead>លេខកូដ</TableHead>
            <TableHead>ប្រភេទបន្ទប់</TableHead>
            <TableHead>បរិយាយ</TableHead>
            <TableHead>សកម្មភាព</TableHead>
            <TableHead>បង្កើតដោយ</TableHead>
            <TableHead>កាលបរិច្ឆេទ</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody class="w-full">
          <TableRow v-for="(value, index) in roomTypeStore.roomTypes" :key="value.RoomTypeCode"
            :class="(index + 1) % 2 === 0 ? 'bg-white' : 'bg-purple-50'">
            <TableCell>{{ index + 1 }}</TableCell>
            <TableCell>{{ value.RoomTypeCode }}</TableCell>
            <TableCell>{{ value.RoomTypeName }}</TableCell>
            <TableCell>{{ value.RoomTypeDesc }}</TableCell>
            <TableCell :class="value.RoomTypeStatus ? 'text-primary' : 'text-red-500'">{{
              roomTypeStore.isRoomTypeActive(value.RoomTypeStatus)
            }}</TableCell>
            <TableCell>{{ value.CreatedBy }}</TableCell>
            <TableCell>{{ formatDateTime(value.CreatedAt) }}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
</template>
