import { INavItem } from "@/types";
import {
  faHome,
  faUser,
  faBriefcase,
  faAward,
  faLaptopCode,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export const navMenus: INavItem[] = [
  {
    name: "Home",
    link: "/#hero",
    icon: faHome,
  },
  {
    name: "Services",
    link: "/#services",
    icon: faBriefcase,
  },
  {
    name: "Skills",
    link: "/#skills",
    icon: faAward,
  },
  {
    name: "Projects",
    link: "/#projects",
    icon: faLaptopCode,
  },
  {
    name: "About",
    link: "/#about",
    icon: faUser,
  },
  {
    name: "Contact",
    link: "/#contact",
    icon: faEnvelope,
  },
];
