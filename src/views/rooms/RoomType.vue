<template>
  <div class="flex flex-col min-h-screen">
    <!-- Ribbon (Top Navigation Bar) -->
    <div class="flex bg-blue-800 text-white py-2 px-4">
      <div class="flex space-x-6">
        <!-- Dynamically render Tabs -->
        <div
          v-for="(tab, index) in ribbonData"
          :key="index"
          class="cursor-pointer hover:bg-blue-600 px-4 py-2 rounded-md"
          @click="selectTab(tab)"
          :class="{ 'bg-blue-600': selectedTab === tab }"
        >
          {{ tab.name }}
        </div>
      </div>
    </div>

    <!-- Ribbon Content (Dynamic Content Area) -->
    <div class="flex flex-col p-6 bg-gray-100 flex-1">
      <!-- Render Groups for the selected Tab -->
      <div v-if="selectedTab">
        <h2 class="text-xl font-bold">{{ selectedTab.name }} Tab</h2>
        <div class="grid grid-cols-3 gap-4 mt-4">
          <!-- Render Groups inside the selected Tab -->
          <div
            v-for="(group, index) in selectedTab.groups"
            :key="index"
            class="bg-white p-4 rounded-md shadow-md"
          >
            <h3 class="text-lg font-semibold mb-4">{{ group.name }}</h3>
            <div class="space-y-2">
              <!-- Render Buttons inside the Group -->
              <button
                v-for="(button, buttonIndex) in group.buttons"
                :key="buttonIndex"
                @click="buttonAction(button.action)"
                class="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                {{ button.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
