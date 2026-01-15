<script setup lang="ts">
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowDownTrayIcon } from '@heroicons/vue/24/solid';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
</script>

<template>
  <div class="w-full h-full flex flex-col pt-3 px-3 ">
    <div class="flex w-full h-10 gap-1">
      <div class="relative flex-grow">
        <MagnifyingGlassIcon class="absolute left-2.5 top-2.5 h-5 w-5 " />
        <input class="rounded-md w-full p-1.5 pl-10 border border-gray-300" placeholder="ស្វែងរកបន្ទប់" />
      </div>
      <button class="rounded-md flex-none  p-1.5 px-2 border border-gray-300 flex items-center gap-2 justify-center">
        <MagnifyingGlassIcon class="w-5 h-5" />
        ស្វែងរក
      </button>
      <button class="rounded-md flex-none  p-1.5 px-2 border border-gray-300  flex items-center gap-2 justify-center">
        <ArrowDownTrayIcon class="w-5 h-5" />
        របាយការណ៍
      </button>
    </div>
    <div class="mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ល.រ</TableHead>
            <TableHead>ឈ្មោះ</TableHead>
            <TableHead>អាស័យដ្ឋាន</TableHead>
            <TableHead>ស្នើសក្នុងក្រុម</TableHead>
            <TableHead>ស្នើសក្នុងក្រុម</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell>4</TableCell>
            <TableCell>5</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>

</template>
