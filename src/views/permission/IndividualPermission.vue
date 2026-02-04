<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabInfo, ButtonInfo, GroupInfo, ActionDesc } from "@/router/TabInfo";
import { Checkbox } from "@/components/ui/checkbox";
const permissionData = [
  {
    parent: TabInfo.Permission,
    group: [
      {
        name: GroupInfo.Permission,
        buttons: [
          {
            name: ButtonInfo.Permission,
            action: [
              ActionDesc.View,
              ActionDesc.Add,
              ActionDesc.Edit,
              ActionDesc.Delete,
            ],
          },
        ],
      },
    ],
  },
  {
    parent: TabInfo.GeneralSetting,
    group: [
      {
        name: GroupInfo.Room,
        buttons: [
          {
            name: ButtonInfo.RoomType,
            action: [
              ActionDesc.View,
              ActionDesc.Add,
              ActionDesc.Edit,
              ActionDesc.Delete,
            ],
          },
        ],
      },
    ],
  },
];
</script>
<template>
  <div class="w-full h-full">
    <Tabs class="w-full bg-inherit" default-value="ការគ្រប់គ្រង">
      <TabsList class="w-full bg-inherit flex items-start justify-start p-0">
        <TabsTrigger
          v-for="tab in permissionData"
          :key="tab.parent"
          :value="tab.parent"
          class="text-lg border rounded-none bg-gray-100 focus:bg-white"
        >
          {{ tab.parent }}
        </TabsTrigger>
      </TabsList>
      <TabsContent
        v-for="tab in permissionData"
        :key="tab.parent"
        :value="tab.parent"
        class="flex items-center p-0"
      >
        <div class="w-full h-full flex flex-col">
          <div
            v-for="group in tab.group"
            :key="group.name"
            class="flex items-center"
          >
            <Checkbox></Checkbox>
            {{ group.name }}
          </div>
        </div>
      </TabsContent>
    </Tabs>
  </div>
</template>
