<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IndividualPermission from "./IndividualPermission.vue";
</script>
<template>
  <div class="w-full">
    <Tabs default-value="individual">
      <TabsList>
        <TabsTrigger value="individual" class="text-md"
          >ការអនុញ្ញាតសិទ្ធ</TabsTrigger
        >
        <TabsTrigger value="group" class="text-md"
          >ការអនុញ្ញាតសិទ្ធជាក្រុម</TabsTrigger
        >
      </TabsList>
      <TabsContent value="individual">
        <div class="w-full h-full px-4">
          <IndividualPermission></IndividualPermission>
        </div> </TabsContent
      ><TabsContent value="group">
        <div class="w-full h-full bg-green-400">
          <h1>ការអនុញ្ញាតសិទ្ធជាក្រុម</h1>
        </div>
      </TabsContent>
    </Tabs>
  </div>
</template>
