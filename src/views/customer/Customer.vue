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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Label from "@/components/ui/label/Label.vue";
import { useCustomerStore } from "@/stores/customer.store";
import { onMounted, ref } from "vue";
import { XMarkIcon, PhotoIcon } from "@heroicons/vue/24/solid";

const customerStore = useCustomerStore();
const selectedImage = ref<string | null>(null);
const fileInput = ref<HTMLInputElement | null>(null);
const openSupplier = ref(false);
const selectedSupplier = ref("");
const triggerFileInput = () => {
  fileInput.value?.click();
};

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    const file = target.files[0];
    selectedImage.value = URL.createObjectURL(file);
  }
};
onMounted(() => {
  customerStore.getCustomers();
  console.log(customerStore.customers);
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
              placeholder="ស្វែងរកទិន្នន័យភ្ញៀវ"
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
          >បង្កើតអតិថិជន</DialogTrigger
        >
        <DialogContent class="sm:max-w-[800px] !animate-none">
          <DialogHeader>
            <DialogTitle class="">បង្កើតអតិថិជន</DialogTitle>
          </DialogHeader>
          <div class="flex gap-5">
            <div class="">
              <div
                class="w-[230px] flex flex-col gap-2 items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 transition-colors h-[150px] relative"
                @click="triggerFileInput"
              >
                <input
                  type="file"
                  ref="fileInput"
                  class="hidden"
                  accept="image/*"
                  @change="handleFileUpload"
                />
                <div
                  v-if="selectedImage"
                  class="w-full h-full flex items-center justify-center overflow-hidden"
                >
                  <img
                    :src="selectedImage"
                    class="max-w-full max-h-full object-contain rounded-md"
                    alt="Preview"
                  />
                  <button
                    @click.stop="selectedImage = null"
                    class="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 shadow-sm"
                  >
                    <XMarkIcon class="w-4 h-4" />
                  </button>
                </div>
                <div
                  v-else
                  class="flex flex-col items-center text-gray-500 gap-2"
                >
                  <PhotoIcon class="w-8 h-8 text-gray-400" />
                  <span class="text-xs text-center"
                    >ចុចដើម្បីជ្រើសរើសរូបភាព</span
                  >
                </div>
              </div>
            </div>
            <div class="flex-1 grid w-full">
              <div class="flex gap-1 items-center">
                <Label for="" class="w-[130px]">កូដអតិថិជន៖</Label>
                <input
                  class="w-full p-2 border border-primary rounded-sm focus:outline-none"
                  id=""
                  name="name"
                  :placeholder="customerStore.generateAutoCode()"
                  readonly
                  @mousedown.prevent
                />
              </div>
              <div class="flex gap-1 items-center">
                <Label for="name-1" class="w-[130px]">ឈ្មោះអតិថិជន៖</Label>
                <input
                  class="w-full p-2 border border-primary rounded-sm text-sm focus:outline-primary"
                  id="name-1"
                  name="name"
                  default-value="Pedro Duarte"
                />
              </div>
              <div class="flex gap-1 items-center">
                <Label for="name-1" class="w-[130px]">លេខទូរស័ព្ទ៖</Label>
                <input
                  class="w-full p-2 border border-primary rounded-sm text-sm focus:outline-primary"
                  id="name-1"
                  name="name"
                  default-value="Pedro Duarte"
                />
              </div>
            </div>
          </div>
          <div class="flex gap-8">
            <div class="grid gap-3 flex-1">
              <div class="flex gap-1 items-center">
                <Label for="name-1" class="w-[130px]">អ៊ីម៉ែល៖</Label>
                <input
                  class="w-full p-2 border border-primary rounded-sm text-sm focus:outline-primary"
                  id="name-1"
                  name="name"
                  default-value="Pedro Duarte"
                />
              </div>
            </div>
            <div class="grid gap-3 flex-1">
              <div class="flex gap-1 items-center">
                <Label for="name-1" class="w-[130px]">ស្ថានភាព៖</Label>
                <Select>
                  <SelectTrigger
                    class="w-full border-primary rounded-sm focus:ring-0 focus:ring-offset-0 focus:outline-none"
                  >
                    <SelectValue
                      placeholder="ជ្រើសរើសស្ថានភាព"
                      class="text-sm"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="true"> សកម្ម </SelectItem>
                      <SelectItem value="false"> អសកម្ម </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div class="">
            <div class="flex gap-10 items-start">
              <Label for="description" class="pt-3">បរិយាយ៖</Label>
              <textarea
                class="w-full h-[100px] p-2 border border-primary rounded-sm text-sm focus:outline-primary resize-none"
                id="description"
                name="description"
                placeholder="សរសេរការបរិយាយ..."
              ></textarea>
            </div>
          </div>
          <DialogFooter>
            <DialogClose as-child>
              <Button variant="outline"> បោះបង់ </Button>
            </DialogClose>
            <Button type="submit"> យល់ព្រម </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <button class="px-6 border border-1">របាយការណ៍</button>
    </div>
    <div class="h-full flex-1 border rounded-md overflow-auto mt-4">
      <Table>
        <TableHeader class="sticky top-0 bg-white z-10 shadow-sm">
          <TableRow>
            <TableHead class="w-[50px]">ល.រ</TableHead>
            <TableHead>លេខកូដ</TableHead>
            <TableHead>ឈ្មោះអតិថិជន</TableHead>
            <TableHead>លេខទូរស័ព្ទ</TableHead>
            <TableHead>អ៊ីមែល</TableHead>
            <TableHead>អាសយដ្ឋាន</TableHead>
            <TableHead>ស្ថានភាព</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow
            v-for="(customer, index) in customerStore.customers"
            :key="customer.CustomerCode"
            :class="(index + 1) % 2 === 0 ? 'bg-purple-50' : ''"
            class=""
          >
            <TableCell class="font-medium">{{ index + 1 }}</TableCell>
            <TableCell>{{ customer.CustomerCode }}</TableCell>
            <TableCell>{{ customer.CustomerName }}</TableCell>
            <TableCell>{{ customer.Phone }}</TableCell>
            <TableCell>{{ customer.Email }}</TableCell>
            <TableCell>{{ customer.Address }}</TableCell>
            <TableCell>
              <span
                class="px-2 py-1 rounded-full text-xs font-medium"
                :class="
                  customer.Status
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                "
              >
                {{ customer.Status ? "សកម្ម" : "មិនសកម្ម" }}
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
          <TableRow v-if="customerStore.customers.length === 0">
            <TableCell colspan="7" class="h-24 text-center text-gray-500">
              មិនមានទិន្នន័យ
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
</template>
