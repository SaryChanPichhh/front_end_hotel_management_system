<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useInventoryStore } from "@/stores/inventory.store";
import type { InventoryModel } from "@/models/inventory_model";
import {
  MagnifyingGlassIcon,
  ArrowDownTrayIcon,
  PhotoIcon,
  XMarkIcon,
} from "@heroicons/vue/24/solid";
import { Plus } from "lucide-vue-next";
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
import { Button } from "@/components/ui/button";
import { InventoryStatus } from "@/utils/inventory.enum";
import { SupplierStore } from "@/stores/supplier.store";
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
import { Check, ChevronsUpDown } from "lucide-vue-next";
import { cn } from "@/lib/utils";

import Skeleton from "@/components/ui/skeleton/Skeleton.vue";

const supplierStore = SupplierStore();
const openSupplier = ref(false);
const selectedSupplier = ref("");

onMounted(() => {
  supplierStore.getAllSupplier();
});

const inventoryStore = useInventoryStore();
const inventories = ref<InventoryModel[]>([]);
const isLoading = ref(true);
const selectedImage = ref<string | null>(null);
const fileInput = ref<HTMLInputElement | null>(null);

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

onMounted(async () => {
  isLoading.value = true;
  // Simulate network delay to show skeleton
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await supplierStore.getAllSupplier();
  inventoryStore.initData();
  inventories.value = inventoryStore.inventories;
  isLoading.value = false;
});
</script>
<template>
  <div class="w-full p-2">
    <div
      class="flex w-full h-12 gap-1 items-center sticky top-0 z-10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 py-2 -mt-2"
    >
      <div class="relative flex-grow">
        <MagnifyingGlassIcon class="absolute left-2.5 top-2.5 h-5 w-5" />
        <input
          class="rounded-md w-[50vw] p-2 pl-10 border border-gray-300"
          placeholder="ស្វែងរកសន្និធិ"
        />
      </div>
      <Dialog>
        <form>
          <DialogTrigger as-child>
            <button
              variant="outline"
              class="rounded-md flex-none p-2 px-2 border border-gray-300 flex items-center gap-2 justify-center"
            >
              <Plus class="w-5 h-5" />
              បង្កើតសន្និធិ
            </button>
          </DialogTrigger>
          <DialogContent class="sm:max-w-[800px] !animate-none">
            <DialogHeader>
              <DialogTitle class="">បង្កើតសន្និធិ</DialogTitle>
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
                  <Label for="" class="w-[130px]">កូដសន្និធិ៖</Label>
                  <input
                    class="w-full p-2 border border-primary rounded-sm focus:outline-none"
                    id=""
                    name="name"
                    :placeholder="inventoryStore.generateAutoCode()"
                    readonly
                    @mousedown.prevent
                  />
                </div>
                <div class="flex gap-1 items-center">
                  <Label for="name-1" class="w-[130px]">ឈ្មោះសន្និធិ៖</Label>
                  <input
                    class="w-full p-2 border border-primary rounded-sm text-sm focus:outline-primary"
                    id="name-1"
                    name="name"
                    default-value="Pedro Duarte"
                  />
                </div>
                <div class="flex gap-1 items-center">
                  <Label class="w-[130px]">អ្នកផ្គត់ផ្គង់៖</Label>
                  <Popover v-model:open="openSupplier">
                    <PopoverTrigger as-child>
                      <Button
                        variant="outline"
                        role="combobox"
                        :aria-expanded="openSupplier"
                        class="w-full justify-between font-normal text-sm p-2 border-primary rounded-sm h-auto bg-white text-black hover:bg-white"
                      >
                        {{
                          selectedSupplier
                            ? supplierStore.suppliers.find(
                                (s) => s.SupplierCode === selectedSupplier,
                              )?.SupplierName
                            : "ជ្រើសរើសអ្នកផ្គត់ផ្គង់..."
                        }}
                        <ChevronsUpDown
                          class="ml-2 h-4 w-4 shrink-0 opacity-50"
                        />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent class="w-[400px] p-0" align="start">
                      <Command>
                        <CommandInput placeholder="ស្វែងរកអ្នកផ្គត់ផ្គង់..." />
                        <CommandEmpty>រកមិនឃើញអ្នកផ្គត់ផ្គង់ទេ.</CommandEmpty>
                        <CommandList>
                          <CommandGroup>
                            <div
                              class="flex px-2 py-1.5 text-xs font-medium text-muted-foreground bg-gray-50 border-b"
                            >
                              <div class="flex-1 text-sm">
                                កូដអ្នកផ្គត់ផ្គង់
                              </div>
                              <div class="flex-1 text-sm">
                                ឈ្មោះអ្នកផ្គត់ផ្គង់
                              </div>
                            </div>
                            <CommandItem
                              :class="
                                selectedSupplier === supplier.SupplierCode
                                  ? 'bg-gray-200 text-black'
                                  : 'bg-white text-black'
                              "
                              v-for="supplier in supplierStore.suppliers"
                              :key="supplier.SupplierCode"
                              :value="supplier.SupplierCode"
                              @select="
                                () => {
                                  selectedSupplier = supplier.SupplierCode;
                                  openSupplier = false;
                                }
                              "
                            >
                              <div class="flex flex-1 gap-2">
                                <span
                                  class="flex-1 font-mono text-sm text-gray-500"
                                  >{{ supplier.SupplierCode }}</span
                                >
                                <span class="flex-1 truncate">{{
                                  supplier.SupplierName
                                }}</span>
                              </div>
                            </CommandItem>
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
            <div class="flex gap-8">
              <div class="grid gap-3 flex-1">
                <div class="flex gap-1 items-center">
                  <Label for="name-1" class="w-[130px]">ចំនួន៖</Label>
                  <input
                    class="w-full p-2 border border-primary rounded-sm text-sm"
                    id="name-1"
                    name="name"
                    default-value="Pedro Duarte"
                  />
                </div>
                <div class="flex gap-1 items-center">
                  <Label for="name-1" class="w-[130px]">ស្ថានភាព៖</Label>
                  <input
                    class="w-full p-2 border border-primary rounded-sm text-sm"
                    id="name-1"
                    name="name"
                    default-value="Pedro Duarte"
                  />
                </div>
              </div>
              <div class="grid gap-3 flex-1">
                <div class="flex gap-1 items-center">
                  <Label for="name-1" class="w-[130px]">តម្លៃ៖</Label>
                  <input
                    class="w-full p-2 border border-primary rounded-sm text-sm"
                    id="name-1"
                    name="name"
                    default-value="Pedro Duarte"
                  />
                </div>
                <div class="flex gap-1 items-center">
                  <Label for="name-1" class="w-[130px]">បរិយាយ៖</Label>
                  <input
                    class="w-full p-2 border border-primary rounded-sm text-sm"
                    id="name-1"
                    name="name"
                    default-value="Pedro Duarte"
                  />
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

      <button
        class="rounded-md flex-none p-2 px-2 border border-gray-300 flex items-center gap-2 justify-center"
      >
        <ArrowDownTrayIcon class="w-5 h-5" />
        របាយការណ៍
      </button>
    </div>
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4 pb-4"
    >
      <template v-if="isLoading">
        <div
          v-for="n in 10"
          :key="n"
          class="border rounded-md shadow-sm overflow-hidden bg-white flex flex-col"
        >
          <Skeleton class="aspect-video w-full rounded-none bg-gray-200" />
          <div class="p-3 flex flex-col flex-grow gap-2">
            <Skeleton class="h-4 w-3/4 bg-gray-200" />
            <div class="space-y-1">
              <Skeleton class="h-3 w-full bg-gray-200" />
              <Skeleton class="h-3 w-5/6 bg-gray-200" />
            </div>
            <div
              class="mt-auto pt-2 border-t border-gray-100 flex justify-between items-end"
            >
              <div class="space-y-1">
                <Skeleton class="h-3 w-12 bg-gray-200" />
                <Skeleton class="h-4 w-8 bg-gray-200" />
              </div>
              <div class="space-y-1 flex flex-col items-end">
                <Skeleton class="h-3 w-8 bg-gray-200" />
                <Skeleton class="h-4 w-16 bg-gray-200" />
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div
          v-for="item in inventories"
          :key="item.code"
          class="border rounded-md shadow-sm overflow-hidden hover:shadow-md transition-shadow bg-white flex flex-col"
        >
          <div class="aspect-video w-full overflow-hidden bg-gray-100 relative">
            <img
              :src="item.image"
              :alt="item.name"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />

            <span
              class="absolute top-1.5 right-2 px-2 py-0.5 rounded-full text-xs font-medium bg-white/80 backdrop-blur-sm"
              :class="
                item.status === 'In Stock'
                  ? 'text-green-700 border border-green-200'
                  : item.status === 'Low Stock'
                    ? 'text-yellow-700 border border-yellow-200'
                    : 'text-red-700 border border-red-200'
              "
            >
              {{ item.status }}
            </span>
          </div>
          <div class="p-3 flex flex-col flex-grow">
            <div class="flex justify-between items-start mb-1">
              <h3 class="font-semibold text-sm line-clamp-1" :title="item.name">
                {{ item.name }}
              </h3>
            </div>
            <p
              class="text-xs text-gray-500 mb-2 line-clamp-2"
              :title="item.decscription"
            >
              {{ item.decscription }}
            </p>

            <div class="mt-auto pt-2 border-t border-gray-200">
              <div class="flex justify-between items-center mb-1">
                <span class="text-xs font-mono text-gray-400">{{
                  item.code
                }}</span>
                <span class="text-xs font-medium text-gray-600">{{
                  item.category
                }}</span>
              </div>
              <div class="flex justify-between items-end">
                <div>
                  <p
                    class="text-xs"
                    :class="
                      item.status === InventoryStatus.InStock
                        ? 'text-primary'
                        : item.status === InventoryStatus.OutOfStock
                          ? 'text-red-600'
                          : 'text-yellow-600'
                    "
                  >
                    {{ inventoryStore.changeStockInKhmer(item.status) }}
                  </p>
                  <p
                    class="font-medium text-sm mt-1"
                    :class="
                      item.quantity < 20 ? 'text-red-600' : 'text-gray-900'
                    "
                  >
                    {{ item.quantity }}
                  </p>
                </div>
                <div class="text-right">
                  <p class="text-xs text-gray-500">តម្លៃ</p>
                  <p class="font-bold text-primary">
                    ${{ item.price.toFixed(2) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
