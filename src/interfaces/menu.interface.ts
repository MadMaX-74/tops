import {TopLevelCategory} from "@/interfaces/page.interface";

export interface PageItem {
    alias: string;
    title: string;
    _id:string;
    category: string;
}
export interface MenuItem {
    _id: {
        secondCategory: string
    };
    isOpened?:  boolean;
    pages: PageItem[]
}
export interface IFirstLevelMenuItem {
    route: string;
    name: string;
    icon: JSX.Element;
    id: TopLevelCategory;
}
