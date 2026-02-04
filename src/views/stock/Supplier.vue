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

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  TrashIcon,
  PrinterIcon,
} from "@heroicons/vue/24/solid";
import Label from "@/components/ui/label/Label.vue";
import { SupplierStore } from "@/stores/supplier.store";
import { onMounted } from "vue";

const supplierStore = SupplierStore();

onMounted(() => {
  supplierStore.getAllSupplier();
});
</script>
<template>
  <div class="flex flex-col h-full p-3">
    <div class="flex gap-2">
      <div class="flex-1">
        <div class="flex gap-2">
          <div class="relative flex-grow">
            <MagnifyingGlassIcon class="absolute left-2.5 top-2.5 h-5 w-5" />
            <input
              class="rounded-md w-[50vw] p-2 pl-10 border border-primary focus:outline-none"
              placeholder="ស្វែងរកទិន្នន័យអ្នកផ្គត់ផ្គង់"
            />
          </div>
          <AdjustmentsHorizontalIcon
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
    <div class="h-full flex-1 border rounded-md overflow-auto mt-4">
      <Table>
        <TableHeader class="sticky top-0 bg-white z-10 shadow-sm">
          <TableRow>
            <TableHead class="w-[50px]">ល.រ</TableHead>
            <TableHead>លេខកូដ</TableHead>
            <TableHead>ឈ្មោះអ្នកផ្គត់ផ្គង់</TableHead>
            <TableHead>ឈ្មោះអ្នកផ្គត់ផ្គង់</TableHead>
            <TableHead>លេខទូរស័ព្ទ</TableHead>
            <TableHead>អ៊ីមែល</TableHead>
            <TableHead>អាសយដ្ឋាន</TableHead>
            <TableHead>ស្ថានភាព</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow
            v-for="(supplier, index) in supplierStore.suppliers"
            :key="supplier.SupplierCode"
            :class="(index + 1) % 2 === 0 ? 'bg-purple-50' : ''"
            class=""
          >
            <TableCell class="font-medium">{{ index + 1 }}</TableCell>
            <TableCell>{{ supplier.SupplierCode }}</TableCell>
            <TableCell>{{ supplier.SupplierName }}</TableCell>
            <TableCell>{{ supplier.Description }}</TableCell>
            <TableCell>{{ supplier.Phone }}</TableCell>
            <TableCell>{{ supplier.Email }}</TableCell>
            <TableCell>{{ supplier.Address }}</TableCell>
            <TableCell>
              <span
                class="px-2 py-1 rounded-full text-xs font-medium"
                :class="
                  supplier.Status
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                "
              >
                {{ supplier.Status ? "សកម្ម" : "មិនសកម្ម" }}
              </span>
            </TableCell>
            <TableCell class="w-[120px]">
              <div class="flex gap-2">
                <button class="rounded-md text-xs">
                  <PencilSquareIcon class="w-5 h-5 text-gray-500" />
                </button>
                <button class="text-white rounded-md">
                  <TrashIcon class="w-5 h-5 text-red-500" /></button
                ><button class="text-white rounded-md">
                  <PrinterIcon class="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </TableCell>
          </TableRow>
          <TableRow v-if="supplierStore.suppliers.length === 0">
            <TableCell colspan="7" class="h-24 text-center text-gray-500">
              មិនមានទិន្នន័យ
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
</template>
