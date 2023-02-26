import React, {useContext} from 'react';
import {AppContext} from "@/context/app.context";
import {IFirstLevelMenuItem, MenuItem, PageItem} from "@/interfaces/menu.interface";
import CoursesIcon from '../Menu/img/courses.svg';
import ServicesIcon from '../Menu/img/services.svg';
import BooksIcon from '../Menu/img/books.svg';
import ProductsIcon from '../Menu/img/products.svg';
import {TopLevelCategory} from "@/interfaces/page.interface";
import classes from "./Menu.module.css";
import cn from "classnames";

const firstLevelMenu :IFirstLevelMenuItem[] = [
    {route: 'curses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses},
    {route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services},
    {route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books},
    {route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products}
]
function Menu() :JSX.Element{
    const {menu, firstCategory, setMenu} = useContext(AppContext);
    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(menu =>
                    <div key={menu.route}>
                        <a href={`${menu.route}`}>
                            <div className={cn(classes.firstLevel, {
                                [classes.firstLevelActive]: menu.id === firstCategory
                            })}>
                                {menu.icon}
                                <span>{menu.name}</span>
                            </div>
                        </a>
                        {menu.id === firstCategory && buildSecondLevel(menu)}
                    </div>)}
            </>
        );
    };
    const buildSecondLevel = (menuItem :IFirstLevelMenuItem) => {
        return (
            <div className={classes.secondLevelWrapper}>
                {menu.map(m => (
                    <div key={m._id.secondCategory}>
                        <div className={classes.secondLevel}>
                            {m._id.secondCategory}
                        </div>
                        <div className={cn(classes.secondLevelBlock, {
                            [classes.secondLevelBlockOpened]: m.isOpened
                        })}>
                            {buildThirdLevel(m.pages, menuItem.route)}
                        </div>
                    </div>
                ))}
            </div>
        );
    };
    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(page => (
                <a key={page._id} href={`/${route}/${page.alias}`} className={cn(classes.thirdLevel, {
                    [classes.thirdLevelActive]: false
                })}>
                    {page.category}
                </a>
            ))
        );
    };
    return (
        <nav className={classes.menu}>
            {buildFirstLevel()}
        </nav>
    );
}

export default Menu;
