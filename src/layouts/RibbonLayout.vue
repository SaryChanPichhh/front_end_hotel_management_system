<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import ribbonData from "@/router/ribbon";
import { XMarkIcon } from "@heroicons/vue/24/solid";

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

// Load tabs from local storage on mount
const loadTabsFromLocalStorage = () => {
  const storedTabs = localStorage.getItem("tabs");
  const storedActiveTab = localStorage.getItem("activeTab");

  if (storedTabs) {
    try {
      selectedButton.value = JSON.parse(storedTabs);

      if (selectedButton.value.length > 0) {
        let tabToActivate = null;

        // Try to find the stored active tab in the list of open tabs
        if (storedActiveTab) {
          tabToActivate = selectedButton.value.find(
            (t) => t.button_name === storedActiveTab,
          );
        }

        // Fallback to the last tab if active tab not found or not set
        if (!tabToActivate) {
          tabToActivate = selectedButton.value[selectedButton.value.length - 1];
        }

        if (tabToActivate) {
          activeButton.value = tabToActivate.button_name;
          router.push({ name: tabToActivate.route });
        }
      }
    } catch (e) {
      console.error("Failed to parse tabs from local storage", e);
      selectedButton.value = [];
    }
  }
};

loadTabsFromLocalStorage();

const selectTab = (tab: any, index: number) => {
  selectSubTabIndex.value = index;
  selectedTab.value = tab;
};

const saveTabsToLocalStorage = () => {
  localStorage.setItem("tabs", JSON.stringify(selectedButton.value));
};

const saveActiveTabToLocalStorage = (button_name: string) => {
  localStorage.setItem("activeTab", button_name);
};

const actionButton = (
  buttonIndex: number,
  button_name: string,
  route: string,
) => {
  activeButton.value = button_name;
  saveActiveTabToLocalStorage(button_name);

  if (!selectedButton.value.some((x) => x.button_name === button_name)) {
    selectedButton.value.push({
      button_index: buttonIndex,
      button_name: button_name,
      route: route,
    });
    saveTabsToLocalStorage();
  }
  router.push({ name: route });
};

const removeTab = (button_name: string, index: number, route: string) => {
  const tabIndex = selectedButton.value.findIndex(
    (t) => t.button_name === button_name && t.route === route,
  );

  if (tabIndex !== -1) {
    selectedButton.value.splice(tabIndex, 1);
    saveTabsToLocalStorage();

    if (button_name === activeButton.value) {
      if (selectedButton.value.length > 0) {
        const lastTab = selectedButton.value[selectedButton.value.length - 1];
        activeButton.value = lastTab!.button_name;
        saveActiveTabToLocalStorage(lastTab!.button_name);
        router.push({ name: lastTab!.route });
      } else {
        activeButton.value = null;
        localStorage.removeItem("activeTab");
        router.push("/app"); // Navigate to a default route or home
      }
    }
  }
};
</script>

<!-- src/layouts/RibbonLayout.vue -->
<template>
  <div
    class="min-h-screen grid grid-rows-[auto_auto_auto_1fr_auto] h-screen overflow-hidden"
  >
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
                <div v-if="button">
                  <component :is="button.icon" class="w-6 h-6" />
                </div>
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
            @click="
              actionButton(item.button_index, item.button_name, item.route)
            "
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
