<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import ribbonData from "@/router/ribbon";
import { UserGroupIcon, XCircleIcon, XMarkIcon } from "@heroicons/vue/24/solid";

const router = useRouter();

interface Tab {
  button_index: number;
  button_name: string;
  route: string;
}
// Ribbon

// Track the selected tab
const selectedTab = ref(ribbonData[0]);
const selectSubTabIndex = ref(0);
const activeButton = ref<string | null>(null);
const selectedButton = ref<Tab[]>([]);
const selectTab = (tab: any, index: number) => {
  selectSubTabIndex.value = index;
  selectedTab.value = tab;
  console.log(selectedTab.value?.groups);
};
const actionButton = (
  buttonIndex: number,
  button_name: string,
  route: string
) => {
  activeButton.value = button_name;

  if (!selectedButton.value.some((x) => x.button_name === button_name)) {
    selectedButton.value.push({
      button_index: buttonIndex,
      button_name: button_name,
      route: route,
    });
    router.push({ name: route });
  }
};

const removeTab = (button_name: string, index: number, route: string) => {
  const getIndex = selectedButton.value.indexOf(
    { button_index: index, button_name: button_name, route: route },
    1
  );

  if (getIndex !== 1) {
    selectedButton.value.splice(getIndex, 1);
    if (button_name === activeButton.value) {
      activeButton.value =
        (selectedButton.value.length > 0
          ? selectedButton.value[selectedButton.value.length - 1]?.button_name
          : null) ?? null;

      router.back();
    }
  }
};
</script>

<!-- src/layouts/RibbonLayout.vue -->
<template>
  <div class="min-h-screen grid grid-rows-[auto_auto_auto_1fr_auto]">
    <div class="w-full bg-primary text-white flex h-11">
      <!-- Ribbon Navigation -->
      <div class="" v-for="(tab, index) in ribbonData" :key="index">
        <div
          class="cursor-pointer px-4 py-2 transform hover:scale-110 transition-transform"
          @click="selectTab(tab, index)"
          :class="{
            'bg-white text-primary h-full pointer-events-none':
              selectedTab?.name === tab.name,
          }"
        >
          {{ tab.name }}
        </div>
      </div>
    </div>
    <div class="w-full text-primary flex gap-2">
      <!-- Ribbon Navigation -->
      <div class="flex">
        <div
          v-for="(tab, groupIndex) in selectedTab?.groups"
          :key="groupIndex"
          class="flex flex-col items-center py-2 px-4"
          :class="{
            'border-r border-primary': tab.buttons && tab.buttons.length > 0,
          }"
        >
          <div class="flex gap-4">
            <div
              class=""
              v-for="(button, button_index) in tab.buttons"
              :key="button.route"
            >
              <div
                class="flex flex-col items-center gap-2 text-sm cursor-pointer py-2 transform hover:scale-110 transition-transform"
                @click="actionButton(button_index, button.name, button.route)"
                :class="{
                  'border rounded-md border-primary bg-purple-50 text-primary h-full pointer-events-none pl-2 pr-2 ':
                    activeButton === button.name,
                }"
              >
                <UserGroupIcon class="w-6 h-6" />
                <p>{{ button.name }}</p>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <p class="text-xs">
              {{ tab.name }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <hr
      :class="
        !selectedTab?.groups?.some((x) => x.buttons.length > 0)
          ? 'w-0 border-0'
          : 'border-t-1 border-primary'
      "
    />

    <div class="w-full h-full overflow-auto">
      <router-view />
    </div>
    <div class="w-full">
      <div class="flex px-1">
        <div
          class="flex items-center border-2 gap-2 px-2 rounded-md"
          v-for="(item, index) in selectedButton"
        >
          <button
            class="bg-inherit text-primary hover:bg-transparent py-1.5 border-0"
          >
            {{ item.button_name }}</button
          ><XMarkIcon
            class="w-5 h-5 text-primary cursor-pointer p-0.5 bg-purple-200 rounded-md hover:bg-purple-100 hover:rounded-md"
            @click="removeTab(item.button_name, index, item.route)"
          ></XMarkIcon>
        </div>
      </div>
    </div>
  </div>
</template>
