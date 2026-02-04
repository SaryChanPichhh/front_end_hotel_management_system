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
import { TabInfo, ButtonInfo, GroupInfo } from "./TabInfo";
const ribbonData = [
  {
    name: TabInfo.Permission,
    groups: [
      {
        name: GroupInfo.Permission,
        buttons: [
          {
            name: ButtonInfo.Permission,
            route: ROUTE_NAME.PERMISSION,
            icon: UserGroupIcon,
          },
        ],
      },
    ],
  },
  {
    name: TabInfo.GeneralSetting,
    groups: [
      {
        name: GroupInfo.Room,
        buttons: [
          {
            name: ButtonInfo.RoomType,
            route: ROUTE_NAME.ROOM_TYPE,
            icon: BuildingOfficeIcon,
          },
        ],
      },
    ],
  },
  {
    name: TabInfo.Service,
    groups: [
      {
        name: GroupInfo.RoomOperation,
        buttons: [
          { name: ButtonInfo.Room, route: ROUTE_NAME.ROOM, icon: CubeIcon },
        ],
      },
    ],
  },
  {
    name: TabInfo.Stock,
    groups: [
      {
        name: GroupInfo.Supplier,
        buttons: [
          {
            name: ButtonInfo.Supplier,
            route: ROUTE_NAME.SUPPLIER,
            icon: HomeModernIcon,
          },
        ],
      },
      {
        name: GroupInfo.Stock,
        buttons: [
          {
            name: ButtonInfo.Stock,
            route: ROUTE_NAME.STOCK,
            icon: SquaresPlusIcon,
          },
        ],
      },
    ],
  }, // ================= RESERVATION =================
  {
    name: TabInfo.Reservation,
    groups: [
      {
        name: GroupInfo.Reservation,
        buttons: [
          {
            name: ButtonInfo.Reservation,
            route: ROUTE_NAME.RESERVATION,
            icon: ClipboardDocumentListIcon,
          },
          {
            name: ButtonInfo.RoomCalendar,
            route: ROUTE_NAME.ROOM_CALENDAR,
            icon: ChartBarIcon,
          },
        ],
      },
      {
        name: GroupInfo.Customer,
        buttons: [
          {
            name: ButtonInfo.GuestInfo,
            route: ROUTE_NAME.GUEST,
            icon: UsersIcon,
          },
          {
            name: ButtonInfo.GuestHistory,
            route: ROUTE_NAME.GUEST_HISTORY,
            icon: ClipboardDocumentListIcon,
          },
        ],
      },
    ],
  },
  // ================= ABOUT =================
  {
    name: TabInfo.AboutUs,
    groups: [
      {
        name: GroupInfo.AboutSytem,
        buttons: [
          {
            name: ButtonInfo.About,
            route: ROUTE_NAME.ABOUT,
            icon: ClipboardIcon,
          },
        ],
      },
    ],
  },
];

export default ribbonData;
