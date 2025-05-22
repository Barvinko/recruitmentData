import type { RecruitmentPlace } from "../types";
import Reviews from "../assets/images/place/Reviews.png";
import Screenshots from "../assets/images/place/Screenshots.png";
import Discussion from "../assets/images/place/Discussion.png";
import BannerlordMP from "../assets/images/place/BannerlordMP.png";
import Discord from "../assets/images/place/Discord.png";
import Manuals from "../assets/images/place/Manuals.png";
import Modules from "../assets/images/place/Modules.png";
import ModulesCom from "../assets/images/place/ModulesCom.png";
import ScreenshotLocal from "../assets/images/place/ScreenshotLocal.png";

// Mock data for recruitment places
export const recruitmentPlaces: RecruitmentPlace[] = [
  {
    id: 1,
    title: "Steam: Обзоры",
    description:
      "Сортировать по недавним и по языку, и отправлять приглашение тем кто недавно написал обзор.",
    images: [
      {
        id: 101,
        src: Reviews,
        alt: "Reviews",
      },
    ],
    tips: [],
  },
  {
    id: 2,
    title: "Steam: Скриншоты",
    description:
      "Выбираем недавние в Скриншотах и ищем русскоязычные никнеймы, подписи у скриншотах, и присутствие русской локализации на скриншотах",
    images: [
      {
        id: 201,
        src: Screenshots,
        alt: "Screenshots",
      },
      {
        id: 301,
        src: ScreenshotLocal,
        alt: "ScreenshotLocal",
      },
    ],
    tips: [],
  },
  {
    id: 3,
    title: "Steam: Обсуждение",
    description:
      "Выбирать RU-форум, и заходить в обсуждение начиная с верхних, и добавлять в друзья недавних коментаторов",
    images: [
      {
        id: 301,
        src: Discussion,
        alt: "Discussion",
      },
    ],
    tips: [],
  },
  {
    id: 4,
    title: "BannerlordMP",
    description:
      "Смотрим по никам в стиме(или через сам банер) [НЕ ПОЛЬЗОВАЛСЯ]",
    images: [
      {
        id: 401,
        src: BannerlordMP,
        alt: "BannerlordMP",
      },
    ],
    tips: [],
  },
  {
    id: 5,
    title: "Discord",
    description:
      "Ищем на разных серверах по русским никнеймам, кирилица русские слова латиницей [НЕ ПОЛЬЗОВАЛСЯ]",
    images: [
      {
        id: 501,
        src: Discord,
        alt: "Discord",
      },
    ],
    tips: [`https://discord.gg/ZRRS7q4g`],
  },
  {
    id: 6,
    title: "Steam: Руководство",
    description: "приглашать в друзья писателей руководств и комментаторов",
    images: [
      {
        id: 601,
        src: Manuals,
        alt: "Manuals",
      },
    ],
    tips: [],
  },
  {
    id: 7,
    title: "Steam: Модули",
    description: "Приглашать комментаторов",
    images: [
      {
        id: 701,
        src: Modules,
        alt: "Modules",
      },
      {
        id: 702,
        src: ModulesCom,
        alt: "ModulesCom",
      },
    ],
    tips: [],
  },
];
