<script setup lang="ts">
import {
  VisAxis,
  VisGroupedBar,
  VisXYContainer,
  VisTooltip,
  VisCrosshair,
} from "@unovis/vue";
import { GroupedBar } from "@unovis/ts";
import { ref } from "vue";

const chartData = [
  { date: new Date("2024-01-01"), desktop: 186, mobile: 80 },
  { date: new Date("2024-02-01"), desktop: 305, mobile: 200 },
  { date: new Date("2024-03-01"), desktop: 237, mobile: 120 },
  { date: new Date("2024-04-01"), desktop: 73, mobile: 190 },
  { date: new Date("2024-05-01"), desktop: 209, mobile: 130 },
  { date: new Date("2024-06-01"), desktop: 214, mobile: 140 },
];

type Data = (typeof chartData)[number];

const colors = {
  desktop: "#2563eb",
  mobile: "#60a5fa",
};

const x = (d: Data) => d.date;
const y = [(d: Data) => d.desktop, (d: Data) => d.mobile];
const tickFormat = (d: number) =>
  new Date(d).toLocaleDateString("en-US", { month: "short" });

const tooltipTriggers = {
  [GroupedBar.selectors.bar]: (d: Data) => {
    return `
      <div class="p-2 bg-white border rounded shadow-sm text-sm">
        <div class="font-bold mb-1">${new Date(d.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</div>
        <div class="flex items-center gap-2">
            <span style="background-color: ${colors.desktop}" class="w-2 h-2 rounded-full"></span>
            <span>Desktop: ${d.desktop}</span>
        </div>
        <div class="flex items-center gap-2">
            <span style="background-color: ${colors.mobile}" class="w-2 h-2 rounded-full"></span>
            <span>Mobile: ${d.mobile}</span>
        </div>
      </div>
    `;
  },
};
</script>

<template>
  <div class="min-h-[200px] w-full p-4 bg-white rounded-lg shadow-sm border">
    <h3 class="text-lg font-semibold mb-4">របាយការណ៏លក់</h3>
    <VisXYContainer :data="chartData" :height="300">
      <VisGroupedBar
        :x="x"
        :y="y"
        :color="[colors.desktop, colors.mobile]"
        :rounded-corners="4"
        :bar-padding="0.1"
      />
      <VisAxis
        type="x"
        :x="x"
        :tick-format="tickFormat"
        :tick-line="false"
        :domain-line="false"
        :grid-line="false"
      />
      <VisAxis
        type="y"
        :tick-line="false"
        :domain-line="false"
        :grid-line="true"
        :num-ticks="5"
      />
      <VisTooltip :triggers="tooltipTriggers" />
      <VisCrosshair />
    </VisXYContainer>
  </div>
</template>
