<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabInfo, ButtonInfo, GroupInfo, ActionDesc } from "@/router/TabInfo";
import { Checkbox } from "@/components/ui/checkbox";
import { ref } from "vue";
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
  {
    parent: TabInfo.Reservation,
    group: [
      {
        name: GroupInfo.Reservation,
        buttons: [
          {
            name: ButtonInfo.Reservation,
            action: [
              ActionDesc.View,
              ActionDesc.Add,
              ActionDesc.Edit,
              ActionDesc.Delete,
            ],
          },
          {
            name: ButtonInfo.RoomCalendar,
            action: [
              ActionDesc.View,
              ActionDesc.Add,
              ActionDesc.Edit,
              ActionDesc.Delete,
            ],
          },
        ],
      },
      {
        name: GroupInfo.Customer,
        buttons: [
          {
            name: ButtonInfo.GuestInfo,
            action: [
              ActionDesc.View,
              ActionDesc.Add,
              ActionDesc.Edit,
              ActionDesc.Delete,
            ],
          },
          {
            name: ButtonInfo.GuestHistory,
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
const buttonSelected = ref('');
const fnButtonSelected = (groupName:string) => {
  
    console.log(groupName);
    
}
</script>
<template>
  <div class="w-full h-full">
    <Tabs class="w-full bg-inherit" default-value="ការគ្រប់គ្រង">
      <TabsList class="w-full bg-inherit flex items-start justify-start p-0">
        <TabsTrigger
          v-for="tab in permissionData"
          :key="tab.parent"
          :value="tab.parent"
          class="text-md border rounded-none bg-gray-100 focus:bg-white"
        >
          {{ tab.parent }}
        </TabsTrigger>
      </TabsList>
      <TabsContent
        v-for="tab in permissionData"
        :key="tab.parent"
        :value="tab.parent"
        class="flex items-center p-0  m-0"
      >
        <div class="w-full h-full flex flex-col">
          <div class="flex items-center gap-2 mt-2"><Checkbox class="rounded-none "></Checkbox>ទាំងអស់</div>
          <div
            v-for="group in tab.group"
            :key="group.name"
            class="flex flex-col items-start mt-2 " 
          >
            
            ------------------ {{ group.name }} ------------------
            <div
              v-for="button in group.buttons"
              :key="button.name"
              class="flex items-center gap-2 mt-2"
            >
              <Checkbox class="rounded-none " @change="fnButtonSelected(group.name)"></Checkbox>
              {{ button.name }}
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  </div>
</template>
