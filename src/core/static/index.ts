import HomeIcon from "../../assets/icons/HomeIcon";
import MessagesIcon from "../../assets/icons/MessagesIcon";
import HelpIcon from "../../assets/icons/HelpIcon";
import {AvatarModel, MenuItemModel} from "../interfaces/common.interfaces";

export const MENU_ITEMS: MenuItemModel[] = [
    {
        label: "Home",
        path: "/",
        icon: HomeIcon
    },
    {
        label: "Messages",
        path: "/messages",
        icon: MessagesIcon
    },
    {
        label: "Help",
        path: "/help",
        icon: HelpIcon
    },
];

export const PROFILES: AvatarModel[] = [
    { name: "Bob", image: "/images/profiles/1.png" },
    { name: "John", image: "/images/profiles/2.png" },
    { name: "Tom", image: "/images/profiles/3.png" }
];

export const VARIANTS: string[] = [
    "In-game bonuses and free spins",
    "Crypto deposit still not credited?",
    "EigerX VIP program overview",
    "Achievements and awards"
];
