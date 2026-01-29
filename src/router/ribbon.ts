import { ROUTE_NAME } from "./route-name";
import { ROUTE_PATH } from "./route-path";
import { UserGroupIcon } from "@heroicons/vue/24/solid";
const ribbonData = [
  {
    name: "ការគ្រប់គ្រង",
    groups: [
      {
        name: "អនុញ្ញាតសិទ្ធប្រើប្រាស់",
        buttons: [
          { name: "ការអនុញ្ញាតសិទ្ធ", route: "", icon: UserGroupIcon },
          { name: "Italic", route: "italicAction" },
          { name: "Underline", route: "underlineAction" },
        ],
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
            icon: UserGroupIcon,
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
        buttons: [
          { name: "បន្ទប់", route: ROUTE_NAME.ROOM },
          { name: "Insert Shape", route: "insertShapeAction" },
        ],
      },
    ],
  },
  {
    name: "ស្តុកទំនិញ",
    groups: [
      {
        name: "ការតាមដានអតិថិជន និងទីតាំង",
        buttons: [{ name: "អ្នកផ្គត់ផ្គង់", route: ROUTE_NAME.SUPPLIER }],
      },
    ],
  },
  {
    name: "អំពីយើង",
    groups: [
      {
        name: "",
        buttons: [],
      },
    ],
  },
];

export default ribbonData;
