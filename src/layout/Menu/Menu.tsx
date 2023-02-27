import React, {useContext} from 'react';
import {AppContext} from "@/context/app.context";
import {IFirstLevelMenuItem, PageItem} from "@/interfaces/menu.interface";
import classes from "./Menu.module.css";
import cn from "classnames";
import Link from "next/link";
import {useRouter} from "next/router";
import {firstLevelMenu} from "@/helpers/helpers";

function Menu() :JSX.Element{
    const {menu, firstCategory, setMenu} = useContext(AppContext);
    const router = useRouter();

    const openSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory == secondCategory) {
                m.isOpened = !m.isOpened;
            }
            return m;
        }));
    };
    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(menu =>
                    <div key={menu.route}>
                        <Link href={`${menu.route}`}>
                                <div className={cn(classes.firstLevel, {
                                    [classes.firstLevelActive]: menu.id === firstCategory
                                })}>
                                    {menu.icon}
                                    <span>{menu.name}</span>
                                </div>
                        </Link>

                        {menu.id === firstCategory && buildSecondLevel(menu)}
                    </div>)}
            </>
        );
    };
    const buildSecondLevel = (menuItem :IFirstLevelMenuItem) => {
        return (
            <div className={classes.secondLevelWrapper}>
                {menu.map(m => {
                    if(m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                        m.isOpened = true;
                    }
                    return (
                    <div key={m._id.secondCategory}>
                        <div className={classes.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>
                            {m._id.secondCategory}
                        </div>
                        <div className={cn(classes.secondLevelBlock, {
                            [classes.secondLevelBlockOpened]: m.isOpened
                        })}>
                            {buildThirdLevel(m.pages, menuItem.route)}
                        </div>
                    </div>
                )})}
            </div>
        );
    };
    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(page => (
                <Link key={page._id}  href={`/${route}/${page.alias}`} className={cn(classes.thirdLevel, {
                    [classes.thirdLevelActive]: `/${route}/${page.alias}` == router.asPath
                })}>
                    {page.category}
                </Link>

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
