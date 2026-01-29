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
  TableCaption,
  TableCell,
  TableEmpty,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AdjustmentsHorizontalIcon } from "@heroicons/vue/24/solid";
import Label from "@/components/ui/label/Label.vue";
</script>
<template>
  <div class="flex flex-col h-full p-3">
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
    <div class="h-full flex-1 border rounded-md">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader class="sticky top-0 bg-white z-10">
          <TableRow>
            <TableHead class="w-[100px]"> Invoice </TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead class="text-right"> Amount </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell class="font-medium"> INV001 </TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell class="text-right"> $250.00 </TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="font-medium"> INV001 </TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell class="text-right"> $250.00 </TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="font-medium"> INV001 </TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell class="text-right"> $250.00 </TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="font-medium"> INV001 </TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell class="text-right"> $250.00 </TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="font-medium"> INV001 </TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell class="text-right"> $250.00 </TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="font-medium"> INV001 </TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell class="text-right"> $250.00 </TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="font-medium"> INV001 </TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell class="text-right"> $250.00 </TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="font-medium"> INV001 </TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell class="text-right"> $250.00 </TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="font-medium"> INV001 </TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell class="text-right"> $250.00 </TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="font-medium"> INV001 </TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell class="text-right"> $250.00 </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
</template>
