<script setup lang="ts">
import { ref } from "vue";
import aboutUs from "@/assets/animation/about-us.json";
import LottieComponent from "@/components/built-in/Lottie.Component.vue";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Facebook, Twitch, Instagram, Earth } from "lucide-vue-next";
const aboutInformation = [
  {
    linkUrl: "https://www.setecu.com/",
    icon: Facebook,
    description: "Follow us on Facebook",
  },
  {
    linkUrl: "https://www.setecu.com/",
    icon: Twitch,
    description: "Watch us on Twitch",
  },
  {
    linkUrl: "https://www.setecu.com/",
    icon: Instagram,
    description: "Follow us on Instagram",
  },
  {
    linkUrl: "https://www.setecu.com/",
    icon: Earth,
    description: "Visit our Website",
  },
];
const hoveredIndex = ref<number | null>(null);
</script>

<template>
  <div class="min-h-full bg-gray-50/50 overflow-y-auto">
    <!-- Hero Section -->
    <div class="container mx-auto px-4 py-12 lg:py-20">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <!-- Text Content -->
        <div class="flex-1 space-y-6 text-center lg:text-left">
          <h1
            class="text-4xl lg:text-5xl font-bold text-primary tracking-tight"
          >
            អំពីយើង
          </h1>
          <p
            class="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
          >
            យើងជាក្រុមអ្នកជំនាញផ្នែកបច្ចេកវិទ្យា
            ដែលមានបេសកកម្មបង្កើតដំណោះស្រាយឌីជីថលឆ្លាតវៃ
            សម្រាប់វិស័យបដិសណ្ឋារកិច្ច។ ប្រព័ន្ធគ្រប់គ្រងសណ្ឋាគាររបស់យើង
            ត្រូវបានរចនាឡើងដើម្បីជួយសណ្ឋាគារ ផ្ទះសំណាក់ និងរីសត់
            គ្រប់គ្រងប្រតិបត្តិការប្រចាំថ្ងៃបានយ៉ាងមានប្រសិទ្ធភាព ទំនើប
            និងងាយស្រួលប្រើប្រាស់។
          </p>
          <div class="pt-4 flex gap-1">
            <button
              class="mr-5 bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 cursor-pointer"
            >
              ទាក់ទងមកយើង
            </button>
            <TooltipProvider>
              <div
                class="flex gap-1 items-center"
                v-for="(item, index) in aboutInformation"
                :key="index"
              >
                <Tooltip>
                  <TooltipTrigger as-child>
                    <a
                      :href="item?.linkUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="bg-primary p-3 rounded-lg group hover:bg-white border border-primary transition-colors"
                      @mouseenter="hoveredIndex = index"
                      @mouseleave="hoveredIndex = null"
                    >
                      <component
                        :is="item?.icon"
                        class="w-5 h-5 text-white group-hover:text-primary transition-colors"
                      />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{{ item.description }}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
        </div>

        <!-- Animation -->
        <div class="flex-1 w-full max-w-lg">
          <div class="relative">
            <div
              class="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-full blur-3xl -z-10"
            ></div>
            <LottieComponent
              :lottieData="aboutUs"
              class="w-full h-auto drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Features Section -->
  </div>
</template>
