<script setup lang="ts">
import { VisSingleContainer, VisDonut, VisTooltip } from "@unovis/vue";
import { Donut } from "@unovis/ts";
import { ref } from "vue";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "#2563eb" },
  { browser: "safari", visitors: 200, fill: "#60a5fa" },
  { browser: "firefox", visitors: 187, fill: "#3b82f6" },
  { browser: "edge", visitors: 173, fill: "#93c5fd" },
  { browser: "other", visitors: 90, fill: "#bfdbfe" },
];

const value = (d: (typeof chartData)[number]) => d.visitors;
const color = (d: (typeof chartData)[number]) => d.fill;

const tooltipTriggers = {
  [Donut.selectors.segment]: (d: any) => {
    const data = d.data || d;
    return `
      <div class="p-2 bg-white border rounded shadow-sm text-sm">
        <div class="flex items-center gap-2">
            <span style="background-color: ${data.fill}" class="w-2 h-2 rounded-full"></span>
            <span class="capitalize font-medium">${data.browser}</span>
            <span>: ${data.visitors}</span>
        </div>
      </div>
    `;
  },
};
</script>

<template>
  <div class="flex flex-col w-full bg-white rounded-lg shadow-sm border">
    <div class="items-center pb-0 p-6">
      <h3 class="text-lg font-semibold text-center">Pie Chart - Label</h3>
      <p class="text-sm text-muted-foreground text-center">
        January - June 2024
      </p>
    </div>
    <div class="flex-1 pb-0">
      <VisSingleContainer :data="chartData" :height="250">
        <VisDonut :value="value" :color="color" :arc-width="0" />
        <VisTooltip :triggers="tooltipTriggers" />
      </VisSingleContainer>
    </div>
    <div class="flex flex-col gap-2 text-sm p-6 pt-0">
      <div
        class="flex items-center justify-center gap-2 leading-none font-medium"
      >
        Trending up by 5.2% this month
      </div>
      <div class="text-muted-foreground leading-none text-center">
        Showing total visitors for the last 6 months
      </div>
    </div>
  </div>
</template>
