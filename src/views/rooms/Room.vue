<script setup lang="ts">
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowDownTrayIcon } from "@heroicons/vue/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";
import { Plus } from "lucide-vue-next";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-vue-next";
import { cn } from "@/lib/utils";
import { useRoomStore } from "@/stores/roomStore";
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
const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];
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

// ICON
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-vue-next";

import { ref, computed, onMounted } from "vue";
import type { RoomModel } from "@/models/room_model";

const roomStore = useRoomStore();
const rooms = ref<RoomModel[]>();
onMounted(() => {
  roomStore.initData();
  rooms.value = roomStore.rooms;
});
const open = ref(false);
const value = ref("");
const selectedFramework = computed(() =>
  frameworks.find((framework) => framework.value === value.value),
);
function selectFramework(selectedValue: string) {
  value.value = selectedValue === value.value ? "" : selectedValue;
  open.value = false;
}
// const isActiveInKhmer = (isActive: boolean) => (isActive ? "សកម្ម" : "អសកម្ម");
</script>

<template>
  <div class="w-full h-full flex flex-col pt-3 px-3">
    <div class="flex w-full h-12 gap-1 items-center">
      <div class="relative flex-grow">
        <MagnifyingGlassIcon class="absolute left-2.5 top-2.5 h-5 w-5" />
        <input class="rounded-md w-[50vw] p-2 pl-10 border border-gray-300" placeholder="ស្វែងរកបន្ទប់" />
      </div>
      <Dialog>
        <form>
          <DialogTrigger as-child>
            <button variant="outline"
              class="rounded-md flex-none p-2 px-2 border border-gray-300 flex items-center gap-2 justify-center">
              <Plus class="w-5 h-5" />
              បង្កើតបន្ទប់
            </button>
          </DialogTrigger>
          <DialogContent class="sm:max-w-[700px] !animate-none">
            <DialogHeader>
              <DialogTitle>បង្កើតបន្ទប់</DialogTitle>
            </DialogHeader>
            <div class="flex gap-8">
              <div class="grid gap-3">
                <div class="flex gap-1">
                  <Label for="name-1" class="w-[130px]">ឈ្មោះហូតែល៖</Label>
                  <Popover v-model:open="open">
                    <PopoverTrigger as-child>
                      <Button variant="outline" role="combobox" :aria-expanded="open"
                        class="w-full h-11 justify-between border border-primary rounded-sm p-2">
                        {{ selectedFramework?.label || "ជ្រើសរើសហូតែល..." }}
                        <ChevronsUpDownIcon class="opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent class="p-0 w-full">
                      <Command>
                        <CommandInput class="h-9" placeholder="ស្វែងរកហូតែល..." />
                        <CommandList>
                          <CommandEmpty>គ្មានហូតែល</CommandEmpty>
                          <CommandGroup>
                            <CommandItem v-for="framework in frameworks" :key="framework.value" :value="framework.value"
                              @select="
                                (ev) => {
                                  selectFramework(ev.detail.value as string);
                                }
                              ">
                              {{ framework.label }}
                              <CheckIcon :class="cn(
                                'ml-auto',
                                value === framework.value
                                  ? 'opacity-100'
                                  : 'opacity-0',
                              )
                                " />
                            </CommandItem>
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
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
              <div class="grid gap-3">
                <div class="flex gap-1">
                  <Label for="name-1" class="w-[130px]">ឈ្មោះហូតែល៖</Label>
                  <Popover>
                    <PopoverTrigger as-child>
                      <Button variant="outline" role="combobox"
                        class="w-full h-11 justify-between border border-primary rounded-sm">
                        {{ selectedFramework?.label || "ជ្រើសរើសហូតែល..." }}
                        <ChevronsUpDownIcon class="opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent class="p-0">
                      <Command>
                        <CommandInput class="h-9" placeholder="ស្វែងរកហូតែល..." />
                        <CommandList>
                          <CommandEmpty>គ្មានហូតែល</CommandEmpty>
                          <CommandGroup>
                            <CommandItem v-for="framework in frameworks" :key="framework.value"
                              :value="framework.value">
                              {{ framework.label }}
                              <CheckIcon />
                            </CommandItem>
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
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
            <TableHead>ឈ្មោះហូតែល</TableHead>
            <TableHead>ឈ្មោះបន្ទប់</TableHead>
            <TableHead>ប្រភេទបន្ទប់</TableHead>
            <TableHead>លេខបន្ទប់</TableHead>
            <TableHead>ជាន់ទី</TableHead>
            <TableHead>វីង</TableHead>
            <TableHead>ស្ថានភាព</TableHead>
            <TableHead>សកម្មភាព</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody class="">
          <TableRow v-for="(value, index) in rooms" :key="value.ROOM_ID"
            :class="(index + 1) % 2 === 0 ? 'bg-white' : 'bg-purple-50'">
            <TableCell>{{ index + 1 }}</TableCell>
            <TableCell>{{ value.HOTEL_NAME }}</TableCell>
            <TableCell>{{ value.ROOM_ID }}</TableCell>
            <TableCell>{{ value.ROOM_TYPE }}</TableCell>
            <TableCell>{{ value.ROOM_NO }}</TableCell>
            <TableCell>{{ value.FLOOR }}</TableCell>
            <TableCell>{{ value.WING }}</TableCell>
            <TableCell :class="value.STATUS === 'AVAILABLE' ? 'text-primary' : 'text-red-200'
              ">{{ value.STATUS }}</TableCell>
            <TableCell :class="value.IS_ACTIVE === true ? 'text-primary' : 'text-red-500'
              ">{{ roomStore.isRoomActive(value.IS_ACTIVE) }}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
</template>
