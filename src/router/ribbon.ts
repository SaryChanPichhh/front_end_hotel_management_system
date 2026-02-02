import { ClipboardIcon } from "lucide-vue-next";
import { ROUTE_NAME } from "./route-name";
import { ROUTE_PATH } from "./route-path";
import {
  UserGroupIcon,
  HomeModernIcon,
  SquaresPlusIcon,
  BuildingOfficeIcon,
  CubeIcon,
  UsersIcon,
  CreditCardIcon,
  ClipboardDocumentListIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  SparklesIcon,
} from "@heroicons/vue/24/solid";
import { FerrisWheel } from "lucide-vue-next";
const ribbonData = [
  {
    name: "ការគ្រប់គ្រង",
    groups: [
      {
        name: "អនុញ្ញាតសិទ្ធប្រើប្រាស់",
        buttons: [{ name: "ការអនុញ្ញាតសិទ្ធ", route: "", icon: UserGroupIcon }],
      },
    ],
  },
  {
    name: "ការកំណត់ទូទៅ",
    groups: [
      {
        name: "បន្ទប់",
        buttons: [
          {
            name: "ប្រភេទបន្ទប់",
            route: ROUTE_NAME.ROOM_TYPE,
            icon: BuildingOfficeIcon,
          },
        ],
      },
    ],
  },
  {
    name: "សេវាកម្ម",
    groups: [
      {
        name: "កក់បន្ទប់",
        buttons: [{ name: "បន្ទប់", route: ROUTE_NAME.ROOM, icon: CubeIcon }],
      },
    ],
  },
  {
    name: "ស្តុកទំនិញ",
    groups: [
      {
        name: "ការតាមដានអតិថិជន និងទីតាំង",
        buttons: [
          {
            name: "អ្នកផ្គត់ផ្គង់",
            route: ROUTE_NAME.SUPPLIER,
            icon: HomeModernIcon,
          },
        ],
      },
      {
        name: "ស្តុក",
        buttons: [
          {
            name: "របាយការណ៍ស្តុក",
            route: ROUTE_NAME.STOCK,
            icon: SquaresPlusIcon,
          },
        ],
      },
    ],
  }, // ================= RESERVATION =================
  {
    name: "ការកក់បន្ទប់",
    groups: [
      {
        name: "ការគ្រប់គ្រងការកក់",
        buttons: [
          {
            name: "ការកក់បន្ទប់",
            route: ROUTE_NAME.RESERVATION,
            icon: ClipboardDocumentListIcon,
          },
          {
            name: "ប្រតិទិនបន្ទប់",
            route: ROUTE_NAME.ROOM_CALENDAR,
            icon: ChartBarIcon,
          },
        ],
      },
      {
        name: "ភ្ញៀវ",
        buttons: [
          { name: "ព័ត៌មានភ្ញៀវ", route: ROUTE_NAME.GUEST, icon: UsersIcon },
          {
            name: "ប្រវត្តិការស្នាក់នៅ",
            route: ROUTE_NAME.GUEST_HISTORY,
            icon: ClipboardDocumentListIcon,
          },
        ],
      },
    ],
  },
  // ================= ABOUT =================
  {
    name: "អំពីយើង",
    groups: [
      {
        name: "បរិយាយ",
        buttons: [
          {
            name: "ព័ត៌មានប្រព័ន្ធ",
            route: ROUTE_NAME.ABOUT,
            icon: ClipboardIcon,
          },
        ],
      },
    ],
  },
];

export default ribbonData;
