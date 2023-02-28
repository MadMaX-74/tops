import {IFirstLevelMenuItem} from "@/interfaces/menu.interface";
import CoursesIcon from "@/layout/Menu/img/courses.svg";
import {TopLevelCategory} from "@/interfaces/page.interface";
import ServicesIcon from "@/layout/Menu/img/services.svg";
import BooksIcon from "@/layout/Menu/img/books.svg";
import ProductsIcon from "@/layout/Menu/img/products.svg";
import React from "react";

export const firstLevelMenu :IFirstLevelMenuItem[] = [
    {route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses},
    {route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services},
    {route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books},
    {route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products}
];

export const priceRu = (price: number): string  => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' P');
