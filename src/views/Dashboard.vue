<script setup lang="ts">
import { ref, computed } from "vue";
import {
  VisArea,
  VisAxis,
  VisLine,
  VisXYContainer,
  VisTooltip,
  VisCrosshair,
} from "@unovis/vue";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  DollarSign, 
  Users, 
  CreditCard, 
  Activity, 
  ArrowUpRight 
} from "lucide-vue-next";
import BarChartComponent from "@/components/built-in/BarChart.Component.vue";
import LineChartComponent from "@/components/built-in/LineChart.Component.vue";
// --- Chart Data & Logic ---
// Generating some sample data
const generateData = (days: number) => {
  const data = [];
  const today = new Date();
  for (let i = days; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    data.push({
      date: date,
      revenue: Math.floor(Math.random() * 5000) + 1000,
      bookings: Math.floor(Math.random() * 50) + 10,
    });
  }
  return data;
};

const chartData = generateData(30);
const timeRange = ref("30d");

type Data = typeof chartData[number];

const svgDefs = `
  <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
    <stop offset="5%" stop-color="var(--primary)" stop-opacity="0.3" />
    <stop offset="95%" stop-color="var(--primary)" stop-opacity="0" />
  </linearGradient>
`;

const filteredData = computed(() => {
    // In a real app, we would filter based on timeRange. 
    // Here we just use the generated data.
    return chartData; 
});

const totalRevenue = "$45,231.89";
const revenueChange = "+20.1% from last month";
const activeBookings = "+2350";
const bookingsChange = "+180.1% from last month";
const sales = "+12,234";
const salesChange = "+19% from last month";
const activeNow = "+573";
const activeNowChange = "+201 since last hour";

const recentTransactions = [
  {
    customer: "Liam Johnson",
    email: "liam@example.com",
    amount: "$250.00",
    status: "Approved",
    date: "2024-06-23",
  },
  {
    customer: "Olivia Smith",
    email: "olivia@example.com",
    amount: "$150.00",
    status: "Processing",
    date: "2024-06-24",
  },
  {
    customer: "Noah Williams",
    email: "noah@example.com",
    amount: "$350.00",
    status: "Approved",
    date: "2024-06-25",
  },
  {
    customer: "Emma Brown",
    email: "emma@example.com",
    amount: "$450.00",
    status: "Approved",
    date: "2024-06-26",
  },
  {
    customer: "James Jones",
    email: "james@example.com",
    amount: "$150.00",
    status: "Failed",
    date: "2024-06-27",
  },
];
</script>

<template>
  <div class="flex-1 space-y-4 p-8 pt-6">
    <div class="flex items-center justify-between space-y-2">
      <h2 class="text-3xl font-bold tracking-tight">Dashboard</h2>
      <div class="flex items-center space-x-2">
        <Select v-model="timeRange">
          <SelectTrigger class="w-[180px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="24h">Last 24 hours</SelectItem>
          </SelectContent>
        </Select>
        <Button>Download</Button>
      </div>
    </div>
    
    <!-- Stats Cards -->
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-medium"> Total Revenue </CardTitle>
          <DollarSign class="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">{{ totalRevenue }}</div>
          <p class="text-xs text-muted-foreground">{{ revenueChange }}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-medium"> Bookings </CardTitle>
          <Users class="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">{{ activeBookings }}</div>
          <p class="text-xs text-muted-foreground">{{ bookingsChange }}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-medium"> Sales </CardTitle>
          <CreditCard class="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">{{ sales }}</div>
          <p class="text-xs text-muted-foreground">{{ salesChange }}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-medium"> Active Now </CardTitle>
          <Activity class="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">{{ activeNow }}</div>
          <p class="text-xs text-muted-foreground">{{ activeNowChange }}</p>
        </CardContent>
      </Card>
    </div>

    <!-- Charts and Recent Sales -->
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card class="col-span-4">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            Revenue trends over the last 30 days.
          </CardDescription>
        </CardHeader>
        <CardContent class="pl-2">
          <div class="aspect-auto h-[350px] w-full">
             <VisXYContainer
                :data="filteredData"
                :svg-defs="svgDefs"
                :y-domain="[0, undefined]"
            >
                <VisArea
                    :x="(d: Data) => d.date"
                    :y="(d: Data) => d.revenue"
                    color="url(#fillRevenue)"
                    :opacity="0.6"
                />
                <VisLine
                    :x="(d: Data) => d.date"
                    :y="(d: Data) => d.revenue"
                    color="var(--primary)"
                    :line-width="2"
                />
                <VisAxis 
                    type="x" 
                    :x="(d: Data) => d.date" 
                    :tick-format="(d:any) => new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })" 
                    :tick-line="false"
                    :domain-line="false"
                    :grid-line="false"
                />
                <VisAxis 
                    type="y" 
                    :tick-line="false"
                    :domain-line="false"
                    :tick-format="(d:any) => `$${d}`"
                />
                <VisTooltip />
                <VisCrosshair />
            </VisXYContainer>
          </div>
        </CardContent>
      </Card>
      
      <Card class="col-span-3">
        <CardHeader>
          <CardTitle>Recent Sales</CardTitle>
          <CardDescription>
            You made 265 sales this month.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-8">
            <div v-for="(item, index) in recentTransactions" :key="index" class="flex items-center">
              <div class="flex h-9 w-9 items-center justify-center rounded-full bg-muted font-bold text-muted-foreground">
                  {{ item.customer.charAt(0) }}
              </div>
              <div class="ml-4 space-y-1">
                <p class="text-sm font-medium leading-none">{{ item.customer }}</p>
                <p class="text-sm text-muted-foreground">{{ item.email }}</p>
              </div>
              <div class="ml-auto font-medium">{{ item.amount }}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    <BarChartComponent />
    <LineChartComponent />
     <Card>
        <CardHeader class="flex flex-row items-center">
            <div class="grid gap-2">
                <CardTitle>Transactions</CardTitle>
                <CardDescription>Recent transactions from your store.</CardDescription>
            </div>
            <Button as-child size="sm" class="ml-auto gap-1">
                <a href="#">
                    View All
                    <ArrowUpRight class="h-4 w-4" />
                </a>
            </Button>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead class="hidden xl:table-cell">Type</TableHead>
                        <TableHead class="hidden xl:table-cell">Status</TableHead>
                        <TableHead class="hidden xl:table-cell">Date</TableHead>
                        <TableHead class="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="transaction in recentTransactions" :key="transaction.date">
                        <TableCell>
                            <div class="font-medium">{{ transaction.customer }}</div>
                            <div class="hidden text-sm text-muted-foreground md:inline">{{ transaction.email }}</div>
                        </TableCell>
                        <TableCell class="hidden xl:table-cell">Sale</TableCell>
                        <TableCell class="hidden xl:table-cell">
                            <span 
                                class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                                :class="{
                                    'bg-green-100 text-green-800': transaction.status === 'Approved',
                                    'bg-yellow-100 text-yellow-800': transaction.status === 'Processing',
                                    'bg-red-100 text-red-800': transaction.status === 'Failed',
                                }"
                            >
                                {{ transaction.status }}
                            </span>
                        </TableCell>
                        <TableCell class="hidden xl:table-cell">{{ transaction.date }}</TableCell>
                        <TableCell class="text-right">{{ transaction.amount }}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CardContent>
    </Card>
  </div>
</template>
